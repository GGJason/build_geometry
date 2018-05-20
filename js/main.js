var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var vertices = []
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
camera.position.z = 5;
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate();
function addVertice(sender){
  var vertice = new THREE.Vector3(
    $(sender).find('input[name="x"]').val(),
    $(sender).find('input[name="y"]').val(),
    $(sender).find('input[name="z"]').val()
  );
  var geometry = new THREE.SphereGeometry( 0.1, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.position.set(
    $(sender).find('input[name="x"]').val(),
    $(sender).find('input[name="y"]').val(),
    $(sender).find('input[name="z"]').val())// vertice;
  console.log(sphere)
  scene.add(sphere)
  vertices.push(vertice)
  console.log(vertices)
}
