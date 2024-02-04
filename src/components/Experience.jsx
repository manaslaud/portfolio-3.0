import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import {Physics,RigidBody} from '@react-three/rapier'
// import Soldier from './Soldier'
import Desk from './Desk'
import {useEffect, useRef, useState } from 'react'
import Stairs from './Stairs'
import { Html } from '@react-three/drei'
import Television from './Television'
import Testing from './Testing'

function Walls({position=[0,0,0]}){

   return (
    <RigidBody type='fixed' colliders="cuboid" restitution={1}>
    <mesh receiveShadow rotation-x={ - Math.PI  }  position={position}>
        <boxGeometry args={[200,70,2]}  />
        <meshStandardMaterial color="greenyellow" />
    </mesh>
    </RigidBody>
   )
}
function Walls2({position=[0,0,0]}){
    return (
     <RigidBody type='fixed' colliders="cuboid" restitution={1}>
     <mesh receiveShadow rotation-y={ - Math.PI/2  }  position={position}>
         <boxGeometry args={[200,70,2]}  />
         <meshStandardMaterial color="greenyellow" />
     </mesh>
     </RigidBody>
    )
}
// function Television(){
//     const gltf=useLoader(GLTFLoader,`public/television.glb`)
//      return (
//       <primitive object={gltf.scene} scale={[10,10,10]} position={[98,20,0]} rotation={[0,-Math.PI/2,0]}>
//       </primitive>
//      )
// }

export default function Experience()
{
    const [animationNameIndex,setAnimationNameIndex]=useState(0)
    return <>
        <Physics debug>
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <Environment preset='city' />
        <color attach={'background'} args={['ivory']}/>

        <RigidBody type='fixed' friction={3}>
        <mesh receiveShadow rotation-x={ - Math.PI * 0.5 } scale={2} position={[0,-1,0]}>
            <boxGeometry args={[100,100,1]}  />
            <meshStandardMaterial color="greenyellow" />
        </mesh> 
        </RigidBody>
        <RigidBody type='fixed' colliders="cuboid">
        <mesh receiveShadow rotation-x={ - Math.PI * 0.5 } scale={2} position={[-18,43,0]} >
            <boxGeometry args={[85,100,1]}  />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        </RigidBody >
        {/* small */}
        <RigidBody type='fixed' colliders="cuboid">
        <mesh receiveShadow rotation-x={ - Math.PI * 0.5 } scale={2} position={[80,43,-40]}>
            <boxGeometry args={[15,80,1]}  />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        </RigidBody>

       <Walls position={[0,35,-100]}/>
       <Walls position={[0,35,100]}/>
       <Walls2 position={[100,35,0]}/>
       <Walls2 position={[-100,35,0]}/>

        <Desk/>
        {/* <Soldier animationNameIndex={animationNameIndex} setAnimationNameIndex={setAnimationNameIndex}/> */}
        <RigidBody type='fixed' colliders="trimesh">
        <Stairs/>

        </RigidBody>
        <Television/>
        <Html wrapperClass='planefolioScreen' transform position={[96,28.5,-4]} rotation-y={-Math.PI/2} occlude="blending" >
            <iframe src="https://planefolio-2-0.vercel.app/"></iframe>
        </Html>
       <Testing/>
       
        </Physics>
        
    </>
}