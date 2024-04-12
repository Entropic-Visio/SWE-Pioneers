const scene = new THREE.Scene();
scene.background = new THREE.Color(0x388659);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.x = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.98, window.innerHeight*0.98);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(scene.background, 1);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

const geometry = new THREE.SphereGeometry(4, 32, 32);

const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02
});

const particleGeometry = new THREE.BufferGeometry();

const positions = [];

for (let i = 0; i < 1600; i++) {
    const vertex = new THREE.Vector3();
    vertex.x = Math.random() * 2 - 1;
    vertex.y = Math.random() * 2 - 1;
    vertex.z = Math.random() * 2 - 1;
    vertex.normalize(); 

    vertex.multiplyScalar(2);

    positions.push(vertex.x, vertex.y, vertex.z);
}

particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const particles = new THREE.Points(particleGeometry, material);

scene.add(particles);

function animate() {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.0025;

    renderer.render(scene, camera);
}

animate();