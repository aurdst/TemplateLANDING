<template>
    <v-container class="container">
        <div class="paragraph">
            <h1>Title</h1>
            <br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel placerat enim. Sed id odio porta, venenatis sem non, dignissim nibh. Sed elementum nunc purus, sed maximus urna pulvinar ut. Nullam semper arcu sed ipsum viverra rhoncus. Ut vel mattis sapien, ac lobortis ligula. Curabitur iaculis ullamcorper sagittis. Aenean ornare vulputate cursus. Nullam vitae ex maximus, pretium elit quis, maximus enim. Morbi ac neque vitae dolor posuere fermentum vitae ac lacus. Ut varius viverra tortor, et consequat tellus luctus ut. Cras pretium nulla vel nulla interdum, sed vulputate lorem mollis. 
            </p>
        </div>
    </v-container>
</template>

<style scoped>
@media screen and (min-width:790px) {
    .paragraph {
        width: 90%;
    }
}
.container{
    height: 100vh!important;
    background-image: url("../assets/pexels-life-of-pix-8092.jpg");
    background-size: cover;
    position: relative;
}
.paragraph{
    background-color: rgba(0, 0, 0, .5);
    color: white;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    display: block;
    padding: 55px;
}
</style>

<script>
    export default {
        name: 'SlideFive'
    }
</script>