import React, { useState } from "react"
import '../App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Vector2, Vector3 } from "three"

const init = () => {
    // scene
    let scene: THREE.Scene
    scene = new THREE.Scene()

    // camera
    let camera: THREE.PerspectiveCamera
    camera = new THREE.PerspectiveCamera(
        75,
        // eslint-disable-next-line no-restricted-globals
        innerWidth / innerHeight,
        0.1,
        1000
    )
    camera.position.z = 5

    // renderer
    let renderer: THREE.WebGLRenderer
    renderer = new THREE.WebGLRenderer()
    // eslint-disable-next-line no-restricted-globals
    renderer.setSize(innerWidth, innerHeight)

    // box
    let boxGeometry: THREE.BoxGeometry
    boxGeometry = new THREE.BoxGeometry(
        1, 1, 1
    )

    // material
    let material: THREE.MeshBasicMaterial
    material = new THREE.MeshBasicMaterial({
        color: 0x00FF00
    })

    // mesh
    let mesh: THREE.Mesh
    mesh = new THREE.Mesh(
        boxGeometry,
        material
    )
    scene.add(mesh)

    document.body.appendChild<HTMLCanvasElement>(renderer.domElement)

    renderer.render(scene, camera)
}
init()

let text: string

export const Canvas: React.FC = () => {

    const [ changeText, setChangeText ] = useState<string>('')
    text = changeText

    const setChangeTextFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangeText(e.target.value)
    }
    
    return (
        <>
            <div className='text'>
                {text}
            </div>
            <div className='input'>
                <input onChange={ setChangeTextFunction } />
                {/* <button onClick={} /> */}
            </div>
        </>
    )
}