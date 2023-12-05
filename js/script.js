import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const player = new Plyr('#player')
$(document).ready(function (e) {
	$('.button').on('mouseenter', function (e) {
		x = e.pageX - $(this).offset().left
		y = e.pageY - $(this).offset().top

		$(this).find('span').css({ top: y, left: x })
	})

	$('.button').on('mouseout', function (e) {
		x = e.pageX - $(this).offset().left
		y = e.pageY - $(this).offset().top

		$(this).find('span').css({ top: y, left: x })
	})

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 1000,
		adaptiveHeight: true,
		accessibility: false,
	})
})

document.querySelector('#contacts-btn').addEventListener('click', e => {
	document.querySelector('#modalWindow').classList.toggle('modalWindow-show')
	document
		.querySelector('#modalWindow-body')
		.classList.toggle('modalWindow__body-on')
})

document.querySelector('#modalWindow').addEventListener('click', e => {
	document.querySelector('#modalWindow').classList.toggle('modalWindow-show')
	document
		.querySelector('#modalWindow-body')
		.classList.toggle('modalWindow__body-on')
})

/* document.querySelector("quit").addEventListener("click" , () => {
	document.querySelector('#modalWindow').classList.toggle('modalWindow-show')
	document
		.querySelector('#modalWindow-body')
		.classList.toggle('modalWindow__body-on')
}) */

document.querySelector('#modalWindow-body').addEventListener('click', e => {
	if(e.target.tagName == "svg")	{
		return
	}
	e.stopPropagation()
})



document.querySelector('#btn-buy').addEventListener('click', function () {
    window.location.href = "buy.html"
})

document.querySelector('#how-btn').addEventListener('click', () => {
	document.querySelector(".how__wrapper").classList.toggle("how__wrapper-off")
})


// Первая модель
THREE.ColorManagement.enabled = false
const canvas = document.querySelector('.model')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, 365 / 500, 0.1, 100)
camera.position.set(15, 0, 0)
scene.add(camera)

const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = -7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = -7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null

gltfLoader.load('js/model/final.glb', gltf => {
	gltf.scene.position.set(0, -1, 0) 
	scene.add(gltf.scene)
	
})

//render
const renderer = new THREE.WebGLRenderer({
	alpha: true,
	antialias: true,
	canvas: canvas,
})
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.useLegacyLights = false
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true
controls.autoRotateSpeed = 5
controls.enableDamping = false

controls.enableRotate = false
controls.enableZoom = false



const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
	const elapsedTime = clock.getElapsedTime()
	const deltaTime = elapsedTime - previousTime
	previousTime = elapsedTime

	if (mixer) {
		mixer.update(deltaTime)
	}

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()


// Вторая модель
const canvas2 = document.querySelector('.model2'); // Выбираем новый контейнер

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(50, 365 / 500, 0.1, 100);
camera2.position.set(15, 0, 0);
scene2.add(camera2);

let mixer2 = null;

gltfLoader.load('js/model/final.glb', gltf => {
    gltf.scene.position.set(0, -1, 0); // Установите позицию второй модели по вашему выбору
    scene2.add(gltf.scene);
    mixer2 = new THREE.AnimationMixer(gltf.scene); // Создаем новый миксер для второй модели
    gltf.animations.forEach(clip => {
        mixer2.clipAction(clip).play();
    });
});

const renderer2 = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvas2,
});

renderer2.toneMapping = THREE.ACESFilmicToneMapping;
renderer2.toneMappingExposure = 1;
renderer2.useLegacyLights = false;
renderer2.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer2.shadowMap.enabled = true;
renderer2.shadowMap.type = THREE.PCFSoftShadowMap;
renderer2.setSize(365, 500);
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.8);
scene2.add(ambientLight2);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight2.castShadow = true;
directionalLight2.shadow.mapSize.set(1024, 1024);
directionalLight2.shadow.camera.far = 15;
directionalLight2.shadow.camera.left = -7;
directionalLight2.shadow.camera.top = 7;
directionalLight2.shadow.camera.right = 7;
directionalLight2.shadow.camera.bottom = -7;
directionalLight2.position.set(5, 5, 5); // Измените позицию по вашему выбору
scene2.add(directionalLight2);



const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.autoRotate = true;
controls2.autoRotateSpeed = 5;
controls2.enableDamping = true
controls2.enabled = false ;

controls2.enableZoom = false;
controls2.enableRotate = false
const clock2 = new THREE.Clock();
let previousTime2 = 0;

const tick2 = () => {
    const elapsedTime = clock2.getElapsedTime();
    const deltaTime = elapsedTime - previousTime2;
    previousTime2 = elapsedTime;

    if (mixer2) {
        mixer2.update(deltaTime);
    }

    // Update controls
    controls2.update();

    // Render
    renderer2.render(scene2, camera2);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick2);
};

tick2();


// konec



var galleryImages = document.querySelectorAll('.reviews__slider-img');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var close = document.querySelector('.close');

galleryImages.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImage.src = this.src;
  });
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});






