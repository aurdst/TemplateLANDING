<template>
  <v-container>
    <NavBarComponent/>
    <SlideComponent />
    <SlideTwo />
    <SlideFour />
    <SlideTree />
    <SlideFive />
    <FormSlide />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBarComponent from '../components/NavBarComponent.vue'
import SlideComponent from '@/components/SlideComponent.vue'
import SlideTwo from '@/components/SlideTwoComponent.vue'
import SlideTree from '@/components/SlideTreeComponent.vue'
import SlideFour from '@/components/SlideFourComponent.vue'
import SlideFive from '@/components/SlideFiveComponent.vue'
import FormSlide from '@/components/FormSlideComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBarComponent, SlideComponent, SlideTwo, SlideTree, SlideFour, SlideFive, FormSlide
  },
});
</script>

<style scoped>
  v-container{
    padding: 0;
    margin: 0;
    
  }
</style>