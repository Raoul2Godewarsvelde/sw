import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const ShaderMaterial = shaderMaterial(
  {
      
  },
  glsl`
  
  `,
  glsl`
  
  `
)

extend({ ShaderMaterial })
