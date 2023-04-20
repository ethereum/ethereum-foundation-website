		precision highp float;

		// Uniforms
		uniform float time;
		uniform vec2  mouse;
		uniform vec2  resolution;
		uniform bool  mousePosition;
		uniform float intensity;
		uniform vec3  color;
		uniform float offsetX;
		uniform float offsetY;

		// Directives
		#define PI 3.14159265358979323846

		// Constants
		const int   number   = 20;
		const float size     = 0.04;
		const float minSize  = 0.3;

		/**
		* Rand function
		*
		* @param  {vec2} co Coordinates
		* @return {float}
		*/
		float rand(vec2 co) {
			return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
		}

		float rand(vec2 co, float l) {
			return rand(vec2(rand(co), l));
		}

		float rand(vec2 co, float l, float t) {
			return rand(vec2(rand(co, l), t));
		}

		/**
		* Wrap function
		* Wrap a value with a minimum boundary
		*
		* @param  {float} x   Value to wrap
		* @param  {float} min Minimum boundary
		* @return {float}
		*/
		float wrap(float x, float min) {
			return abs(mod(x, 2.0) - 1.0) + min;
		}

		/**
		* Particle function
		* Generate a particule
		*
		* @param  {vec2}  p  Initial position
		* @param  {float} fx Frequency on X axis
		* @param  {float} fy Frequency on Y axis
		* @param  {float} ax Amplitude on X axis
		* @param  {float} ay Amplitude on Y axis
		* @return {float}
		*/
		float particle(vec2 p, float fx, float fy, float ax, float ay) {
			vec2 r;

			if(mousePosition)
			r = vec2(p.x + cos(time * fx) * ax * (mouse.x * offsetX), p.y + sin(time * fy) * ay * (mouse.y * offsetY));
			else
			r = vec2(p.x + cos(time * fx) * ax * offsetX, p.y + sin(time * fy) * ay * offsetY);

			return ( size * wrap( time * ax, minSize ) ) / length(r);
		}

		/**
		* Main function
		*
		* @return {void}
		*/
		void main() {
			vec2 q = gl_FragCoord.xy / resolution.xy; // Ratio
			vec2 p = (4.0 * q) - 2.0;                 // Center
			p.x *= resolution.x / resolution.y;       // Good aspect value

			float col = 0.0;
			float counter = 0.0;

			// Create particules
			for(int i = 0; i < number; i++) {
			col += particle(p, rand(vec2(counter)), rand(vec2(counter), 1.0, 10.0), counter, counter);
			counter += 0.1;
			}

			gl_FragColor.rgb = vec3(col) * color * intensity;
		}