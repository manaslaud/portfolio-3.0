import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei'
import {RigidBody} from '@react-three/rapier' 
import { useFrame } from '@react-three/fiber'
export default function Soldier({animationNameIndex:number,setAnimationNameIndex}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('src/assets/final.glb')
  const [subscribeKeys,getKeys]=useKeyboardControls()
  const { actions,names } = useAnimations(animations, group)
  const {forward,backward,leftward,rightward}=getKeys()
  const rigidBodyRef=useRef()
  // useEffect(()=>{
  //   rigidBodyRef.current?.applyImpulse(impulse)
  //   console.log('clicked')
  //   console.log(forward,backward,leftward,rightward)

  // },[forward])
  useFrame((state,delta)=>{
const {forward,backward,leftward,rightward}=getKeys()
const impulse={x:0,y:0.00001,z:0}
const impuseStr=1/2*delta
if(forward){
  impulse.z-=impuseStr
}
rigidBodyRef.current?.applyImpulse(impulse)
})

  return (
    <RigidBody ref={rigidBodyRef} type='dynamic' colliders="cuboid">
  <group ref={group}  dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.002']} skeleton={nodes.Cube011.skeleton} />
        </group>
      </group>
    </group>
    </RigidBody>
  
  )
}

useGLTF.preload('src/assets/final.glb')
