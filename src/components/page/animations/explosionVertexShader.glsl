		uniform float amplitude;
		uniform float uSize;
		uniform float uTime;
		uniform float uPixelRatio;

		attribute vec3 displacement;

		varying vec3 vNormal;

		attribute float aScale;

		void main() {

			vNormal = normal;

			vec3 newPosition = position + amplitude * displacement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );


		}