import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );


const texture = new THREE.TextureLoader().load( 'textures/rgb_triangles.png' );

// immediately use the texture for material creation
const material_ = new THREE.MeshBasicMaterial( { map: texture } );

const geometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.

	
	const va = [-1.0,  1.0,  1.0,]
	const vb = [-1.0, -1.0,  1.0,]
	const vc = [1.0,  -1.0,  1.0,]
	const vd = [1.0, 1.0, 1.0,]
	const ve = [1.0, 1.0, -1.0,]
	const vf = [1.0,  -1.0,  -1.0,]
	const vg = [-1.0,  1.0,  -1.0,]
	const vh = [-1.0, -1.0,  -1.0,]
	

const vertices = new Float32Array( [
	...va,
	...vb,
	...vd,
	

	 ...vd,
	 ...vb,
	 ...vc,

	 ...vd,
	 ...vc,
	 ...ve,

	 ...ve,
	 ...vc,
	 ...vf,

	 ...va,
	 ...vb,
	 ...vg,

	 ...vb,
	 ...vg,
	 ...vh,

	 ...ve,
	 ...vf,
	 ...vh,
	
	 ...vg,
	 ...ve,
	 ...vh,



	
] );

const uvs = new Float32Array ( [
	0, 1,
	0, 0,
	1, 1,
	
	1, 1,
	0, 0,
	1, 0,

] );

geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

const material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
