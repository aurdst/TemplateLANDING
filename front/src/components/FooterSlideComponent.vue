<template>
  <v-container class="main_container">
<!--  -->
    <div id="footer_btn" class="bg-teal d-flex w-100 align-center px-4">
      <p class="p_footer" id="into_footer">Get connected with us on social networks!</p>

      <v-spacer></v-spacer>

      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          id="into_footer"
          :icon="icon"
          variant="plain"
          size="small"
      ></v-btn>
    </div>
<!--  -->
    <v-footer class="d-flex footer_bg">
<!--  -->
      <v-col cols="4">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Adress</li>
        </ul>
      </v-col>
<!--  -->
      <v-col cols="4">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Adress</li>
        </ul>
      </v-col>
<!--  -->
      <v-col cols="4">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Adress</li>
        </ul>
      </v-col>
    </v-footer>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Copyright</strong> | ADSTDesign
    </div>
<!--  -->
  </v-container>
</template>

<style scoped>
  /* Desktop */
  @media screen and (min-width:790px){
    .p_footer{
      font-size: 1.5vw !important;
      display: contents;
    }
  }

  /* Mobile */
  .p_footer{
      font-size: 6vw;
      display: block;
      width: 100%;
    }
  li{
    list-style-type: none;
    text-align: center;
    color: white;
  }
  .footer_bg{
    background: #1e1e1e;
  }
  .corect{
    text-align: center;
    padding: 0px!important;
    background: #008477;
  }
</style>

<script>
  export default {
    name: 'FooterSlide',
    
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),

    mounted() {
      // On créer un objet MediaQueryList avec la fonction matchMedia
      const mobileQuery = window.matchMedia('(max-width: 768px)');
      // On récupère l'id souhaité
      const footerElements = document.getElementById('footer_btn');
      const intofooterElement = document.getElementById('into_footer');
  
      
        function handleMobileQuery(mobileQuery) {
        // Verification de l'existance de l'élément
        if (footerElements !== null) {
          // Si la taille d'écran correspond alors ajoute ou retire la class d-flex
          if (mobileQuery.matches) {
            footerElements.classList.remove('d-flex');
            footerElements.classList.add('corect');
          } else {
            footerElements.classList.add('d-flex');
          }
        }

        if (intofooterElement !== null) {
          // Si la taille d'écran correspond alors ajoute ou retire la class d-flex
          if (mobileQuery.matches) {
            intofooterElement.classList.add('corect');
          } else {
            intofooterElement.classList.remove('corect');
          }
        }
      }

      console.log(intofooterElement);

      handleMobileQuery(mobileQuery); // exécute la fonction pour la première fois
      mobileQuery.addEventListener('change', () => {
        handleMobileQuery(mobileQuery);
      }); // exécute la fonction lorsque la taille de l'écran change

    }
  }
</script>