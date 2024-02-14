
import './App.css'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import { useState } from 'react'
function App() {
  const [animationNameIndex,setAnimationNameIndex]=useState(5)

  return (
    <main className='main'>
      <KeyboardControls map={[
        {
          name:'forward', keys:['ArrowUp','KeyW']
        },
        {
          name:'backward', keys:['ArrowDown','KeyS']
        },
        {
          name:'leftward', keys:['ArrowLeft','KeyA']
        },
        {
          name:'rightward', keys:['ArrowRight','KeyD']
        },
        {
          name:'jump', keys:['Space']
        }
      ]}>
      <Canvas
        shadows
        camera={ {
            fov: 55,
            near: 0.1,
            far: 10000,
            position: [ 0,35,-35],
            
        } }
        
        >
        <Experience />
    </Canvas>
      </KeyboardControls>
     {/* <div className='btnContainer'>
      <button className='fwd'>Forward</button>
      <button className='bwd'>Backward</button>
      <button className='left'>Left</button>
      <button className='right'>Right</button>

     </div> */}
    </main>
  )
}

export default App
