precision mediump float;
// varying float vRandom;
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElivated;


void main(){
    vec4 textUreColor = texture2D(uTexture,vUv);
    textUreColor.rgb *= vElivated * 2.0 + 0.25;
    gl_FragColor = textUreColor;
    // gl_FragColor = vec4(vRandom, vRandom, 0.15, 1.0);

}