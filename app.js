// Import Three.js from CDN
import * as THREE from 'https://cdn.skypack.dev/three@0.132.0/build/three.module.js';

// Import OrbitControls from CDN
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.0/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the world map texture
const textureLoader = new THREE.TextureLoader();
const mapTexture = textureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');

// Create a sphere geometry with a radius of 2 and 32 segments
const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);

// Create a material with the world map texture
const material = new THREE.MeshBasicMaterial({ map: mapTexture });

// Create a mesh with the sphere geometry and the material
const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 3.5; // Set the minimum zoom distance (closest zoom)
controls.maxDistance = 6; // Set the maximum zoom distance (farthest zoom)
controls.update();

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
    // Update controls in the animation loop
    controls.update();
    }
animate();