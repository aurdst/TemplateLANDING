<template>
    <v-container>
        <v-row>
            <v-col cols='12' class="pa-15 text-justify">
                <h1 class="text-left">Test</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel placerat enim. Sed id odio porta, venenatis sem non, dignissim nibh. Sed elementum nunc purus, sed maximus urna pulvinar ut. Nullam semper arcu sed ipsum viverra rhoncus. Ut vel mattis sapien, ac lobortis ligula. Curabitur iaculis ullamcorper sagittis. Aenean ornare vulputate cursus. Nullam vitae ex maximus, pretium elit quis, maximus enim. Morbi ac neque vitae dolor posuere fermentum vitae ac lacus. Ut varius viverra tortor, et consequat tellus luctus ut. Cras pretium nulla vel nulla interdum, sed vulputate lorem mollis. Nulla nec ultrices arcu. Nullam a turpis sapien. Pellentesque quis egestas libero. Aliquam cursus felis nec pharetra dictum. Integer facilisis scelerisque velit eget auctor.</p>
            </v-col>
            <v-col cols='12'>
                <v-img src="@/assets/pexels-life-of-pix-8092.jpg" width="100vw" height="auto" alt="" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
p{
    font-size: small;
}
v-col{
    padding: 0;
}
</style>

<script>
    export default {
        name: 'SlideTwo'
    }
</script>