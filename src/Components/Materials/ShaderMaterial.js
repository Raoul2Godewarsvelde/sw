import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import glsl from "babel-plugin-glsl/macro"

const ShaderMaterial = shaderMaterial(
    {
        uOpacity: 1.0,
        uColor: new THREE.Color(0xffffff),
        uCanvasSize:{x: 0, y: 0}
    },
    glsl`
        void main() {
            vec3 pos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    glsl`
        precision highp float;
        uniform vec2 uCanvasSize;
        void main() {
            vec2 coord = gl_FragCoord.xy/uCanvasSize.xy;
            gl_FragColor = vec4(coord.x, coord.y, 1.0 - coord.x, 1.0);
        }
    `
)

extend({ ShaderMaterial })



        /* precision mediump float;
        uniform float uOpacity;
        uniform vec3 uColor;
        void main() {
            gl_FragColor = vec4(uColor, uOpacity);
        } */

        /* precision mediump float;
        void main() {
            if (gl_FragCoord.x < 600.0) {
                gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            } else {
                gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
            }
        } */

        /* precision highp float;
        uniform vec2 uCanvasSize;
        void main() {
            vec2 coord = gl_FragCoord.xy/uCanvasSize.xy;
            gl_FragColor = vec4(coord.x, coord.y, 1.0 - coord.x, 1.0);
        } */