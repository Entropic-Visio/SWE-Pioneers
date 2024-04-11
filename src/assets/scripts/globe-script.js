// Set up scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x388659);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;
camera.position.x = 2;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.98, window.innerHeight*0.98);
document.body.appendChild(renderer.domElement);

// Resize event listener to adjust camera aspect ratio and renderer size
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update camera aspect ratio
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Update renderer size
    renderer.setSize(width, height);
});

// Create a sphere geometry
const geometry = new THREE.SphereGeometry(4, 32, 32);

// Create a material for the particles
const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02
});

// Create a buffer geometry to hold all the particle vertices
const particleGeometry = new THREE.BufferGeometry();

// Create an array to store the particle positions
const positions = [];

// Add particles to the array
for (let i = 0; i < 1000; i++) {
    // Create a random point on the sphere's surface
    const vertex = new THREE.Vector3();
    vertex.x = Math.random() * 2 - 1;
    vertex.y = Math.random() * 2 - 1;
    vertex.z = Math.random() * 2 - 1;
    vertex.normalize(); // Normalize the vector to lie on the surface

    // Scale the point to the radius of the sphere
    vertex.multiplyScalar(2);

    // Push the coordinates to the positions array
    positions.push(vertex.x, vertex.y, vertex.z);
}

// Add the positions data to the buffer geometry
particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

// Create a particle system from the buffer geometry and material
const particles = new THREE.Points(particleGeometry, material);

// Add the particle system to the scene
scene.add(particles);

// Function to animate the globe
function animate() {
    requestAnimationFrame(animate);

    // Rotate the particle system
    particles.rotation.y += 0.0025;

    renderer.render(scene, camera);
}

// Start the animation
animate();
