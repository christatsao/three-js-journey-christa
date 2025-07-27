import * as THREE from 'three'
import { useEffect, useMemo, useRef } from 'react'


export default function CustomObject() {
  // useEffect: calls
  // useMemo: we send it a function and it calls that function and remembers the value. next time useMemo is called, like if the component is being redrawn, it will return the value it already got from the first time. we can specify variables that if changed, would force useMemo to update it values

  const verticesCount = 10 * 3 // 10 triangles, 3 corners each for 30 vertices in total

  const geometryRef = useRef()

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3) // each vertex needs 3 values for coords
    for (let i = 0; i < verticesCount * 3; i++) {
      //randomize all the vertex positions, multiply by 3 to make the area bigger
      positions[i] = (Math.random() - 0.5) * 3
    }
    return positions
  }, []) //()=>{} is the function, and [] is the dependencies ( the value )

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
  }, [])
  return <mesh>
    <bufferGeometry ref={geometryRef}>
      <bufferAttribute
        attach='attributes-position'
        count={verticesCount}
        itemSize={3} // how many values that should be used per vertex
        array={positions}
      />
    </bufferGeometry>
    <meshStandardMaterial color='red' side={THREE.DoubleSide} /> //
  </mesh>
}