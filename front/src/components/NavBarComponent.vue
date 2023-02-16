<template>
    <v-container class="appbar">
        <v-app-bar class="appbar pt-5">
            <div>

                <v-img src="@/assets/img/logoRandomFit.png"/>
            </div>
            <template v-slot:append>
                <v-btn icon="mdi-magnify" class="iconbtn"></v-btn>
            </template>
        </v-app-bar>
    </v-container>
</template>

<style scoped>
.appbar{
    z-index: 999;
    background: rgba(0, 0, 0, .2);
}
div.v-toolbar__content{
    padding-top: 5vh!important;
}
.iconbtn{
    color: white;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat){
    box-shadow: none;
}
</style>

<script>
    export default {
        name: 'NavBarComponent'
    }
</script>