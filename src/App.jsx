
import './App.css'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
function App() {

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
            position: [ 0,35,-35]
        } }
        color='red'
    >
        <Experience />
    </Canvas>
      </KeyboardControls>
     
    </main>
  )
}

export default App
