<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">7) Aggiungi all'elenco</h5>
        <p class="card-text">
          Se confermi, la pizza da te creata, verra' inserita nell'elenco pizze.
          Dopodiche' bastera' andare nella sezione "prenota" ed inserire i dati
          richiesti, per poter effettuare l'ordine.
          <br><br>
          * campi obbligaotri
        </p>
      </div>
      <div class="btnContainer">
        <bookingButton
          class="btn"
          :value="confirm"
          @click="confirmIngredients"
        ></bookingButton
        >
      </div>
      <div v-show="divFirstOpen" class="confirmIng">
        <p>Sei sicuro di aver inserito tutti gli ingredienti?</p>
        <bookingButton 
        class="btn" 
        :value="confirm" 
        @click="onUpdateIngredients"
        ></bookingButton>
        <bookingButton 
        class="btn" 
        :value="cancel" 
        @click="cancelIngredients"
        ></bookingButton>
      </div>
      <div v-show="divOtherOpen" class="confirmIng">
        <p>Vuoi creare un'altra pizza o procedere con la prenotazione?</p>
        <bookingButton 
        class="btn" 
        :value="createPizza" 
        @click="createOtherPizza"
        ></bookingButton>
        <bookingButton 
        class="btn" 
        :value="book" 
        @click="bookingPizza"
        ></bookingButton>
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
        cancel: "annulla",
        createPizza: "crea pizza",
        book: "prenota",
        divFirstOpen: false,
        divOtherOpen: false,
      };
    },
    methods: {
      confirmIngredients() {
        if (this.myPizza != "") {
          this.divFirstOpen = true;          
        }
      },
      onUpdateIngredients() {
        this.$store.commit("CREATE_PIZZA", {
          tasty: this.myPizza[0],
          ing: this.myPizza.slice([1], [-1]).join(", "),
          price: this.myPizza[this.myPizza.length - 1],
        });
        this.divFirstOpen = false;
        this.divOtherOpen = true;
      },
      cancelIngredients() {
        this.divFirstOpen = false;
      },
      createOtherPizza() {
        this.divOtherOpen = false;
        window.location.reload();
      },
      bookingPizza() {
        this.$router.push({ name: 'book' });
      }  
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
    color: #fa5252;
    height: 25px;
    width: 90%;
    font-size: 10px;
    margin-top: 0.8rem;
  }
  .btn:hover {
    color: #282828;
  }
  .confirmIng {
    color: white;
    font-family: ananias;
    text-align: center;
    position: fixed;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    width: 30vw;
    height: auto;
    padding: 20px 10px;
    background-color: #282828;
    right: 0;
    left: 0;
    top: 200px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 2px rgba(245, 245, 245, 0.347);
  }
  @media only screen and (max-width: 767px) {
    .confirmIng {
      font-size: 0.8em;
      width: 50vw;
    }
  }
  </style>
  