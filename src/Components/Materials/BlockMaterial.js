import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import glsl from "babel-plugin-glsl/macro"

const BlockMaterial = shaderMaterial(
    {
        shift: 0.0,
        uScale: 0.0,
        uRatio: 0.0,
        uOpacity: 0.0,
        uBW: 0.0,
        uResolution: new THREE.Vector2(),
        uTexture: new THREE.Texture()
    },
    glsl`
        varying vec2 vUv;
        uniform float shift;
        uniform float uScale;
        void main() {
            vec3 pos = position;
            pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * shift * 50000.0) * 0.125) - 1.5;
            /* pos.y = pos.y * shift; */
            /* pos.x = pos.x * shift; */
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
    `,
    glsl`
        varying vec2 vUv;
        uniform float uOpacity;
        uniform float uBW;
        uniform sampler2D uTexture;
        void main() {
            vec4 texture = texture2D(uTexture, vUv);
            gl_FragColor = texture;
        }
    `
)

extend({ BlockMaterial })
