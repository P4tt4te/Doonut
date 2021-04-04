var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xd238a5 );

var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000);

var controls = new THREE.OrbitControls( camera, renderer.domElement );



camera.position.set(0, 20, 100);
controls.update();
window.addEventListener('resize',function(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight
})



var loader = new THREE.GLTFLoader();

loader.load('../model/scene.glb', function( gltf ){
  scene.add( gltf.scene );

}, undefined, function ( error ) {
  console.error( error );
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();
