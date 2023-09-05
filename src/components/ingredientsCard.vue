<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6) La tua pizza</h5>
        <p class="card-text">
          {{ showName }} <br />
          {{ showIngredients }} <br />
          {{ showTotal }} <br />
        </p>
        <div class="btnContainer">
          <bookingButton 
            class="btnClass" 
            :value="confirm"
            required
            >{{ confirm }}</bookingButton>
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
 .card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 }
  .btnContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.9rem;
  }
   .btnClass {
    text-align: center;
    height: 25px;
    width: 90%;
    font-size: 10px;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 350px) {
   .btnClass {
      height: 25px;
      font-size: 0.9rem;
      margin-top: 3rem;
    }
  }
  </style>
  