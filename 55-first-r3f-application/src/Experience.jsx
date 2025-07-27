import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./CustomObject"


// extend allows you to use any threejs element in jsx r3f style, even for things not provided by r3f, like orbitControls

extend({ OrbitControls })

export default function Experience() {

  const { camera, gl } = useThree()
  const cubeRef = useRef()
  const carouselRef = useRef()

  // useThree provides us the state with the camera and renderer only once at the beginning of the component

  // use frame is called before rendering each frame
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    // carouselRef.current.rotation.y += delta

    // const angle = state.clock.elapsedTime

    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0)
  })
  return <>
    <orbitControls args={[camera, gl.domElement]} />

    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />

    <group ref={carouselRef}>
      <mesh ref={cubeRef} rotation-y={Math.PI * 1 / 4} position-x={3} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>

      <mesh position-x={-2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color='orange' />
      </mesh>
    </group>
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <meshStandardMaterial color='greenyellow' />
    </mesh>

    <CustomObject />

  </>
}