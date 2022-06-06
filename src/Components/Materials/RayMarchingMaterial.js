import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import glsl from "babel-plugin-glsl/macro"

const RayMarchingMaterial = shaderMaterial(
    {
        uResolution: {x: 0.0, y: 0.0, z: 10000.0, w: 10000.0},
        uCanvasSize: {x: 0, y: 0}
    },
    glsl`
        varying vec2 vUv;
        void main() {
            vec3 pos = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    glsl`
        float sdsSphere( vec3 p, float radius ) {
            return length(p) - radius;
        }

        float sdf(vec3 p) {
            return sdsSphere(p, 0.4);
        }

        uniform vec2 uCanvasSize;
        varying vec2 vUv;
        void main() {
            vec2 newUV = (vUv - vec2(0.5)) * uCanvasSize.xy * vec2(0.5);
            vec3 camPos = vec3(0.0, 0.0, 2.0);
            vec3 ray = normalize(vec3(vUv, -1.0));

            vec3 rayPos = camPos;
            float t = 0.0;
            float tMax = 5.0;
            for (int i = 0; i < 256; ++i) {
                vec3 pos = camPos + t * ray;
                float h = sdf(pos);
                if (h < 0.0001 || t > tMax) break;
                t += h;
            }

            vec3 color = vec3(0.0);
            if (t < tMax) {
                color = vec3(1.0);
            }

            gl_FragColor = vec4(color, 1.0);
        }
    `
)

extend({ RayMarchingMaterial })