<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">7) Aggiungi all'elenco</h5>
        <p class="card-text">
          Se confermi, la pizza da te creata, verra' inserita nell'elenco pizze.
          Dopodiche' bastera' andare nella sezione "prenota" ed inserire i dati
          richiesti, per poter effettuare l'ordine.
        </p>
      </div>
      <div class="btnContainer">
        <bookingButton
          class="btn"
          :value="confirm"
          @click.prevent="onUpdateIngredients"
        >
          {{ confirm }}</bookingButton
        >
      </div>
    </div>
  </template>
  
  <script>
  import bookingButton from "./bookingButton.vue";
  export default {
    name: "confirm-card",
    components: { bookingButton },
    props: {
      myPizza: {
        type: Array,
      },
    },
    data() {
      return {
        confirm: "conferma",
      };
    },
    methods: {
      onUpdateIngredients() {
        const resp = window.confirm(
          "Sei sicuro di aver inserito tutti gli ingredienti?"
        );
        if (resp && this.myPizza != "") {
          this.$router.push("/pizze");
          this.$store.commit("CREATE_PIZZA", {
            tasty: this.myPizza[0],
            ing: this.myPizza.slice([1], [-1]).join(", "),
            price: this.myPizza[this.myPizza.length - 1],
          });
        }
      },
     
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card-body {
    justify-content: flex-start;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 0.9rem;
  }
  .btn {
    height: 25px;
    width: 90%;
    font-size: 10px;
    margin-top: 0.8rem;
  }
  </style>
  