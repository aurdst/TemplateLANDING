<template>
    <v-dialog
     v-model="showMenu"
     class="dialog"
    >
        <v-row>
            <v-col cols='12'>
                <ul>
                    <span>
                        <router-link to="/">
                            <v-btn @click="showMenu = fasle" class="btn_menu">Retour</v-btn>
                        </router-link>
                    </span>
                    <br>
                    <br>
                    <br>
                    <li>A propos</li>
                    <li>Nos Services</li>
                    <li>Contact</li>
                    <li>Autre</li>
                </ul>
            </v-col>
        </v-row>
    </v-dialog>
</template>

<style scoped>
.btn_menu{
    background: black;
    border-radius: 0px;
    text-decoration: underline;
    color: white;
}
ul{
    text-align: center;
    padding: 50px;
    text-decoration: none;
}
li{
    list-style-type: none;
    line-height: 50px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
    text-decoration: none;
}
.dialog{
    background: rgba(255, 255, 255, .9);
}
.v-overlay__scrim{
    background: none;
}
</style>

<script>
    
    export default {
        name: 'MenuComponent',
        
        data: () => ({
            showMenu: true,
        }),

        mounted() {
            console.log(this.showMenu);
        }
    }
</script>