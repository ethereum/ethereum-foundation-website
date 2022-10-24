/** External Packages **/
import * as THREE from './assets/three.module.js';
import { OrbitControls } from './OrbitControls.js';
// import Stats from './assets/stats.module.js';
// Updated through /jsm dev branch
import { RenderPass } from './RenderPass.js'; // Updated DEV branch
import { UnrealBloomPass } from './UnrealBloomPass.js'; // Added to test out bloom pass upon the objects 
import { GlitchPass } from './GlitchPass.js'; // Updated DEV branch
import { EffectComposer } from './EffectComposer.js'; // Updated DEV Branch
import * as OBJLoader from './assets/OBJLoader.js'; // Updated
// import { MeshSurfaceSampler } from './MeshSurfaceSampler.js'; // Updated DEV branch

const generalSceneControls = {
    ["ETH Rotation Speed"]: 0.0002,  
};

/** Magic Variables **/
let scene;
let camera;
let renderer;
let composer;
let bloomPass;
let bloomPassEnabled; 
let glitch;
let stats;
let speed = 0.02;
let wildGlitch = false;
let color = [ 137, 188, 222 ]
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight
let container = document.getElementById( 'canvas' );
/** Fireflies **/
let fireflies; 
let firefliesGeometry, firefliesMaterial;
let firefliesActivated = false;
const firefliesVertexShader = document.getElementById("firefliesVertexShader").textContent;
const firefliesVertexShaderETHLogo = document.getElementById("firefliesVertexShader_ETHLogo").textContent;
const firefliesVertexShaderETHLogoSlow = document.getElementById("firefliesVertexShader_ETHLogo_SLOW").textContent;
const firefliesFragmentShader = document.getElementById("firefliesFragmentShader").textContent;
const firefliesFragmentShaderTwo = document.getElementById("firefliesFragmentShaderTwo").textContent;
const explosionVertexShaderTwo = document.getElementById("explosionVertexShader").textContent;
let mouseIntensity = 0.01; // Mouse intensity needs to remain between 0.01 and 0.03
/** Loaders **/
let objectLoader, loadingManager, currentLoader, textureLoader;
const environment = "dev";
const RELATIVE_URL = environment === "dev" ? "/assets/" : "/public/assets/"
// ETH Logo
let ethLogoFirefliesMesh;
// GLTF Animations
let sparklesGeometry, sparklesMaterial;
let clock;
// Bloom 
const bloomParams = {
    bloomStrength: 1, 
    bloomThreshold: 0.98, 
    bloomRadius: 0.5, 
};
// Explosion
let finalPointsShaderMaterial;
let finalPoints;
// Loaders
let ethObjectLoaded = false;
let backgroundLoaded = false;
// Mesh Surface Sampler
let meshSurfaceSamplerPointSize;
let backgroundPaintingIsDisplayed = true;
let gridHelper;
let gridHelperDisplayed = true;
// Rotation Animation
let activateParticleRotation = true;
let animatedModelParticleSize;
let animatedModelPointsMaterial;
// ETH Logo 
let nameOfFinalFileSelected;
// Home Page Plane
let homePagePlanetMaterial;
let backgroundPlaneMesh;
let backgroundPlaneMeshDisplayed = true; 
// Degenerate Geometry
let degenerateGeometry;
let degenerateMesh;
// Selective Bloom variables
// Footer 
let footerDisplayed; 
// Menu
let menuDisplayed = false;
let mainContentShownOnPage = false;	
// GUI Controllers
let statsAdded = false;
// Main Object
let mainObject;


// Mesh Surface Sampler
let sampler, group;
let meshSurfaceColors = [];
let meshSurfaceVertices = [];
// const palette = [new THREE.Color("#FAAD80"), new THREE.Color("#FF6767"), new THREE.Color("#FF3D68"), new THREE.Color("#A73489")];
// const palette = [new THREE.Color("#778afd"), new THREE.Color("#7168e9"), new THREE.Color("#faf3f6"), new THREE.Color("#637999")];
const palette = [new THREE.Color("#FFFFFF")];
/* Vector to sample the new point */
const tempPosition = new THREE.Vector3();

function addPoint () {

    // Sample a new point
    sampler.sample(tempPosition);

    // Push the point coordinates
    meshSurfaceVertices.push(tempPosition.x,tempPosition.y,tempPosition.z);
    // Updates position attribute with the new array of coordinates (which is the old array with the recentlypushed coordinates)
    sparklesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(meshSurfaceVertices, 3));


    // Get random color from palette
    const color = palette[Math.floor(Math.random() * palette.length)];
    // Push picked color
    meshSurfaceColors.push(color.r, color.g, color.b);
    // Updates color 
    sparklesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(meshSurfaceColors, 3));
    

}

function removePoint () {


    // Push the point coordinates
    meshSurfaceVertices.pop();
    meshSurfaceVertices.pop();
    meshSurfaceVertices.pop();

    // Updates position attribute with the new coordinates
    sparklesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(meshSurfaceVertices, 3));

    // Push picked color
    meshSurfaceColors.pop();
    meshSurfaceColors.pop();
    meshSurfaceColors.pop();
    
    // Updates color 
    sparklesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(meshSurfaceColors, 3));

}



/** Loaders **/

function initLoadingManager () {

    loadingManager = new THREE.LoadingManager();

    loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
    }

    loadingManager.onLoad = () => {
        removeLoadingScreen();
    }

    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    }

    loadingManager.onError = (url) => {
    }

}

function removeLoadingScreen () {
    let transitionContainer = document.getElementById("transition--container");
    transitionContainer.classList.add("removed")
};

function initLoaders () {

    initLoadingManager();
    
    textureLoader = new THREE.TextureLoader(loadingManager);
    objectLoader = new OBJLoader.OBJLoader(loadingManager);

}

/**
 * Different objects that can be passed in to the loader
 * They all have different amounts of vertices and will therefore render differnet results visually
 * Objects with less vertices should have particles that are bigger in size in order to be able to perceive
 * them better - especially important since the scene is light and the particles are white and shine
 * #3d #animation #ethereum #object
 */
const MINIM_VERTICE_OBJECT = "Eth_logo_SOLID.OBJ"; // 14 vertices
const LARGE_NUMBER_OF_VERTEX_OBJECT = "ETH_Logo_Planet_Match.obj"; // 30K vertices
const MEDIUM_NUMBER_OF_VERTEX_OBJECT = "Eth_logo_grids.OBJ"; // 16K Vertices
const MISC_OBJECT = "Eth_logo_Beveld.OBJ"; // 

/**
 * Used to load and render the ETH object made out of particles into the threeJS scene
 */ 

function addMainObjectToScene () {
    const ASSET_TYPE = 1;		
    /** 
     * #ethereum #3d #object 
     * Pass in one of the variables above to see the ethereum object rendered with different number
     * of vertices
     **/
    const ASSET_URL = MISC_OBJECT;
    const FILE_TYPE = "obj";

    nameOfFinalFileSelected = ASSET_URL;

    // Creates a sphere composed of thousands of particles
    if (isHomePage()) {
        load3DModelObject(ASSET_URL, FILE_TYPE);
    } else {
        loadDegenerateParticleMesh(ASSET_URL, FILE_TYPE); 
    }

}

function isHomePage () {
    return window.location.pathname === "/";
}


function load3DModelObject (modelFileName, fileType) {
				
    const currentLoader = objectLoader;
    currentLoader.setPath(RELATIVE_URL);

    /** 
     * Depending on the object loaded, change the size of the particles by modifying one of the variables below
     * #ethereum #3d #object
     */
    if (modelFileName === MINIM_VERTICE_OBJECT) {
        animatedModelParticleSize = 0.3;
    } else if (modelFileName === LARGE_NUMBER_OF_VERTEX_OBJECT) {
        animatedModelParticleSize = 0.014;
    } else if (modelFileName === MEDIUM_NUMBER_OF_VERTEX_OBJECT) {
        animatedModelParticleSize = 0.001;
    } else if (modelFileName === MISC_OBJECT) {
        animatedModelParticleSize = 0.1;
    }

    animatedModelPointsMaterial = new THREE.PointsMaterial({
            // color: "rgb(400, 255, 255)", 
            color: new THREE.Color(10, 10, 10),
            size: animatedModelParticleSize, 
            transparent: true, 
            // The line below can be removed
            map: new THREE.TextureLoader().load("https://assets.codepen.io/127738/dotTexture.png"), 
            blending: THREE.AdditiveBlending, 
            depthWrite: false, 
            toneMapped: false, 
        });

    currentLoader.load(modelFileName, function (object) {

        let mesh = object.children[0];
        let geometry = mesh.geometry;

        console.log("Geometry: ", geometry);

        let scaleArray = new Float32Array(48000);
        
        for (let i=0; i<scaleArray.length; i++) {
            scaleArray[i] = 0.01;
        }
        
        geometry.setAttribute(
            "aScale", 
            new THREE.BufferAttribute(scaleArray, 1),
        );

        finalPointsShaderMaterial = new THREE.ShaderMaterial({
            vertexShader: firefliesVertexShaderETHLogo,
            // vertexShader: explosionVertexShaderTwo,
            fragmentShader: firefliesFragmentShader,
            transparent: true,
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                uSize: { value: 15000 }, 
                color: {
                    type: "v3", 
                    value: new THREE.Vector3( ...rgbToPercentage( color ) ),
                }, 
                mouseIntensity: {
                    type: "f", 
                    value: generalSceneControls["Mouse Intensity"], 
                }
            },
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        // Morph Target I 
        // This code can be replicated across different geometries
        // Should most likely be 

        let newPositions = [];
        const positionAttribute = geometry.attributes.position;
        
        for (let i=0; i<positionAttribute.count; i++) {

            let xValue;
            
            // Only sets positive values
            // newPositions.push(
            // 	(Math.random() - 0.5) * 100,
            // 	(Math.random() * 1.5) * 100,
            // 	(Math.random() - 0.5) * 100, 
            // );
            
            // Sets positive and negative values
            let distance = 50;
            let theta = THREE.MathUtils.randFloatSpread(360);
            let phi = THREE.MathUtils.randFloatSpread(360);

            newPositions.push(
                // Math.ceil(Math.random() * distance * 20) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 30) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
                // 10 * Math.sin(theta) * Math.cos(phi), // Puts particles on the surface of a sphere
                // 10 * Math.sin(theta) * Math.sin(phi), // Puts particles on the surface of a sphere
                // 10 * Math.cos(theta), // Puts particles on the surface of a sphere
                Math.ceil(Math.random() * 150 * distance) * Math.sin(theta) * Math.cos(phi), // Sets particles within the sphere
                Math.ceil(Math.random() * 150 * distance) * Math.sin(theta) * Math.sin(phi), // Sets particles within the sphere
                Math.ceil(Math.random() * 150 * distance) * Math.cos(theta), // Sets particles within the sphere
            );

        };

        // Replica Geometry

        // const replica = createReplicaWithOutsideParticlesOfGeometry(geometry)

        // Test II: we create our own sphere filled with actual particles
        // newPositions = createMorphSphereGeometry();
        
        geometry.morphAttributes.position = [];
        geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(newPositions, 3);

        let points = new THREE.Points(geometry, animatedModelPointsMaterial);

        // points.scale.x = points.scale.y = points.scale.z = 0.1;
        points.scale.x = points.scale.y = points.scale.z = 2;
        points.position.x = 0;
        points.position.y = 0.5;
        points.position.z = 0;

        finalPoints = points;

        scene.add(points);
        
    })
    
}



/**
 * The "degenerate" mesh is the mesh with all the particles spread out 
 * In this case, the particles are rendered somewhat randomly across the space in the shape of a sphere
 * Note: The previous rendering, which has been commented out, rendered particles in space to form a final 
 * cubic shape, which did not look good when the particles expanded.
 **/ 
function loadDegenerateParticleMesh (modelFileName, fileType) {
    
    const currentLoader = objectLoader;
    currentLoader.setPath(RELATIVE_URL);

    // This variable affects the size of the particles
    animatedModelParticleSize = 0.05;

    animatedModelPointsMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(10, 10, 10),
        size: animatedModelParticleSize, 
        transparent: true, 
        map: new THREE.TextureLoader().load("https://assets.codepen.io/127738/dotTexture.png"), 
        blending: THREE.AdditiveBlending, 
        depthWrite: false, 
        toneMapped: false, 
    });

    currentLoader.load(modelFileName, function (object) {

        let mesh = object.children[0];
        let geometry = mesh.geometry;


        let count = 48000;
        let newPositions = [];
        let scaleArray = new Float32Array(count);

        const positionAttribute = geometry.attributes.position;
        

        for (let i=0; i<positionAttribute.count; i++) {
                                    
            // let distance = 3;
            // #distance: Modifies how far the particles are rendered from the center
            // and therefore how close they are to camera
            let distance = 4;
            let theta = THREE.MathUtils.randFloatSpread(360);
            let phi = THREE.MathUtils.randFloatSpread(360);

            newPositions.push(
                // Rectangular Algorithm
                // Math.ceil(Math.random() * distance * 15) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 15) * (Math.round(Math.random()) ? 1 : -1),
                // Math.ceil(Math.random() * distance * 15) * (Math.round(Math.random()) ? 1 : -1),
                // Spherical Rendering Algorithm
                Math.ceil(Math.random() * 50 * distance) * Math.sin(theta) * Math.cos(phi), // Sets particles within the sphere
                Math.ceil(Math.random() * 50 * distance) * Math.sin(theta) * Math.sin(phi), // Sets particles within the sphere
                Math.ceil(Math.random() * 50 * distance) * Math.cos(theta), // Sets particles within the sphere
            );

            // Comment: This does not affect the actual size of the particles 
            scaleArray[i] = Math.random() * 100;

        };

        // We simply 1. distribute points in space
        // 2. We set the scale, 
        // 3. We create the object
        
        let bufferGeometry = new THREE.BufferGeometry();
        bufferGeometry.setAttribute("position", new THREE.Float32BufferAttribute(newPositions, 3));

        let finalPointsGeometry = new THREE.BufferGeometry().setFromPoints(newPositions);
        
        finalPointsGeometry.setAttribute(
            "aScale", 
            new THREE.BufferAttribute( scaleArray, 3 ), 
        );

        bufferGeometry.setAttribute(
            "aScale", 
            new THREE.BufferAttribute( scaleArray, 3 ), 
        );

        let points = new THREE.Points(bufferGeometry, animatedModelPointsMaterial);
        points.scale.x = points.scale.y = points.scale.z = 2;
        finalPoints = points;
        scene.add(points);

    })

    
}

/**
 * Function left here for future optimizations in case we want to create more complex
 * animation sequences between particles
 */
function createDegenerateParticles () {

    const geometry = createPointMeshForBlockchainMiningAnimation(); 
    
    const meshSurfaceSamplerPointSize = 0.1;
        
    const pointsMaterial =  new THREE.PointsMaterial({
        size: meshSurfaceSamplerPointSize, 
        alphaTest: 0.2, 
        map: new THREE.TextureLoader().load("https://assets.codepen.io/127738/dotTexture.png"), 
        vertexColors: true, 
        color: 0xffffff, 
    });

    degenerateMesh = new THREE.Points( geometry, pointsMaterial );
    degenerateMesh.name = "DegenerateParticles";
    degenerateMesh.position.x = 0;
    degenerateMesh.position.y = 0;
    degenerateMesh.position.z = 0;

    // Set bufferGeometry morph targets
    const endStatePositionAttributes = createDegenerateParticleSystemInEndState();

    scene.add(degenerateMesh);

};

// Helper function for @createDegenerateParticles
function createPointMeshForBlockchainMiningAnimation () {

    // Create initial mesh which will hold all the particles outside the mesh
    let particleCount = 100;
    let newPositions = [];
    let colors = [];
    let scales = [];

    for (let i=0; i < particleCount; i++) {

        const v = new THREE.Vector3(
            THREE.MathUtils.randFloat( -10, 10), 
            THREE.MathUtils.randFloat( -10, 10), 
            THREE.MathUtils.randFloat( -10, 10), 
        )
        
        newPositions.push(v);

        // Add color for particle 
        const color = palette[Math.floor(Math.random() * palette.length)];
        colors.push(color.r, color.g, color.b);

        // Add scale array 
        let randomScale = 0.001;
        scales.push(randomScale);

    }
    
    // After we've set the positions, we most likely want to create an actual buffer geometry with these attributes
    degenerateGeometry = new THREE.BufferGeometry().setFromPoints( newPositions );
    degenerateGeometry.setAttribute( "color", new THREE.Float32BufferAttribute( colors, 3 ) )
    degenerateGeometry.setAttribute( "aScale", new THREE.Float32BufferAttribute( scales, 1 ) )
    
    degenerateGeometry.morphAttributes.position = [];
    degenerateGeometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute( newPositions, 3 );

    return degenerateGeometry;

}


// Helper function for @createDegenerateParticles - the "end state" here refers to the illusory mesh that we will create
// in order to give the impression that particles are "expanding", which will be the transition between the different potential
// animations we might be implementing.
function createDegenerateParticleSystemInEndState () {

    let particleCount = 100;
    let newPositions = [];
    let colors = [];
    let scales = [];
    let distance = 50;

    for (let i=0; i < particleCount; i++) {


        const v = new THREE.Vector3(
            0, 
            0, 
            0, 
        )

        newPositions.push(v);

        // Add color for particle 
        const color = palette[Math.floor(Math.random() * palette.length)];
        colors.push(color.r, color.g, color.b);

        // Add scale array 
        // let randomScale = Math.random() * 5;
        let randomScale = 0.001;
        scales.push(randomScale);

    }

    const bufferGeometry = new THREE.BufferGeometry().setFromPoints( newPositions );
    bufferGeometry.setAttribute( "color", new THREE.Float32BufferAttribute( colors, 3 ) )
    bufferGeometry.setAttribute( "aScale", new THREE.Float32BufferAttribute( scales, 1 ) );


    // return bufferGeometry;
    return newPositions;

}

/**  
 * Helper function created in order to generate a degenerate particle morph target for any object that we pass
 * We use because if we want to morph a particle system from an initial state (geometry argument) to another state
 * or to an "explosion" state, the target state needs to have the same amount of particles as the passed geometry.
 * This function ensures that we render a particle system with the exact same amount of vertices (and particles)
 * as the geometry that we have passed
 */
function createParticleMorphTargetForGeometry (geometry) {

        // New Positions
        let newPositions = [];

        
        const positionAttribute = geometry.attributes?.position;
        
        
        for (let i=0; i<positionAttribute?.length; i++) {

            let xValue;
            let distance = 50;

            newPositions.push(
                Math.ceil(Math.random() * distance * 20) * (Math.round(Math.random()) ? 1 : -1),
                Math.ceil(Math.random() * distance * 30) * (Math.round(Math.random()) ? 1 : -1),
                Math.ceil(Math.random() * distance * 50) * (Math.round(Math.random()) ? 1 : -1),
            );

        };

        // Test II: we create our own sphere filled with actual particles

        geometry.morphAttributes.position = [];
        geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(newPositions, 3);

}


/**
 * 
 * Algorithm #3 to render our object
 * In this case, this function renders particles randomly on the surface of our object.
 * This allow us to create a more "organic" feeling to the objects that we might be creating.
 * 
 * @note: It is also useful when we have an object that does not have enough vertices to render 
 * with our first alogrithm.
 * 
 */
function loadVisible3DModelWithSurfaceSampler (modelFileName, fileType, assetType) {

    let material;
    let sparklesMaterialTwo;
    let assetURL;
    let webPSupported = testWebP();
    let geometry; 
    let currentLoader = objectLoader;								
    material = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true });

    // MEsh Surface Attempt #1
    group = new THREE.Group();

    // group.scale.x = group.scale.y = group.scale.z = 0.001;
    group.scale.x = group.scale.y = group.scale.z = 0.005;
    
    scene.add(group);

    // Store each partiicle coordinates & color
    // const vertices = [];
    // const colors = [];
    // The geometry of the poitns
    sparklesGeometry = new THREE.BufferGeometry();

    if (nameOfFinalFileSelected === "Eth_logo_grids.obj") {
        meshSurfaceSamplerPointSize = 0.06;
    } else {
        meshSurfaceSamplerPointSize = 0.02;
    }
    
    
    sparklesMaterial = new THREE.PointsMaterial({
        size: meshSurfaceSamplerPointSize, 
        alphaTest: 0.2, 
        map: new THREE.TextureLoader().load("https://assets.codepen.io/127738/dotTexture.png"), 
        vertexColors: true, // Let Three.JS know that each point has a different color
    });

    sparklesMaterialTwo = new THREE.ShaderMaterial({
        vertexShader: firefliesVertexShaderETHLogo,
        fragmentShader: firefliesFragmentShader,
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            uSize: { value: 100 }, 
            color: {
                type: "v3", 
                value: new THREE.Vector3( ...rgbToPercentage( color ) ),
            }, 
            mouseIntensity: {
                type: "f", 
                value: mouseIntensity, 
            }
        },
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // Create Points object
    const points = new THREE.Points(sparklesGeometry, sparklesMaterial);


    group.add(points);

    group.position.x = 0;
    group.position.y = 0.5;
    group.position.z = 0;
                    

    // We modify the size of the ETH logo rendered depending on the file that we are using
    if (modelFileName === "Eth_logo_grids.obj") {
        group.scale.x = group.scale.y = group.scale.z = 3.4;
    } else {
        group.scale.x = group.scale.y = group.scale.z = 1.8;
    };


    // let sampler = null; 
    let shape = null; 

    currentLoader.setPath(RELATIVE_URL);
    currentLoader.load(modelFileName, function (object) {

        let mesh = object.children[0];
        let geometry = object.children[0].geometry

        // We need to add scale and position
        // object.position.x = object.position.y = object.position.z = 0;
        // object.scale.x = object.scale.y = object.scale.z = 2
        object.position.x = 0;
        object.position.y = 10;
        object.position.z = 0;

        // scene.add(object);
        group.add(object);

        mainObject = group;

        // sampler = new MeshSurfaceSampler(mesh).setWeightAttribute(null).build();
        sampler = new MeshSurfaceSampler(mesh).setWeightAttribute("uv").build();


        // // Not orthographic camera
        // object.scale.x = object.scale.y = object.scale.z = 0.005;
        // object.position.x = 0;
        // object.position.y = 1;
        // object.position.z = 0;
        
        // object.name = 'mainObject';
        // object.visible = true;
        // mainObject = object;
        // mainObject.position.clampScalar(0, 100);

        scene.add(object);
        

    })


}


/**
 * 
 * Algorithm created in order to render the ETH Object with points inside of it that are randomly 
 * distribute
 * 
 * Created as an alternate rendering of the ETH logo, the other renderings being the surface sampler based
 * algorithm and the one that we are #currently using, which renders the particles where the vertices of
 * the object are. 
 * 
 */ 
function fillGeometryWithPoints (geometry, count, bufferGeometry) {
    
    let dummyTarget = new THREE.Vector3(); 
    let ray = new THREE.Ray();
    let size = new THREE.Vector3();
    
    let boundingBox; 
    // Where we are going to be storing the vertice of the different points which will form our logo
    let points = [];
    // Just like in the @addPoint function, we need a color for every single point that is going to be rendered
    let colors = [];
    let dir = new THREE.Vector3(1, 1, 1).normalize();
    
    if (geometry.computeBoundingBox) {
        
        
        geometry.computeBoundingBox();
        boundingBox = geometry.boundingBox;
        
        let dir = new THREE.Vector3(1, 1, 1).normalize();
        let counter = 0;

        while (counter < count) {
            
            let v = new THREE.Vector3(
                THREE.MathUtils.randFloat(boundingBox.min.x, boundingBox.max.x), 
                THREE.MathUtils.randFloat(boundingBox.min.y, boundingBox.max.y), 
                THREE.MathUtils.randFloat(boundingBox.min.z, boundingBox.max.z), 
            )

            if (isInside(v, geometry)) {

                // First we push the actual point into the relevant array
                points.push(v);

                // We pass in the colors associated with the above vertices
                const color = palette[Math.floor(Math.random() * palette.length)];
                colors.push(color.r, color.g, color.b);

                // Then we increment the counter
                counter++;
                
            }

        }

    } else {

        
        geometry.traverse((child) => {

            if ( child instanceof THREE.Mesh ) {
                
                child.geometry.computeBoundingBox();
                boundingBox = child.geometry.boundingBox;
                

                // let points = [];

                let counter = 0;

                while (counter < count) {
                    
                    let v = new THREE.Vector3(
                        THREE.MathUtils.randFloat(boundingBox.min.x, boundingBox.max.x), 
                        THREE.MathUtils.randFloat(boundingBox.min.y, boundingBox.max.y), 
                        THREE.MathUtils.randFloat(boundingBox.min.z, boundingBox.max.z), 
                    )

                    if (isInside(v, child.geometry)) {
                        points.push(v);
                        counter++;
                    }

                }
                
            }
        })

    }


    /** Helper Function
     * @called by @fillGeometryWithPoints
     * @returns {Boolean} Letting us know whether the vertex that we have passed is inside the geometry that we have passed
     **/

    function isInside (v, geometry) {

        // We run a raycaster from inside the mesh in every direction and count how many
        // triangles are intersected. If the # of intersected faces is odd, then the point
        // are located within the bounding box of the mesh
            
        ray.set(v, dir);

        let counter = 0; 
        let pos = geometry.attributes.position;
        let faces = pos.count / 3;

        let vA = new THREE.Vector3(), 
            vB = new THREE.Vector3(), 
            vC = new THREE.Vector3();

        for(let i = 0; i < faces; i++){
            vA.fromBufferAttribute(pos, i * 3 + 0);
            vB.fromBufferAttribute(pos, i * 3 + 1);
            vC.fromBufferAttribute(pos, i * 3 + 2);
            if (ray.intersectTriangle(vA, vB, vC, false, dummyTarget)) counter++;
        }
        
        return counter % 2 == 1;
    
    }
    
    // At the end, we return a buffer geometry with the right attributes set to it
    // The line below is commented out as this was how we previously had it 
    // return new THREE.BufferGeometry().setFromPoints(points);
    // The code below is our attempt of setting up individual colors for every vertice
    bufferGeometry = new THREE.BufferGeometry().setFromPoints(points);
    // bufferGeometry.setAttribute("position", new THREE.Float32BufferAttribute( points, 3 ));
    bufferGeometry.setAttribute("color", new THREE.Float32BufferAttribute( colors, 3 ));
    // Return the buffer geometry
    return bufferGeometry;


}


/** Light **/

function setLightInScene () {
    let sun = new THREE.DirectionalLight(0xFFFFFF, 1.7);
    sun.position.set(4, 4, 4);
    scene.add(sun);
}

/** SkyBox **/

function createEquirectangularBackground () {

    let webPFormatSupported = testWebP();

    // We download the relevant background based on the URL that is displayed
    let texture;
    
    const geometry = new THREE.SphereGeometry( 500, 60, 40 );
    geometry.scale( - 1, 1, 1 ) ;
    
    let url = window.location.pathname;

    if (url === "/philosophy") {
        
        if (webPFormatSupported) {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-12000px.jpg");
            }

        } else {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-philosophy-03-12000px.jpg");
            }
            
        }

    } else if (url === "/ef") {

        if (webPFormatSupported) {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-12000px.jpg");
            }

        } else {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-ef-03-12000px.jpg");
            }
            
        }
        
    } else if (url === "/ethereum") {

        if (webPFormatSupported) {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-12000px.jpg");
            }
            
        } else {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-ethereum-03-12000px.jpg");
            }
           
        }

    } else if (url === "/infinitegarden") {

        if (webPFormatSupported) {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-12000px.jpg");
            }
            
        } else {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-infinite-garden-03-12000px.jpg");
            }
           
        }
        
    } else if (isHomePage()) {

        if (webPFormatSupported) {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-12000px.jpg");
            }
            
        } else {

            if (screen.width < 500) {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-6000px.jpg");
            } else if (screen.width >= 500 && screen.width <= 1700) {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-8000px.jpg");
            } else if (screen.width > 1700)  {
                texture = textureLoader.load("assets/EF-website-landscape-landing-03-12000px.jpg");
            }
           
        }

    }

    // Render the material with the previously retrieved texture
    const material = new THREE.MeshBasicMaterial( { map: texture, toneMapped: false });
    
    // Render the mesh
    const mesh = new THREE.Mesh( geometry, material );
    
    if (url.indexOf("philosophy") !== -1) {
        // Philosophy page
        mesh.rotation.y = - Math.PI / 2;
    } else if (url.indexOf("ef") !== -1) {
        mesh.rotation.y = Math.PI / -1.95;
        // EF page
    } else if (url.indexOf("ethereum") !== -1) {
        // Ethereum page
        mesh.rotation.y = - Math.PI / 1.55;
    } else if (url.indexOf("infinitegarden") !== -1) {
        mesh.rotation.y = - Math.PI / 2;
    }
    
    scene.add(mesh);

    render();

}


/** FIREFLIES **/ 

/**
 * Creates and renders fireflies in scene with custom fragment and vertex shader
 **/ 
function addFireflies() {

    firefliesGeometry = new THREE.BufferGeometry();
    const firefliesCount = 1000;
    const positionArray = new Float32Array(firefliesCount * 3);
    const scaleArray = new Float32Array(firefliesCount);
    
    for (let i = 0; i < firefliesCount; i++) {
        new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() * 1.5) * 2,
            (Math.random() - 0.5) * 500, // Spread them more across the Z axis
        ).toArray(positionArray, i * 3);
        scaleArray[i] = 5;
    }

    firefliesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positionArray, 3)
    );

    firefliesGeometry.setAttribute(
        "aScale",
        new THREE.BufferAttribute(scaleArray, 1)
    );

    firefliesMaterial = new THREE.ShaderMaterial({
        vertexShader: firefliesVertexShader,
        fragmentShader: firefliesFragmentShader,
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            uSize: { value: 100 }, 
            color: {
                type: "v3", 
                value: new THREE.Vector3( ...rgbToPercentage( color ) ),
            }, 
            mouseIntensity: {
                type: "f", 
                value: mouseIntensity, 
            }
        },
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    fireflies = new THREE.Points(firefliesGeometry, firefliesMaterial);
    fireflies.position.x = 0;
    fireflies.position.y = 0;
    fireflies.position.z = 0;

    scene.add(fireflies);

    firefliesActivated = true;

}

/**
 * Creates a semi-opaque cylinder placed between the ETH object and the background, which is in turn
 * modified in the @render function in order to give the illusion that the opacity of the whole
 * scene is changin
 */ 
function createHomePageCylinder () {

    homePagePlanetMaterial = new THREE.MeshBasicMaterial({
        color: "#00000F", 
        transparent: true, 
        opacity: 0.1, 
        depthWrite: false, 
    });

    const geometry = new THREE.CylinderGeometry( 15, 15, 20, 100 )
    geometry.name = "HomePage_TextPlane";
                    
    backgroundPlaneMesh = new THREE.Mesh( geometry, homePagePlanetMaterial )				
    
    backgroundPlaneMesh.scale.x = backgroundPlaneMesh.scale.y = backgroundPlaneMesh.scale.z = 1;
    
    backgroundPlaneMesh.position.x = 0;
    backgroundPlaneMesh.position.y = 0;
    backgroundPlaneMesh.position.z = 0;
    
    scene.add(backgroundPlaneMesh);

}


/** Scene Helpers **/ 

function addGridHelper () {
    const size = 100;
    const divisions = 100;
    gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);
    gridHelperDisplayed = true;
}

function addAxesHelper () {
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
}


function begin () {

    initScene();
    initCamera();
    initRenderer();
    initPostProcessingEffects();
    initControls();
    initLoaders();				
    setLightInScene();
    renderWebPImages();

    if (statsAdded) {
        addStatsElement();
    };
    
    // Renders fireflies on screen with the fragment and vertex shaders 
    // If activated, then we need to comment in the elapsedTime uniform code in the @render function
    if (firefliesActivated) {		
        addFireflies();
    };
    
    if (backgroundPaintingIsDisplayed) {					
        // Renders the background "scenes" that the user can look into
        createEquirectangularBackground();
    };
    
    /** Objects rendered onto the scene **/ 
    addMainObjectToScene();

    // Future implementation if we add different objects:
    // Create the degenerate particles as the basis and set the different objects
    // as morph targets, which in turn allows us to morph the object in between different shapes.
    // createDegenerateParticles();
    
    // This is the cylinder that goes between the ETH logo and the camera, which in turn allows us to create an illusion of increasing "background opacity"
    // in the whole 3D environment. 
    if (backgroundPlaneMeshDisplayed) {
        createHomePageCylinder();
    };
    
    // Helpers
    // addGridHelper();
    // addAxesHelper();
    
    animate(this);
    
}

function initCamera () {

    camera = new THREE.PerspectiveCamera( 50, innerWidth / innerHeight, 0.5, 1000 )
    camera.position.set( 0, 2, 16 );
    camera.lookAt(0, 0, 0)
    scene.add( camera )

};

function initScene () {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x111111 );

}

function initRenderer () {

    renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true, alpha: true } )
    renderer.setSize( innerWidth, innerHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setClearColor( 0xffffff );
    // renderer.gammaFactor = 20.2;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    // Tells the renderer to clear its color, depth, or stencil drawing buffers. This method
    // initializes the color buffer to the current clear color value
    renderer.clear()
    // Append 
    container.appendChild(renderer.domElement)
    
}

function renderWebPImages () {

    let mainMenuContainer = document.getElementById("main--menu--internal--container");
    
    if (testWebP()) {
        mainMenuContainer.classList.add("webp--supported");
    } else {
        mainMenuContainer.classList.add("webp--not--supported");
    }

}

/**
 * Allows user to look around the scene
 */
function initControls () {

    let controls = new OrbitControls(camera, document.body);
    controls.listenToKeyEvents( window );
    
    /** If we're on a mobile device, we enable damping which slows down the #camera #movement */
    if (isMobileDevice()) {
        // Set to true to enable damping (inertia), which can be used to give a sense of weight to the controls
        controls.enableDamping = true; 
        controls.dampingFactor = 0.01;
    }
    
    controls.enableZoom = false;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minPolarAngle = Math.PI * 0.5;
    controls.update();

}

function initPostProcessingEffects () {

    // Effect Composer is used to implement post processing effects in three js 
    // It manages a chain of post processing passes to produce the final visual result 
    // Note: Post processing passes are executed in order of their addition/insertion so changing the order
    // below will create a different visual output
    
    // Renderer: the renderer displays the scene onto a HTML Canvas. By default is uses WebGL, which
    // allows GPU-accelerated image processing and effects as the renderer creates the 2D image for the canvas
    composer = new EffectComposer( renderer ); 
    composer.addPass(new RenderPass(scene, camera));

    glitch = new GlitchPass(0)
    glitch.renderToScreen = false
    glitch.goWild = wildGlitch

    // New Pass
    bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85);
    bloomPass.threshold = bloomParams.bloomThreshold;
    bloomPass.strength = bloomParams.bloomStrength;
    bloomPass.radius = bloomParams.bloomRadius;
    
    composer.addPass(bloomPass);

    bloomPassEnabled = true;
    
};

function removeBloomPass () {
    composer.removePass(bloomPass);
    bloomPassEnabled = false;
};

function addBloomPass () {
    bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85);
    bloomPass.threshold = bloomParams.bloomThreshold;
    bloomPass.strength = bloomParams.bloomStrength;
    bloomPass.radius = bloomParams.bloomRadius;
    composer.addPass(bloomPass);
    bloomPassEnabled = true;
};

function addStatsElement () {
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );
};

/** Helper Functions **/

// Used to create go dray firefly particles in previous iteration
function rgbToPercentage(arr) {
    return arr.map( (value) => value / 255 )
}

// Returns random integer between min and max 
function randomInt(min, max) {
    return (Math.random() * (max - min + 1) ) << 0
}

// Calculates the average number of an array 
function average (array) {
    let average = 0;
    let count = 0;

    for (let i=0; i<array.length; i++) {
        count++;
        let currentNum = array[i];
        average += currentNum;
    }

    average = average/count;
    return average;
}


/** 
 * As the name suggests, function run after the user scrolls up to display the main content on the page
 * This allows us to prevent a race condition within which the user can both scroll to display the main content on the page
 * and scroll the content itself, which ends up giving unexpected results
 */
function allowScrollBehaviorOnMainContent () {
    let mainContentContainer = document.getElementById("main--content--inner--container");
    mainContentContainer.classList.add("vertical--scroll--allowed");
}

function disallowScrollBehaviorOnMainContent () {
    let mainContentContainer = document.getElementById("main--content--inner--container");
    mainContentContainer.classList.remove("vertical--scroll--allowed");
}


/** Animation Code **/
    
function animate() {
    
    if (statsAdded) {
        stats.update();
    }
    
    render();
                    
}

let counter = 0;
// Variables for Filled Mesh
let normalFilledMeshAnimationActivated, reverseFilledMeshAnimationActivated;
// Variables for Degenerate Animations
let displayTextCounter = 0;
// Text Animation
// Variable below is used to track whether the user is at the top
// We compare the y value of the element scroll to the previous y value, if it is the same, then it means that we have reached the element's top
// It must also be positive, if it is negative, then it means that we are at the bottom
let mainContentDisplayed = false;
let scrollUpCounter = 0; // Used in order to debounce the scroll up effect

// Variables related to the automatic scroll effect
// We declare them here in order to prevent declaring them again at 60FPS which would be computationally
// heavy
                        
let deltaY;
// Stop point of the particle expansion
const finalStopPoint = 0.0045; 
let ethLogoAnimationEnded;
let meshOpacityAnimationEnded;
let ethObjectReverseAnimationEnded;
let backgroundOpacityReverseAnimationEnded;
let homePage = isHomePage();

function render() {

    // Standard Geometry
    if (finalPoints !== undefined && activateParticleRotation !== false) {
        finalPoints.rotation.y += generalSceneControls["ETH Rotation Speed"];
    };

    // Geometry with Surface Sampler
    if (group !== undefined) {
        group.rotation.y += generalSceneControls["ETH Rotation Speed"];
    };

    // Geometry with Internal Sampler
    if (ethLogoFirefliesMesh !== undefined) {
        ethLogoFirefliesMesh.rotation.y += generalSceneControls["ETH Rotation Speed"];
    };

    // Final Method
    // Trigger animation for all of the elements at once
    // The second conditional ensures that both animations can't be triggered at the same time
    if (scrollUpAnimationTriggered && !scrollDownAnimationTriggered)	{

        // Hide Scroll Down Text
        hideScrollDownCTA();
        changeNavigationElementsToLightColor();

        // If main content is not displayed, show it.
        if (!mainContentDisplayed) {

            displayMainContent();

            setTimeout(() => {
                allowScrollBehaviorOnMainContent();
                // 2000 is equivalent to the 2s it takes for the animation @displayMainContent animation to be finished above
            }, 2000);
            
            mainContentDisplayed = true; 
            
        }

        // As the main content shows, increase the opacity of the cylinder mesh between the camera and the background 
        // to give the illusion that whole scene is becoming darker
        if (backgroundPlaneMesh.material.opacity < 0.7) {
            backgroundPlaneMesh.material.opacity += 0.004; 
        } else {
            meshOpacityAnimationEnded = true;
        };

        // Triggers the particle expansion if user on the homepage 
        if (homePage) {

            let morphValue = finalPoints.morphTargetInfluences[0];

            if (morphValue < 0.0001) {
                deltaY = 0.0000012;
            } else {
                deltaY = 0.0000012;
            };
                                    
            if (morphValue <= finalStopPoint) {
                finalPoints.morphTargetInfluences[0] += deltaY;
            } else {
                ethLogoAnimationEnded = true; 
            }

        }

        if (!homePage) {

            if (meshOpacityAnimationEnded) {
                scrollUpAnimationTriggered = false;
                meshOpacityAnimationEnded = false; 
            };

        } else {

            if (ethLogoAnimationEnded && meshOpacityAnimationEnded) {
                scrollUpAnimationTriggered = false;
                ethLogoAnimationEnded = false; 
                meshOpacityAnimationEnded = false; 
            };

        };

    };

    // Ensures that the animation can be reversed automatically 
    // Adding the second conditional prevents them from being triggered at the same time				
    if (scrollDownAnimationTriggered && !scrollUpAnimationTriggered) {
        
        let textOuterContainer = document.getElementById("main--content--inner--container")
        let topPositionOfOuterContainer = textOuterContainer.scrollTop;
        
        // If the scroll takes place when the title of the page is at the top of it's container, we trigger the animations
        // which remove 1. the main content and 2. reduce the opacity of the scene
        if (topPositionOfOuterContainer === 0) {
            
            changeNavigationElementsToDarkColor();
            displayScrollDownCTA();
            hideMainContent();
            disallowScrollBehaviorOnMainContent();

            // Make the background cylinder lighter, which gives the illusion that the whole scene is becoming darker
            if (backgroundPlaneMesh.material.opacity >= 0.1) {
                backgroundPlaneMesh.material.opacity -= 0.004;
            } else {
                backgroundOpacityReverseAnimationEnded = true; 
            }

            // Ensures that if the cylinder opacity goes below 0.1, it is reset to 0.1
            if (backgroundPlaneMesh.material.opacity <= 0.1) {
                backgroundPlaneMesh.material.opacity = 0.1;
                backgroundOpacityReverseAnimationEnded = true; 
            };

            // Trigger the reversal of the particle expansion (thus contraction) if we are on the home page
            // and the user scrolls the opposite direction

            if (homePage) {

				    const currentMorphTargetInfluence = finalPoints.morphTargetInfluences[0];

					if (currentMorphTargetInfluence > 0.001) {
						deltaY = - 0.0000025;
					} else {
						deltaY = - 0.000005;
					}

					let morphTarget = finalPoints.morphTargetInfluences[0];
					let finalValue = morphTarget - deltaY;

					const finalStopPoint = 0;
					
					if (finalValue >= finalStopPoint) {

						// finalPoints.morphTargetInfluences[0] -= finalValue;
						finalPoints.morphTargetInfluences[0] += deltaY;
						
						// If the morph target is ever smaller than 0, we keep it at zero
						// This is a control measure that ensures that we never end up in a state where the mesh
						// looks still altered
						if (finalPoints.morphTargetInfluences[0] <= 0) {
							finalValue = 0;
							finalPoints.morphTargetInfluences[0] = 0;
							ethObjectReverseAnimationEnded = true;	
						};

					};

                    // We don't want the mortphTargetInfluences to ever be below 0 unless we want unexpected
                    // shapes to be rendered
					if (finalPoints.morphTargetInfluences[0] < 0) {
							finalValue = 0;
							finalPoints.morphTargetInfluences[0] = 0;
							ethObjectReverseAnimationEnded = true;	
					};

            }


            if (!homePage) {

                // After the opacity change has finished, we reset all the variables in order to allow the animation to run again
                if (backgroundOpacityReverseAnimationEnded) {
                    scrollDownAnimationTriggered = false;
                    backgroundOpacityReverseAnimationEnded = false;
                    scrollUpCounter = 0; 
                };

            } else {

                if (ethObjectReverseAnimationEnded && backgroundOpacityReverseAnimationEnded) {
                    scrollDownAnimationTriggered = false;
                    ethObjectReverseAnimationEnded = false;
                    backgroundOpacityReverseAnimationEnded = false;
                    scrollUpCounter = 0;
                };


            }
            

        }
        
    }

    // Time used to change the position of the fireflies and create a randomized brownian-like movement 
    let elapsedTime;

    if (clock) {
        elapsedTime = clock.getElapsedTime();	
    };

    // If first iteration of fireflies activated and displayed, pass in the elapsed time as a uniform to the shader
    if (firefliesActivated) {

        if (finalPointsShaderMaterial) {
            finalPointsShaderMaterial.uniforms.uTime.value = elapsedTime;
        }
        
    };
    
    window.requestAnimationFrame(animate);
    composer.render();

}


function displayNewFooter () {

    
    if (!footerDisplayed) {
        
        let footerContainer = document.getElementById("footer--outer--container");
        let footerInnerContainer = document.getElementById("footer--inner--container");
        let elementsContainer = document.getElementById("footer--transitory--container");
        let footerUpArrow = document.getElementById("footer--up--arrow");
        let footerDownArrow = document.getElementById("footer--down--arrow");
        let footerRightContainer = document.getElementById("footer--right--container");
        let footerArrow = document.getElementById("footer--arrow");
        let topLeftLogo = document.getElementById("ethereum--foundation--logo--text");

        footerContainer.classList.add("displayed");
        footerInnerContainer.classList.add("displayed");
        elementsContainer.classList.add("displayed");
        footerUpArrow.classList.add("hidden");
        footerDownArrow.classList.add("displayed");   

        
        if (!isMobileDevice()) {
            footerRightContainer.classList.add("footer--displayed");
            footerArrow.classList.add("footer--displayed");
        };
        
        if (isMobileDevice()) {
            topLeftLogo.classList.add("hidden");
            hideHamburgerMenu();
        }; 
        
        footerDisplayed = true; 

    };
    
}

/**
 * Hides or displays the footer depending on whether the user is hovering over the element
 * @called in @addEventListeners function
 */
function toggleNewFooter () {

    
    if (!footerDisplayed) {
        
        let footerContainer = document.getElementById("footer--outer--container");
        let footerInnerContainer = document.getElementById("footer--inner--container");
        let elementsContainer = document.getElementById("footer--transitory--container");
        let footerUpArrow = document.getElementById("footer--up--arrow");
        let footerDownArrow = document.getElementById("footer--down--arrow");
        let footerRightContainer = document.getElementById("footer--right--container");
        let footerArrow = document.getElementById("footer--arrow");
        let topLeftLogo = document.getElementById("ethereum--foundation--logo--text");

        footerContainer.classList.add("displayed");
        footerInnerContainer.classList.add("displayed");
        elementsContainer.classList.add("displayed");
        footerUpArrow.classList.add("hidden");
        footerDownArrow.classList.add("displayed");
        
        if (isMobileDevice()) {
            hideHamburgerMenu();
            topLeftLogo.classList.add("hidden");;
        }; 

        if (!isMobileDevice()) {
            footerRightContainer.classList.add("footer--displayed");
            footerArrow.classList.add("footer--displayed");
            changeNavigationElementsToLightColor();
        };
        
        footerDisplayed = true; 

    } else {

        let footerContainer = document.getElementById("footer--outer--container");
        let footerInnerContainer = document.getElementById("footer--inner--container");
        let elementsContainer = document.getElementById("footer--transitory--container");
        let footerUpArrow = document.getElementById("footer--up--arrow");
        let footerDownArrow = document.getElementById("footer--down--arrow");        
        let footerRightContainer = document.getElementById("footer--right--container");
        let footerArrow = document.getElementById("footer--arrow");
        let topLeftLogo = document.getElementById("ethereum--foundation--logo--text");
        
        footerContainer.classList.remove("displayed");
        footerInnerContainer.classList.remove("displayed");
        elementsContainer.classList.remove("displayed");
        footerUpArrow.classList.remove("hidden");
        footerDownArrow.classList.remove("displayed");
        
        if (isMobileDevice()) {
            displayHamburgerMenu();
            topLeftLogo.classList.remove("hidden");;
        }
        
        if (!isMobileDevice()) {
            footerRightContainer.classList.remove("footer--displayed");
            footerArrow.classList.remove("footer--displayed");
        };


        footerDisplayed = false;

    }
    
}

/** Utility Functions **/

function isMobileDevice () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        return true;
        
    } else {
        
        return false;
        
    }

}

// Utility functions used in order to load webp image instead of other non-performant formats such as jpeg, png, etc.
// Not used yet
function testWebP () {
    const canvas = typeof document === 'object' ? 
    document.createElement('canvas') : {};
    canvas.width = canvas.height = 1;
    return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
}

function hideNewFooter () {
    
    if (footerDisplayed) {

        let footerContainer = document.getElementById("footer--outer--container");
        let footerInnerContainer = document.getElementById("footer--inner--container");
        let elementsContainer = document.getElementById("footer--transitory--container");
        let footerUpArrow = document.getElementById("footer--up--arrow");
        let footerDownArrow = document.getElementById("footer--down--arrow");
        let footerRightContainer = document.getElementById("footer--right--container");
        let footerArrow = document.getElementById("footer--arrow");
        let topLeftLogo = document.getElementById("ethereum--foundation--logo--text");

        footerContainer.classList.remove("displayed");
        footerInnerContainer.classList.remove("displayed");
        elementsContainer.classList.remove("displayed");
        footerUpArrow.classList.add("hidden");
        footerDownArrow.classList.add("displayed");
        
        if (!isMobileDevice()) {
            footerRightContainer.classList.remove("footer--displayed");
            footerArrow.classList.remove("footer--displayed");
        };
        
        if (isMobileDevice()) {
            displayHamburgerMenu();
            topLeftLogo.classList.remove("hidden");
            changeNavigationElementsToLightColor();
        }
        
        footerDisplayed = false;
        
    }

}


function toggleMenu () {

    if (!menuDisplayed) {

        let menuContainer = document.getElementById("main--menu--container");
        menuContainer.classList.add("displayed")
        
        changeNavigationElementsToLightColor()
        
        setTimeout(() => {
            
            displayMainMenuText();
            
        }, 200);

        menuDisplayed = true;
        
    } else {
        
        hideMainMenuText();
        
        setTimeout(() => {

            let menuContainer = document.getElementById("main--menu--container");
            menuContainer.classList.remove("displayed")
            
            // Add conditional to prevent the text from going dark if main text is displayed
            if (!mainContentShownOnPage) {
                changeNavigationElementsToDarkColor();
            };

        }, 1000);

        menuDisplayed = false;

    }
    

}


function changeNavigationElementsToLightColor () {

    let ethLogoText = document.getElementById("ethereum--menu--svg");
    let hamburgerMenu = document.getElementById("hamburger--menu--svg");

    ethLogoText.classList.remove("header--logo--displayed")
    hamburgerMenu.classList.remove("header--logo--displayed")
    
}

function changeNavigationElementsToDarkColor () {
    
    let ethLogoText = document.getElementById("ethereum--menu--svg");
    let hamburgerMenu = document.getElementById("hamburger--menu--svg");

    ethLogoText.classList.add("header--logo--displayed")
    hamburgerMenu.classList.add("header--logo--displayed")

}


function displayMainMenuText () {

    let oneMenuText = document.getElementById("menu--content--text--one");
    let twoMenuText = document.getElementById("menu--content--text--two");
    let threeMenuText = document.getElementById("menu--content--text--three");
    let fourMenuText = document.getElementById("menu--content--text--four");
    let fiveMenuText = document.getElementById("menu--content--text--five");
    let sixMenuText = document.getElementById("menu--content--text--six");
    let sevenMenuText = document.getElementById("menu--content--text--seven");
    let eightMenuText = document.getElementById("menu--content--text--eight");
    let nineMenuText = document.getElementById("menu--content--text--nine");
    let tenMenuText = document.getElementById("menu--content--text--ten");
    let elevenMenuText = document.getElementById("menu--content--text--eleven");
    let subLinksContainer = document.getElementById("secondary--links--container");

    let time = 0;
    
    setTimeout(() => {
        oneMenuText.classList.add("displayed")
    }, time + 75);

    setTimeout(() => {
        twoMenuText.classList.add("displayed")
    }, time + 150);

    setTimeout(() => {
        threeMenuText.classList.add("displayed")
    }, time + 225);

    setTimeout(() => {
        fourMenuText.classList.add("displayed")
    }, time + 300);

    setTimeout(() => {
        fiveMenuText.classList.add("displayed")
    }, time + 375);

    setTimeout(() => {
        sixMenuText.classList.add("displayed")
    }, time + 450);

    setTimeout(() => {
        sevenMenuText.classList.add("displayed")
    }, time + 525);

    setTimeout(() => {
        eightMenuText.classList.add("displayed")
    }, time + 600);

    setTimeout(() => {
        nineMenuText.classList.add("displayed")
    }, time + 675);

    setTimeout(() => {
        tenMenuText.classList.add("displayed")
    }, time + 750);

    setTimeout(() => {
        elevenMenuText.classList.add("displayed")
    }, time + 825);

    setTimeout(() => {
        subLinksContainer.classList.add("displayed")
    }, time + 900);


}

function hideMainMenuText () {

    let oneMenuText = document.getElementById("menu--content--text--one");
    let twoMenuText = document.getElementById("menu--content--text--two");
    let threeMenuText = document.getElementById("menu--content--text--three");
    let fourMenuText = document.getElementById("menu--content--text--four");
    let fiveMenuText = document.getElementById("menu--content--text--five");
    let sixMenuText = document.getElementById("menu--content--text--six");
    let sevenMenuText = document.getElementById("menu--content--text--seven");
    let eightMenuText = document.getElementById("menu--content--text--eight");
    let nineMenuText = document.getElementById("menu--content--text--nine");
    let tenMenuText = document.getElementById("menu--content--text--ten");
    let elevenMenuText = document.getElementById("menu--content--text--eleven");
    let subLinksContainer = document.getElementById("secondary--links--container");


    let time = 0;
    
    setTimeout(() => {
        oneMenuText.classList.remove("displayed")
    }, time + 75);

    setTimeout(() => {
        twoMenuText.classList.remove("displayed")
    }, time + 150);

    setTimeout(() => {
        threeMenuText.classList.remove("displayed")
    }, time + 225);

    setTimeout(() => {
        fourMenuText.classList.remove("displayed")
    }, time + 300);

    setTimeout(() => {
        fiveMenuText.classList.remove("displayed")
    }, time + 375);

    setTimeout(() => {
        sixMenuText.classList.remove("displayed")
    }, time + 450);

    setTimeout(() => {
        sevenMenuText.classList.remove("displayed")
    }, time + 525);

    setTimeout(() => {
        eightMenuText.classList.remove("displayed")
    }, time + 600);

    setTimeout(() => {
        nineMenuText.classList.remove("displayed")
    }, time + 675);

    setTimeout(() => {
        tenMenuText.classList.remove("displayed")
    }, time + 750);

    setTimeout(() => {
        elevenMenuText.classList.remove("displayed")
    }, time + 825);

    setTimeout(() => {
        subLinksContainer.classList.remove("displayed")
    }, time + 900);


}

function displayHamburgerMenu () {
    let hamburgerMenu = document.getElementById("hamburger--menu--container");
    hamburgerMenu.classList.remove("hide--hamburger--menu")
}

function hideHamburgerMenu () {
    let hamburgerMenu = document.getElementById("hamburger--menu--container");
    hamburgerMenu.classList.add("hide--hamburger--menu")
}

function displayMainContent () {
    
    // let textContainer = document.getElementById("main--content--inner--container");
    let textContainer = document.getElementById("homepage--welcome--text--inner--container");

    if (isHomePage()) {
        textContainer.classList.add("homepage--displayed");
    }
    
    textContainer.classList.add("displayed");

    // Helps us ensure that the animation isn't triggered more than once in the @render function 
    // where we end up calling this function
    mainContentShownOnPage = true;

}


function hideMainContent () {

    // let textContainer = document.getElementById("main--content--inner--container");
    let textContainer = document.getElementById("homepage--welcome--text--inner--container");

    if (isHomePage()) {
        textContainer.classList.remove("homepage--displayed");
    }
    
    textContainer.classList.remove("displayed");

    mainContentShownOnPage = false;
    mainContentDisplayed = false;

}

function displayScrollDownCTA () {

    let cta = document.getElementById("home--scroll--navigation--container");
    cta.classList.remove("hide--scroll");

}

function hideScrollDownCTA () {

    let cta = document.getElementById("home--scroll--navigation--container");
    cta.classList.add("hide--scroll");

};


/** EVENT HANDLERS **/

/**
 * Used to update the camera position when certain conditions are met - here we simply move the camera
 * forward or backward 
 **/


let textColorTransformed = false;

// New variables
let scrollUpAnimationTriggered = false;
let scrollDownAnimationTriggered = false; 

// New factors
function triggerAnimation(ev) {

    let { deltaY } = ev;

    if (deltaY > 0) {

        // New Method - Automatic Animation

        if (!scrollDownAnimationTriggered) {
            scrollUpAnimationTriggered = true;
        };

        if (!textColorTransformed) {
            turnMainContentColorWhite();
            textColorTransformed = true;
        };
            
    } else {
                                
        if (!scrollUpAnimationTriggered) {
            scrollDownAnimationTriggered = true; 
        };
        
    }
}


/**
 * Ensures that the scene resizes with user window resizing 
 */
function resize() {

    innerWidth = window.innerWidth
    innerHeight = window.innerHeight

    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    
    composer.setSize( innerWidth, innerHeight )
    renderer.setSize( innerWidth, innerHeight )

}


/**
 * Higher order function to attach all the necessary listeners to the page 
 **/
function addEventListeners() {
    
    /** General **/
    window.addEventListener( 'resize', resize, false )
    // Important to note the difference beteween @wheel and @scroll event
    // @wheel event triggers on scroll AND zoom => Back in 2015, was not a standard
    // @scroll event occurs when element scrollbar is being scrolled
    document.addEventListener("wheel", triggerAnimation);
    document.addEventListener("scroll", triggerAnimation);
    
    // Event Listener for Mobile
    // Implements "swipe" behavior on the page
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    // Display footer based on whether the user is hovering above footer element or not. 
    document.getElementById("footer--inner--container").addEventListener("mouseenter", displayNewFooter);
    document.getElementById("footer--inner--container").addEventListener("mouseleave", hideNewFooter);
    // Displays footer based on whether the user presses on the footer container => useful in mobile environment
    // document.getElementById("footer--right--container").addEventListener("mousedown", toggleNewFooter, false);
    if (isMobileDevice()) {
        document.getElementById("footer--inner--container").addEventListener("mousedown", toggleNewFooter, false);
    };

    // Navigational event listeners
    document.getElementById("next--page--navigation--container").addEventListener( "mousedown", goToNextPage );    
    document.getElementById("downward--arrow").addEventListener( "mousedown", goToNextPage );
    
    // Toggle menu animation
    document.getElementById("hamburger--menu--container").addEventListener("mousedown", toggleMenu);
    // document.getElementById("home--scroll--navigation--container").addEventListener("mousedown", triggerScrollUpAnimation, false);
    
    // Main Menu events
    // It might seem redundant to attach events to the main menu links, but we want to trigger an animation before redirection to a new 
    // page. For this reason, JS was used to ensure that we had a granularity of control over the fade in animation and the subsequent
    // redirection to another page.
    document.getElementById("ef--blog--link").addEventListener("mousedown", goToBlogPage, false )
    document.getElementById("report--link").addEventListener("mousedown", goToReportPage, false )
    document.getElementById("menu--content--text--two").addEventListener("mousedown", goToHomePage, false )
    document.getElementById("menu--content--text--four").addEventListener("mousedown", goToInfiniteGardenPage, false )
    document.getElementById("menu--content--text--six").addEventListener("mousedown", goToWhatIsEthereumPage, false )
    document.getElementById("menu--content--text--eight").addEventListener("mousedown", goToEFPage, false )
    document.getElementById("menu--content--text--ten").addEventListener("mousedown", goToPhilosophyPage, false );
    
    // Top left logo
    document.getElementById("ethereum--foundation--logo--text").addEventListener("mousedown", goToHomePage, false )

    // Conditional Renders
    if (document.getElementById("next--page--navigation--container--two")) {
        document.getElementById("next--page--navigation--container--two").addEventListener( "mousedown", goToNextPage );
    };

    if (!isMobileDevice()) {
        if (document.getElementById("executive--board--link--aya")) {
            document.getElementById("executive--board--link--aya").addEventListener("mousedown", openAyaTwitter);
            document.getElementById("executive--board--link--vitalik").addEventListener("mousedown", openVitalikTwitter);
        };
    };

    if (document.getElementById("grow--ecosystem--link")) {
        document.getElementById("grow--ecosystem--link").addEventListener("mousedown", openGrowEcosystemLink)
    }

    // Footer
    document.getElementById("footer--link--devcon").addEventListener("mousedown", openDevconPage);
    document.getElementById("footer--link--blog").addEventListener("mousedown", openEthereumBlog);
    document.getElementById("footer--link--terms").addEventListener("mousedown", openTermsOfUse);
    document.getElementById("footer--link--privacy").addEventListener("mousedown", openPrivacyPolicy);
    document.getElementById("footer--link--cookies").addEventListener("mousedown", openCookiePolicy);

    // Window
    window.addEventListener("resize", setDocumentHeight);

}

/**
 * Ensures that different elements are hidden or displayed depending on whether we are on mobile or desktop
 */
function modifyElementsAccordingToDevice () {

    let footerUpArrow = document.getElementById("footer--up--arrow");
    let footerDownArrow = document.getElementById("footer--down--arrow");
    let footerRightContainer = document.getElementById("footer--right--container");

    if (!isMobileDevice()) {
        footerUpArrow.style.display = "none";
        footerDownArrow.style.display = "none";
    } else {
        footerRightContainer.style.display = "none";        
        // If it is mobile device then we hide the footer--right--container
    }
    
    setDocumentHeight();
    
}

function setDocumentHeight() {
    const doc = document.body;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)   
};

/** Navigational Event Listeners => Send us to other pages */

function goToBlogPage () {
    window.open("https://blog.ethereum.org", "_blank");
}

function goToReportPage () {
    window.open("https://ethereum.foundation/report-2022-04.pdf", "_blank");
}

function goToHomePage () {
    window.location.href = "/";
};

function goToInfiniteGardenPage () {
    window.location.href = "/infinitegarden";
};

function goToWhatIsEthereumPage () {
    window.location.href = "/ethereum";
};

function goToEFPage () {
    window.location.href = "/ef";
};

function goToPhilosophyPage () {
    window.location.href = "/philosophy";
};

function triggerScrollUpAnimation () {
    
    if (!scrollDownAnimationTriggered) {
        scrollUpAnimationTriggered = true;
    };

    turnMainContentColorWhite();

}

function openVitalikTwitter() {
    let url = "https://twitter.com/VitalikButerin";
    window.open(url, "_blank").focus();
}


function openAyaTwitter() {
    let url = "https://twitter.com/ayamiyagotchi";
    window.open(url, "_blank").focus();

}

function openGrowEcosystemLink() {
    let url = "https://esp.ethereum.foundation/";
    window.open(url, "_blank").focus();
}

function openDevconPage () {
    window.open("https://devcon.org/", "_blank").focus();
};

function openEthereumBlog () {
    window.open("https://blog.ethereum.org/", "_blank").focus();
};

function openTermsOfUse () {
    window.open("https://ethereum.org/en/terms-of-use/", "_blank").focus();
};

function openPrivacyPolicy () {
    window.open("https://ethereum.org/en/privacy-policy/", "_blank").focus();
};

function openCookiePolicy () {
    window.open("https://ethereum.org/en/cookie-policy/", "_blank").focus();
};


/** Mobile Device Related Functions => Allow us to implement swipe up or down functionalities **/

let xDown = 0;			
let yDown = 0;			

function getTouches (event) {
    return event.touches || event.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                        
function handleTouchMove(evt) {

    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            // Right swipe
        } else {
            // Left swipe
        }                       
    } else {

        if ( yDiff > 0 ) {

            // Up swipe

            if (!scrollDownAnimationTriggered) {
                scrollUpAnimationTriggered = true;
            };


            if (!textColorTransformed) {
                turnMainContentColorWhite();  
                // #toDo: main--content--general--paragraph
                // should be turned into class 
                // #toDo: should be main--content--general--paragraph--two 
                // next--page--text #toDo
                textColorTransformed = true;
            }

        } else { 

            // Down swipe
            if (!scrollUpAnimationTriggered) {
                scrollDownAnimationTriggered = true; 
            };

        }                                                                 
    }

    // Reset values
    xDown = null;
    yDown = null;                                             
    
};

function turnMainContentColorWhite () {

    document.getElementById("main--content--title").style.color = "white";
    
    if (!isHomePage()) {

        let paragraphOne = document.getElementById("main--content--general--paragraph");
        
        if (paragraphOne) {
            paragraphOne.style.color = "white";
        }
        
        let paragaphTwo = document.getElementById("main--content--general--paragraph--two");

        if (paragaphTwo) {
            document.getElementById("main--content--general--paragraph--two").style.color = "white";
        }
        
    }
    
    // document.getElementById("downward--arrow").style.color = "white" ;
    // document.getElementById("next--page--text").style.color = "white";    

}


function goToNextPage () {

    let url = window.location.pathname;
    
    let transitionPageElement = document.getElementById("transition--container");
    transitionPageElement.classList.remove("removed");
    
    if (url === "/") {

        setTimeout(() => {
            window.location.href = "/infinitegarden";
        }, 1000);
        
    } else if (url === "/infinitegarden") {

        setTimeout(() => {
            window.location.href = "/ethereum";
        }, 1000);
        
    } else if (url === "/ethereum") {
        
        setTimeout(() => {
            window.location.href = "/ef";
        }, 1000);
        
    } else if (url === "/ef") {

        setTimeout(() => {
            window.location.href = "/philosophy";
        }, 1000);
        
    } else if (url === "/philosophy") {

        setTimeout(() => {
            window.location.href = "/";
        }, 1000);

    }
    
}


// Immediately triggered => Ensures that the white transition page fades away. 
window.onload = function () {

    // setTimeout(() => {
        // if (!isHomePage()) {
            // let transitionPageElement = document.getElementById("transition--container");
            // transitionPageElement.classList.add("removed");
        // };
    // }, 1000);

}

/** Let the Magic **/
begin();
addEventListeners();
modifyElementsAccordingToDevice();