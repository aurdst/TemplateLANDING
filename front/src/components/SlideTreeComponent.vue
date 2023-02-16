<template>
    <v-container class="container">
        <v-row>
            <v-col cols='12' class="text-justify">
                <section class="test">
                    <h1 class="text-left pl-10">Test</h1>
                    <p class="pa-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel placerat enim. Sed id odio porta, venenatis sem non, dignissim nibh. Sed elementum nunc purus, sed maximus urna pulvinar ut. Nullam semper arcu sed ipsum viverra rhoncus. Ut vel mattis sapien, ac lobortis ligula. Curabitur iaculis ullamcorper sagittis. Aenean ornare vulputate cursus. Nullam vitae ex maximus, pretium elit quis, maximus enim. Morbi ac neque vitae dolor posuere fermentum vitae ac lacus. Ut varius viverra tortor, et consequat tellus luctus ut. Cras pretium nulla vel nulla interdum, sed vulputate lorem mollis. Nulla nec ultrices arcu. Nullam a turpis sapien. Pellentesque quis egestas libero. Aliquam cursus felis nec pharetra dictum. Integer facilisis scelerisque velit eget auctor.</p>
                    <v-btn variant="tonal" class="ml-10 btn">
                        Button
                    </v-btn>
                </section>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

@media screen and (min-width:790px) {
    .test {
        margin-top: 50%;
        margin-left: 150px;
        margin-right: 150px;
    }
}
.container{
    height: 100vh!important;
    background: #fff;
}

p{
    font-size: small;
}

.test{
    margin-top: 30vh;
}

v-col{
    padding: 0;
}
</style>

<script>
    export default {
        name: 'SlideTree'
    }
</script>