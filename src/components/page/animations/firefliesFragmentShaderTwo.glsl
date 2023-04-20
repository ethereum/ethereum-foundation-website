		uniform vec3 color;
		uniform vec2 resolution;
		uniform float offsetX;
		uniform float offsetY;
		uniform vec2 mouse;
		uniform float time;

		// Constants
		const float intensity = 0.5;

		void main() {
			gl_FragColor.rgb = color * intensity;
	  	}