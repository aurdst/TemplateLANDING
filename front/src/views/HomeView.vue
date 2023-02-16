<template>
  <v-container>
    <NavBarComponent/>
    <SlideComponent />
    <SlideTwo />
    <SlideTree />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBarComponent from '../components/NavBarComponent.vue'
import SlideComponent from '@/components/SlideComponent.vue'
import SlideTwo from '@/components/SlideTwoComponent.vue'
import SlideTree from '@/components/SlideTreeComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBarComponent, SlideComponent, SlideTwo, SlideTree
  },
});
</script>

<style scoped>
  v-container{
    padding: 0;
    margin: 0;
    
  }
</style>