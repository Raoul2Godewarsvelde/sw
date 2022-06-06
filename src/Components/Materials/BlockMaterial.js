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
        uOffset: 0.0,
        uBW: 0.0,
        uResolution: new THREE.Vector2(),
        uTexture: new THREE.Texture()
    },
    glsl`
        varying vec2 vUv;
        uniform float uOffset;
        uniform float uScale;
        void main() {
            vec3 pos = position;
            pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * uOffset * 50000.0) * 0.125);
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
    `,
    glsl`
        varying vec2 vUv;
        uniform float uOpacity;
        uniform float uBW;
        uniform sampler2D uTexture;
        uniform float uScale;
        uniform float shift;
        void main() {
            float angle = 1.57;
            vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - uScale) + vec2(0.5, 0.5);
            vec2 offset = shift / 4.0 * vec2(sin(angle), cos(angle));
            vec4 cr = texture2D(uTexture, p + offset);
            vec4 cga = texture2D(uTexture, p);
            vec4 cb = texture2D(uTexture, p - offset);
            gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a - sin(uScale) * 3.0);
        }
    `
)

extend({ BlockMaterial })
