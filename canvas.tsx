import React from "react"
import '../App.css'
import * as THREE from 'three';

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let boxGeometry: THREE.BoxGeometry
let material: THREE.MeshBasicMaterial
let mesh: THREE.Mesh

scene = new THREE.Scene()

camera = new THREE.PerspectiveCamera(
     75,
      // eslint-disable-next-line no-restricted-globals
      innerWidth / innerHeight,
     0.1,
    1000
)

renderer = new THREE.WebGLRenderer()
// eslint-disable-next-line no-restricted-globals
renderer.setSize(innerWidth, innerHeight)

boxGeometry = new THREE.BoxGeometry(
    1, 1, 1
)

material = new THREE.MeshBasicMaterial({
    color: 0x00FF00
})

mesh = new THREE.Mesh(
    boxGeometry,
    material
)

console.log(scene)
console.log(camera)
console.log(renderer)
console.log(boxGeometry)
console.log(material)
console.log(mesh)

scene.add(mesh)

document.body.appendChild<HTMLCanvasElement>(renderer.domElement)

camera.position.z = 5

renderer.render(scene, camera)
export const Canvas: React.FC = () => {
    
    return (
        <div>
            
        </div>
    )
}