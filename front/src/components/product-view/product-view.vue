<template>
 <div :container-id="containerId" style="width:100px; background-color: red;">
 </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import urlModel from '@/assets/models/gltf/sousmarin/scene.gltf'

export default {
    name: "ProductView",
    props: {
        containerId: {
            type: String,
            required: true
        },
        modelSettings: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            scene: undefined,
            camera: undefined,
            renderer: undefined
        };
    },
    methods: {
        renderScene() {
            this.renderer.render(this.scene, this.camera);
        },
        init() {
            // Tout d’abord, nous allons créer simplement la scène 3D
            this.scene = new THREE.Scene();
            this.scene.background = null;

            // Nous allons ensuite générer le renderer :
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

            // Nous allons préciser l’encodage des couleurs en sortie :
            this.renderer.outputEncoding = THREE.sRGBEncoding;

            // Pour éviter une déformation de l’image, nous allons préciser le pixel ratio de l’écran :
            this.renderer.setPixelRatio(window.devicePixelRatio);

            // Dans notre cas on souhaite afficher le rendu dans le contenant de product-view, on prendra donc le DOM de celui-ci pour déterminer la taille et insérer le renderer
            const container = document.getElementById(this.containerId);
            this.renderer.setSize(container.offsetWidth, container.offsetHeight);
            container.appendChild(this.renderer.domElement);

            // Vous voulez presque toujours utiliser la largeur de l'élément divisée par la hauteur
            // Nous allons ensuite créer la caméra et la positionner à la position enregistrée dans modelSettings.cameraPosition :
            this.camera = new THREE.PerspectiveCamera(
                45,
                container.offsetWidth / container.offsetHeight,
                0.25,
                20
            );
            this.camera.position.set(this.modelSettings.cameraPosition[0], this.modelSettings.cameraPosition[1], this.modelSettings.cameraPosition[2]);
            
            // Nous allons maintenant attribuer des contrôles à la caméra pour pouvoir bouger celle-ci :
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
            
            // distance minimum entre la cible et la caméra
            controls.minDistance = 2;
            
            // distance max entre la cible et la caméra
            controls.maxDistance = 5;
            
            // controls.enablePan = false;
            // permet de définir la position 3D de la cible :
            controls.target.set(0, 0, 0);

            // permet d’avoir à chaque mouvement de la caméra un nouveau rendu depuis la nouvelle position de celle-ci
            controls.addEventListener("change", this.renderScene);

            // ajouter à notre scène une lumière directionnelle et 3 points de lumière répartis à différentes positions,
            const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
            directionalLight.position.set(0, 1, 0);
            directionalLight.castShadow = true;
            this.scene.add(directionalLight);

            const light = new THREE.PointLight(0xffffcc, 1);
            light.position.set(0, 600, 1000);
            this.scene.add(light);

            const light2 = new THREE.PointLight(0xe6f7ff, 1);
            light2.position.set(1000, 200, 0);
            this.scene.add(light2);

            const light3 = new THREE.PointLight(0xfff2e6, 1);
            light3.position.set(0, 200, -1000);
            this.scene.add(light3);

            const light4 = new THREE.PointLight(0xc4c400, 1);
            light4.position.set(-1000, 600, 1000);
            this.scene.add(light4);


            // Enfin, nous allons charger notre modèle dans la scène
            let loader = new GLTFLoader();
            // const modelUrl = new URL('../../assets/models/gltf/sousmarin/scene.gltf', import.meta.url).href;

            loader.load(
                urlModel,
                data => {
                    var object = data.scene;
                    object.position.set(0,0,0);
                    if(this.modelSettings.scale) object.scale.set(this.modelSettings.scale, this.modelSettings.scale, this.modelSettings.scale);
                    this.scene.add(object);
                    this.renderScene();
                }
            );
        },
    },
    mounted() {
        this.init();
        console.log(urlModel);
    },
}         
</script>
