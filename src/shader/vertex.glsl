uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
attribute vec3 position;
uniform float uTime;
attribute vec2 uv;
varying vec2 vUv;
varying float vElivated;

void main() {
    vec4 newPosition = modelMatrix * vec4(position, 1.0);

    // Create a wavy effect based on the sine function
    float elevation = sin(position.x * 10.0 + uTime) * 0.03;

    elevation += sin(position.y * 10.0 + uTime) * 0.03;
    newPosition.z += elevation;
    // newPosition.z += aRandomm;
    gl_Position = projectionMatrix * viewMatrix * newPosition;
    vUv = uv;
    vElivated = elevation;
}