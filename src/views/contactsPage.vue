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
    <div class="imgContainer">
      <img
        id="indexImage"
        class="img-fluid"
        src="@/assets/img/contact.webp"
        alt="piano pizza"
      />
    </div>
  </template>
  
  <script>
  import bookingButton from "@/components/bookingButton.vue";
  import emailjs from "@emailjs/browser";
  
  export default {
    name: "contactsPage",
    components: {
      bookingButton,
    },
  
    data() {
      return {
        value: "Invia",
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
    font-family: ananias;
    color: white;
  }
  .styleBox {
    border: none;
    border-radius: 7px;
    height: 50px;
    padding-left: 10px;
  }
  .styleBox:focus {
    border: 3px solid rgba(66, 123, 248, 0.676);
    outline: none;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }
  
  .label {
    margin-right: 10px;
    color: white;
    font-weight: 100;
  }
  .text {
    background-color: #3b3838;
    color: white;
    margin: 2px;
    width: 90%;
  }
  .textarea {
    background-color: #3b3838;
    color: white;
    border: none;
    margin: 2px;
    height: 185px;
    width: 90%;
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
  .imgContainer {
    display: flex;
    justify-content: center;
    background-color: #282525;
  }
  #indexImage {
    height: auto;
    width: 90%;
    align-items: center;
  }
  @media only screen and (min-width: 330px) and (max-width: 426px) {
    .row {
      display: flex;
      flex-direction: column;
    }
  }
  </style>
  