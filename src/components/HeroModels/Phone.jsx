/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 phone.glb 
Author: Zell-Wu (https://sketchfab.com/zell-wu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phone-eb42c07e79764c74aa5377e092f783ce
Title: Phone
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Phone1(props) {
  const { nodes, materials } = useGLTF('/models/phone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/phone.glb')
