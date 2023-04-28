import * as THREE from 'three';

    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xFFFFFF); // COLANDO COR NO FUNDO
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load( '../textures/texturaPrisma.jpg' );


    const geometry = new THREE.CylinderGeometry( 1, 1, 3, 3 ); 
    const material_ = new THREE.MeshBasicMaterial({
      map: texture,
    });
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
    const cylinder = new THREE.Mesh( geometry, material_ ); 

    scene.add( cylinder );
    camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame( animate );

        cylinder.rotation.x += 0.01;
        cylinder.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();