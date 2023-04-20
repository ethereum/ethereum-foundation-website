uniform float uPixelRatio;
uniform float uSize;
uniform float uTime;
attribute float aScale;
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.02;
  modelPosition.z += cos(uTime + modelPosition.x * 100.0) * aScale * 0.02;
  modelPosition.x += cos(uTime + modelPosition.x * 100.0) * aScale * 0.02;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPostion = projectionMatrix * viewPosition;

  gl_Position = projectionPostion;
  gl_PointSize = uSize * aScale * uPixelRatio;
  gl_PointSize *= (1.0 / - viewPosition.z);
}