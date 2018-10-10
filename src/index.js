var THREE = require('three')

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )

var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.DodecahedronGeometry( 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xffffff} )
material.roughness = 0.01

var cube = new THREE.Mesh( geometry, material )
scene.add( cube )

var light1 = new THREE.PointLight( 0xff0000, 1, 100 )
light1.position.set( 20, 8, 10 )
scene.add( light1 )

var light2 = new THREE.PointLight( 0x0000ff, 1, 100 )
light2.position.set( -20, 8, 10 )
scene.add( light2 )


camera.position.z = 5

var xRotationDelta = 0.0001
var yRotationDelta = 0

var animate = function () {
  requestAnimationFrame( animate )

  cube.rotation.x += xRotationDelta
  cube.rotation.y += yRotationDelta

  renderer.render( scene, camera )
};

animate()

// Keyboard Input Code.
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
      // Left arrow.
        yRotationDelta -= 0.001
    } else if(event.keyCode == 39) {
      // Right arrow.
        yRotationDelta += 0.001
    }
});
