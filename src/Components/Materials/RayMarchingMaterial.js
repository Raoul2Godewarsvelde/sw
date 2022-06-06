import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import glsl from "babel-plugin-glsl/macro"

const RayMarchingMaterial = shaderMaterial(
    {
        uTime: 0.0,
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
        uniform vec2 uCanvasSize;
        uniform float uTime;
        varying vec2 vUv;

        float sdSphere( vec3 p, float radius ) {
            return length(p) - radius;
        }

        float sdBox(vec3 p, vec3 b) {
            vec3 q = abs(p) - b;

            return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
        }

        mat4 rotationMatrix(vec3 axis, float angle) {
            axis = normalize(axis);
            float s = sin(angle);
            float c = cos(angle);
            float oc = 1.0 - c;
            
            return mat4(
                oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0
            );
        }
        vec3 rotate(vec3 v, vec3 axis, float angle) {
            mat4 m = rotationMatrix(axis, angle);
            return (m * vec4(v, 1.0)).xyz;
        }

        float sdf(vec3 p) {
            vec3 p1 = rotate(p, vec3(1.0), uTime / 5.0);
            float box = sdBox(p1, vec3(0.2));
            float sphere = sdSphere(p, 0.4);

            return box;
        }

        vec3 calcNormal( in vec3 p ) {
            const float eps = 0.0001;
            const vec2 h = vec2(eps,0);

            return normalize( vec3(sdf(p + h.xyy) - sdf(p - h.xyy), sdf(p + h.yxy) - sdf(p - h.yxy), sdf(p + h.yyx) - sdf(p - h.yyx)));
        }

        void main() {
            vec2 newUV = (vUv - vec2(0.5)) * uCanvasSize.xy * vec2(0.5);
            vec3 camPos = vec3(0.0, 0.0, 2.0);
            vec3 ray = normalize(vec3((vUv - vec2(0.5)) * uCanvasSize.xy, -1.0));

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
                vec3 pos = camPos + t * ray;
                color = vec3(1.0);
                vec3 normal = calcNormal(pos);
                color = normal;
                float diff = dot(vec3(1.0), normal);
                color = vec3(diff);
            }

            gl_FragColor = vec4(color, 1.0);
        }
    `
)

extend({ RayMarchingMaterial })