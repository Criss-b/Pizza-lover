<template>
    <div class="contactsContainer">
      <form class="form" @submit.prevent="sendEmail" ref="form">
        <div class="container">
          <div class="row">
            <div class="col">
              <fieldset>
                <label class="label" for="name">Nome</label>
                <input
                  id="name"
                  name="user_name"
                  class="text styleBox"
                  type="text"
                  placeholder="Nome"
                  v-model="user_name"
                  required
                  autocomplete="on"
                />
              </fieldset>
              <fieldset>
                <label class="label" for="email">Email</label>
                <input
                  id="email"
                  name="user_email"
                  class="text styleBox"
                  type="email"
                  placeholder="Email"
                  v-model="user_email"
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col">
              <fieldset>
                <label class="label" for="message">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  class="textarea styleBox"
                  placeholder="Messaggio"
                  v-model="message"
                  required
                ></textarea>
              </fieldset>
              <div class="btnContainer">
                <bookingButton
                  class="btnClass"
                  :value="value"
                  type="submit"
                ></bookingButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="mapContainer">
      <GoogleMap
        api-key="AIzaSyBgj2FFoZMTyoepWzzRjcuJkF9ZMowjk4A"
        :center="center"
        :zoom="5.55"
        style="width: 90%; height: 500px;"
        >
          <Marker :options="{ position: center }"/>
      </GoogleMap>
    </div>
  </template>
  
  <script>
  import bookingButton from "@/components/bookingButton.vue";
  import emailjs from "@emailjs/browser";
  import {GoogleMap, Marker} from "vue3-google-map";
  export default {
    name: "contactsPage",
    components: {
      bookingButton, GoogleMap, Marker,
    },
  
    data() {
      return {
        value: "Invia",
        center: { lat: 41.9515346, lng: 13.7843214},
        user_name: "",
        user_email: "",
        message: "",
      };
    },
    methods: {
      sendEmail() {
        emailjs
          .sendForm(
            "service_2fzn99o",
            "template_6zlaont",
            this.$refs.form,
            "54Be7ZE2Rg3dkpdnL"
          )
          .then(
            (result) => {
              alert("Messaggio inviato", result.text);
              this.user_name = "";
              this.user_email = "";
              this.message = "";
            },
            (error) => {
              alert("Errore, messaggio non inviato. Riprova", error.text);
            }
          );
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .contactsContainer {
    background-color: #282525;
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 40px;
    color: white;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  fieldset {
    width: 30vw;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .text {
    background-color: #3b3838;
    color: white;
    margin: 2px;
    width: 100%;
  }
  .textarea {
    padding-top: 5px;
    background-color: #3b3838;
    color: white;
    border: none;
    margin: 2px;
    height: 185px;
    width: 100%;
    resize: none;
  }
  .btnContainer {
    display: flex;
    width: 90%;
    justify-content: flex-end;
  }
  .btnClass {
    text-align: center;
    height: 25px;
    width: 40%;
    font-size: 15px;
  }
  .mapContainer {
    display: flex;
    background-color: #282525;
    justify-content: center;
    padding-bottom: 90px;
  }
  @media only screen and (max-width: 424px) {
    iframe {
      width: 90vw;
    }
  }
  @media only screen and (max-width: 769px) {
    .row {
      display: flex;
      flex-direction: column;
    }
    fieldset {
      width: 100vw;
    }
    .btnContainer {
      width: 100%;
      justify-content: center;
    }
  }
  </style>
  