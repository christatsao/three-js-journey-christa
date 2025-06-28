import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */



const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff37 })
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x4d3280 })
)
cube3.position.x = 2
group.add(cube3)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // POSITION
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1) // equivalent to above 3 lines

// // SCALE (change the position of the object)
// mesh.scale.x = 2 // multiplies to magnitude of the x length by integer 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// // equivalently:
// // mesh.scale.set(2,0.5,0.5)

// // Rotation 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// Axes Helper
const axesHelper = new THREE.AxesHelper(2) // first parameter indicates length
scene.add(axesHelper)

// console.log(mesh.position.length()) // prints length from center to cube
// // mesh.position.normalize() // normalizes position vector to magnitude 1
// console.log(mesh.position.length()) // prints length from center to cube


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.lookAt(mesh.position) // orients camera towards center of mesh
// camera.position.y = 1
// camera.position.x = 1

scene.add(camera)

// console.log(mesh.position.distanceTo(camera.position)) // prints distance between mesh and camera

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)