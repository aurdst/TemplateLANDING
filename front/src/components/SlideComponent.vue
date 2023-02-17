<template>
    <v-container>
        <v-row>
            <v-col cols='12'>
                <v-img src="@/assets/img/logoRandom.png" height="100vh"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .v-row{
        margin-top: -8vh;
        background-image: url("../assets/pexels-pixabay-417273.jpg");
        background-size: cover;
        height: 100vh;
        width: auto;
    }
</style>

<script>
    export default {
        name: 'SlideComponent'
    }
</script>