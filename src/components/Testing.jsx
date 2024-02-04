/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src/assets/testing.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {RigidBody} from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
//1 and 5
export default function Testing(props) {
  const rbr = useRef()
  const group =useRef()
  const { nodes, materials, animations } = useGLTF('src/assets/testing.glb')
  const { actions,names } = useAnimations(animations, group)
  console.log(actions,names)
  useEffect(()=>{
    actions[names[1]].fadeIn(.1).play()
  },[])
 
  return (
    <RigidBody colliders="hull" type='dynamic' ref={rbr}>
 <group  ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI/2, 0, 0]} scale={0.1} position-y={5}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Soldier">
            <skinnedMesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['skin.002']} skeleton={nodes.Cube002.skeleton} />
            <skinnedMesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['Jacket.002']} skeleton={nodes.Cube002_1.skeleton} />
            <skinnedMesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials['Pants.002']} skeleton={nodes.Cube002_2.skeleton} />
            <skinnedMesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={materials['shoe_shade1.002']} skeleton={nodes.Cube002_3.skeleton} />
            <skinnedMesh name="Cube002_4" geometry={nodes.Cube002_4.geometry} material={materials['shoe_shade2.002']} skeleton={nodes.Cube002_4.skeleton} />
            <skinnedMesh name="Cube002_5" geometry={nodes.Cube002_5.geometry} material={materials['laces.002']} skeleton={nodes.Cube002_5.skeleton} />
            <skinnedMesh name="Cube002_6" geometry={nodes.Cube002_6.geometry} material={materials['Shirt.002']} skeleton={nodes.Cube002_6.skeleton} />
            <skinnedMesh name="Cube002_7" geometry={nodes.Cube002_7.geometry} material={materials['Belt.002']} skeleton={nodes.Cube002_7.skeleton} />
            <skinnedMesh name="Cube002_8" geometry={nodes.Cube002_8.geometry} material={materials['Buttons.002']} skeleton={nodes.Cube002_8.skeleton} />
            <skinnedMesh name="Cube002_9" geometry={nodes.Cube002_9.geometry} material={materials['Silver.002']} skeleton={nodes.Cube002_9.skeleton} />
            <skinnedMesh name="Cube002_10" geometry={nodes.Cube002_10.geometry} material={materials['Eyes.002']} skeleton={nodes.Cube002_10.skeleton} />
            <skinnedMesh name="Cube002_11" geometry={nodes.Cube002_11.geometry} material={materials['balaclava.002']} skeleton={nodes.Cube002_11.skeleton} />
            <skinnedMesh name="Cube002_12" geometry={nodes.Cube002_12.geometry} material={materials['Hair.002']} skeleton={nodes.Cube002_12.skeleton} />
            <skinnedMesh name="Cube002_13" geometry={nodes.Cube002_13.geometry} material={materials['Vest.002']} skeleton={nodes.Cube002_13.skeleton} />
            <skinnedMesh name="Cube002_14" geometry={nodes.Cube002_14.geometry} material={materials['Vest2.002']} skeleton={nodes.Cube002_14.skeleton} />
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
   
  )
}

useGLTF.preload('src/assets/testing.glb')
