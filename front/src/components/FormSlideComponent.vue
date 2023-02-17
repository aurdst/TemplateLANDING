<template>
    <section class="form">
        <h2 class="text-center">Formulaire</h2>
        <br>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            class="field_label"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Nom"
          ></v-text-field>
      
          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Téléphone"
          ></v-text-field>
      
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>
      
          <v-select
            v-model="select.value.value"
            :items="items"
            :error-messages="select.errorMessage.value"
            label="Projet"
          ></v-select>
      
          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            value="1"
            label="En soumettant ce formulaire, vous consentez à ce que vos informations personnelles soient collectées et utilisées dans le but de vous contacter ultérieurement dans le cadre de notre activité commerciale, conformément à notre politique de confidentialité."
            type="checkbox"
          ></v-checkbox>
      
          <v-btn
            class="me-4 btn"
            type="submit"
          >
            envoyer
          </v-btn>
      
          <v-btn @click="handleReset" class="btn_delete">
            effacer
          </v-btn>
        </form>
    </section>
  </template>


<style scoped>
.form{
    padding: 55px;
}
  /* Desktop */
  @media screen and (min-width:790px){
    .v-label.v-label--clickable {
    font-size: 1vw!important;
    }

    .form{
    width: 70%!important;
    display: block;
    margin: auto;
  }
  }
  .v-label.v-label--clickable {
    font-size: 3.3vw;
    }
  .form{
    width: 100%;
    display: block;
    margin: auto;
  }

  .field_label{
    background: white!important;
  }
  .btn{
    border-radius: 0px;
    color: white;
    background: #009688;
    font-weight: 300;
  }
  .btn_delete{
    border-radius: 0px;
    background: #232323;
    color: white;
    font-weight: 300;
}

</style>

<script>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  export default {
    setup () {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          },
          email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
          },
          select (value) {
            if (value) return true

            return 'Select an item.'
          },
          checkbox (value) {
            if (value === '1') return true

            return 'Must be checked.'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const select = useField('select')
      const checkbox = useField('checkbox')

      const items = ref([
        'Construction',
        'Rénovation',
        'Destruction',
        'Conseils',
      ])

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, phone, email, select, checkbox, items, submit, handleReset }
    },
  }
</script>