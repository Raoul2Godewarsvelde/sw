import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import glsl from "babel-plugin-glsl/macro"

const RayMarchingMaterial = shaderMaterial(
    {
        uTime: 0.0,
        uResolution: {x: 0.0, y: 0.0, z: 10000.0, w: 10000.0},
        uCanvasSize: {x: 0, y: 0},
        uTexture: new THREE.Texture(),
        uMouse: new THREE.Vector2(1.0, 1.0),
        uProgress: 0.0,
        PI: 0.0
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
        uniform sampler2D uTexture;
        varying vec2 vUv;
        uniform vec2 uMouse;
        uniform float uProgress;
        uniform float PI;

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

        float smin( float a, float b, float k ) {
            float h = a - b;
            return 0.5 * ((a + b) - sqrt(h * h + k) );
        }

        vec2 getmatcap(vec3 eye, vec3 normal) {
            vec3 reflected = reflect(eye, normal);
            float m = 2.8284271247461903 * sqrt(reflected.z + 1.0);
            return reflected.xy / m + 0.5;
        }

        float rand(vec2 n) { 
            return fract(sin(dot(n, vec2(12.9898, 78.1414))) * 43758.5453);
        }

        float sdf(vec3 p) {
            vec3 p1 = rotate(p, vec3(1.0), uTime / 5.0);
            float box = smin(sdBox(p1, vec3(0.2)), sdSphere(p, 0.2), 0.3);

            float realSphere = sdSphere(p1, 0.3);
            float final = mix(box, realSphere, uProgress);

            for(float i = 0.0; i < 10.0; i++) {
                float randOffset = rand(vec2(i, 0.0));
                float progr = 1.0 - fract(uTime / 3.0 + randOffset * 3.0);
                vec3 pos = vec3(sin(randOffset * 2.0 * PI), cos(randOffset * 2.0 * PI), 0.0);
                float goToCenter = sdSphere(p - pos * progr, 0.1);
                final = smin(final, goToCenter, 0.3);
            }

            float mouseSphere = sdSphere(p - vec3(uMouse * uCanvasSize.xy * 2.0, 0.0), 0.2);
            return smin(final, mouseSphere, 0.4);
        }

        vec3 calcNormal( in vec3 p ) {
            const float eps = 0.0001;
            const vec2 h = vec2(eps,0);

            return normalize( vec3(sdf(p + h.xyy) - sdf(p - h.xyy), sdf(p + h.yxy) - sdf(p - h.yxy), sdf(p + h.yyx) - sdf(p - h.yyx)));
        }

        void main() {
            float dist = length(vUv - vec2(0.5));
            vec3 bg = mix(vec3(0.3), vec3(0.0), dist);
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

            vec3 color = bg;
            if (t < tMax) {
                vec3 pos = camPos + t * ray;
                color = vec3(1.0);
                vec3 normal = calcNormal(pos);
                color = normal;
                float diff = dot(vec3(1.0), normal);
                /* vec2 matcapUV = getmatcap(ray, normal); */
                color = vec3(diff);
                /* color = texture2D(uTexture, matcapUV).rgb; */
                /* color = vec3(uMouse.x, uMouse.y, 0.0); */

                float fresnel = pow(1.0 + dot(ray, normal), 3.0);
                /* color = vec3(fresnel); */

                color = mix(color, bg, fresnel);
            }

            gl_FragColor = vec4(color, 1.0);
            /* gl_FragColor = vec4(bg, 1.0); */
            /* gl_FragColor = vec4(fresnel); */
        }
    `
)

extend({ RayMarchingMaterial })