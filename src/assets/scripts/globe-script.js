var scene = new THREE.Scene();
scene.background = new THREE.Color(0x52AA8A);

// Setup camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Setup renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup globe geometry
var geometry = new THREE.SphereGeometry(1.4, 32, 32);

// Setup globe material
var material = new THREE.PointsMaterial({
    size: 0.019,
    color: 0xffffff
});

// Create globe mesh
var globe = new THREE.Points(geometry, material);

// Add globe to scene
scene.add(globe);

// Add ambient light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Add window resize listener
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation function
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.001;
    renderer.render(scene, camera);
}

// Start animation
animate()