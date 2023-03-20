uniform float mouseIntensity;

void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = mouseIntensity / distanceToCenter - 0.15;
  gl_FragColor = vec4(0.35, 0.45, 0.81, strength);
}