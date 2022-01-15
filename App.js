import './App.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function setTable() {

  const table = []
    
  let scene, camera, renderer, light, controls, gltfLoader

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();

  camera = new THREE.PerspectiveCamera( 
    75,
    window.innerWidth / window.innerHeight, 
    0.1, 1000 
  );

  controls = new OrbitControls(camera, renderer.domElement)

  gltfLoader = new GLTFLoader();
  const MODEL = '/assets/iphone.gltf'
  gltfLoader.load(MODEL, (gltf) => {
    const object = gltf.scene;
    scene.add(object);
  })

  light = new THREE.DirectionalLight(0xFFFFFF, 1, 500)

  table.push(scene)
  table.push(renderer)
  table.push(camera)
  table.push(controls)
  table.push(light)
  // table.push(gltfLoader)

  console.log(table)
  return table
}

function initTable() {
  const [ scene, renderer, camera, controls, light ] = setTable()

  renderer.setSize(window.innerWidth, window.innerHeight)

  camera.position.z = 5
  controls.update()

  light.position.set(10, 0, 25)
  scene.add(light)

  document.body.appendChild(renderer.domElement)

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()
}

initTable()

function App() {
  return (
    <>
      
    </>
  );
}

export default App;
