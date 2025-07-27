import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            // providing an array of min and max, will clamp the pixel ratio to ensure performance on high pixel ratio devices. dpr={[1,2]} is r3f default
            // dpr={[1, 2]}
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMappingToneMapping
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [3, 2, 6]

            }}>
            <Experience />
        </Canvas>
    </>
)