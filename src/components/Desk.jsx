
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import {RigidBody} from '@react-three/rapier'

export default function Desk(props) {
 const gltf=useLoader(GLTFLoader,`public/desk.glb`)
  return (
    <RigidBody>
   <primitive object={gltf.scene} scale={[10,10,10]} position={[0,0,152]}></primitive>
    </RigidBody>
  )
}


