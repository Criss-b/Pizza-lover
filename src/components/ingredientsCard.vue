<template>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">6) La tua pizza</h5>
        <p class="card-text" v-if="myPizza">
          {{ showName }} <br />
          {{ showIngredients }} <br />
          {{ showTotal }} <br />
        </p>
        <div class="btnContainer">
          <booking-button class="btnClass" :value="confirm" required
            >{{ confirm }}
          </booking-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import bookingButton from "@/components/bookingButton.vue";
  export default {
    name: "ingredients-card",
    components: {
      bookingButton,
    },
    data() {
      return {
        confirm: "Visualizza pizza",
      };
    },
    props: {
      myPizza: {
        type: [Array],
      },
    },
  
    computed: {
      showName() {
        const name = this.myPizza[0];
        if (name == undefined) {
          return `nome: `;
        } else {
          return `nome: ${name}`;
        }
      },
      showIngredients() {
        const ingredientsArray = this.myPizza.slice([1], [-1]);
  
        const ingredientsString = ingredientsArray.join(", ");
  
        if (ingredientsString == "") {
          return `ingredienti: `;
        } else {
          return `ingredienti: ${ingredientsString}`;
        }
      },
      showTotal() {
        const price = this.myPizza[this.myPizza.length - 1];
  
        if (price == undefined) {
          return `prezzo: `;
        } else {
          return `prezzo: ${price}€`;
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card {
    margin: 7px;
    background-color: #282525;
    color: white;
    box-shadow: 2px 2px 2px rgba(245, 245, 245, 0.347);
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-text {
    font-size: 13px;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  .btnClass {
    text-align: center;
    height: 35px;
    width: 90%;
    font-size: 10px;
    font-family: ananias;
    color: white;
    background-color: #282525;
    margin-top: 100px;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(245, 245, 245, 0.347);
  }
  .btnClass:hover {
    background-color: #3b3838;
  }
  @media only screen and (max-width: 350px) {
    .btnClass {
      height: 25px;
      font-size: 15px;
      margin-top: 20px;
    }
  }
  </style>
  