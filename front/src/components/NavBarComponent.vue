<template>
    <v-container class="appbar">
        <v-app-bar class="appbar pt-5">
            <div style="text-align: left; width: 150px;">
                <v-img src="@/assets/img/logoRandomFit.png" class="pl-5"/>
            </div>
            <template v-slot:append>
                <v-btn icon="mdi-menu" class="iconbtn" @click="menu = !menu"></v-btn>
            </template>
        </v-app-bar>

        <MenuComponent v-if="menu"/>
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
import MenuComponent from '@/components/MenuComponent.vue'
    export default {
        name: 'NavBarComponent',

        components: {
            MenuComponent,
        },

        data: () => ({
            menu: false,
        }),
    }
</script>