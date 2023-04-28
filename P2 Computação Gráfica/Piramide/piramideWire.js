import * as THREE from 'three';

      const scene = new THREE.Scene();
      const width = window.innerWidth;
      const height = window.innerHeight;
      const camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0xFFFFFF); // COLANDO COR NO FUNDO
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.ConeGeometry(4, 3, 4);
      const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );


      const piramideQuadrada = new THREE.Mesh( geometry, material );
      scene.add( piramideQuadrada );

      camera.position.z = 10;

      const animate = function () {
        requestAnimationFrame( animate );

        // cone.rotation.x += 0.01;
        piramideQuadrada.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();