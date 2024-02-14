import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import {Physics,RigidBody} from '@react-three/rapier'
import {useEffect, useRef, useState } from 'react'
import { Html } from '@react-three/drei'


export default function Experience()
{
    return <>
        <Physics debug>
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 0, 35, 0 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <Environment preset='forest' />
        {/* <color attach={'background'} args={['ivory']}/> */}

       
    
        </Physics>
        
    </>
}