<template>
    <div id="bgImg">
      <form @submit.prevent="concatArrays">
        <div class="card-container">
          <name-card @inputName="inputName($event)"></name-card>
          <select-dough-card
            @doughSelected="updateDough($event)"
          ></select-dough-card>
          <select-base-card
            @base-selected="updateBase($event)"
          ></select-base-card>
          <input-card @updateInput="addInput($event)"></input-card>
          <checkbox-card @checkedSpices="addSpices"></checkbox-card>
          <ingredients-card :myPizza="allIngredients"></ingredients-card>
          <confirm-card :myPizza="allIngredients"></confirm-card>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import checkboxCard from "@/components/checkboxCard.vue";
  import confirmCard from "@/components/confirmCard.vue";
  import ingredientsCard from "@/components/ingredientsCard.vue";
  import inputCard from "@/components/inputCard.vue";
  import nameCard from "@/components/nameCard.vue";
  import selectBaseCard from "@/components/selectBaseCard.vue";
  import selectDoughCard from "@/components/selectDoughCard.vue";
  
  export default {
    name: "createPage",
    components: {
      selectBaseCard,
      selectDoughCard,
      inputCard,
      checkboxCard,
      nameCard,
      ingredientsCard,
      confirmCard,
    },
    data() {
      return {
        doughIngredient: [],
        baseIngredient: [],
        fstIngredient: [],
        spicesIngredient: [],
        namePizza: [],
        allIngredients: [],
        amountDough: [],
        amountBase: [],
        amountIngredient: [],
        totalAmount: [],
        sum: 0.0,
      };
    },
    methods: {
      updateDough({ selected }) {
        this.doughIngredient.push(selected.value);
        this.amountDough.push(selected.amount);
        if (this.doughIngredient.includes(selected.value)) {
          this.doughIngredient = this.doughIngredient.filter(
            (value) => value == selected.value
          );
        }
        if (this.amountDough.includes(selected.amount)) {
          this.amountDough = this.amountDough.filter(
            (amount) => amount == selected.amount
          );
        }
      },
      updateBase({ selected }) {
        this.baseIngredient.push(selected.value);
        this.amountBase.push(selected.amount);
        if (this.baseIngredient.includes(selected.value)) {
          this.baseIngredient = this.baseIngredient.filter(
            (value) => value == selected.value
          );
        }
        if (this.amountBase.includes(selected.amount)) {
          this.amountBase = this.amountBase.filter(
            (amount) => amount == selected.amount
          );
        }
      },
      addInput({inputs}) {
        this.fstIngredient.splice(0, this.fstIngredient.length);
        this.amountIngredient.splice(0, this.amountIngredient.length);

        inputs.forEach(input => {
          if (input.value != "") {
            this.fstIngredient.push(input.value);
            this.amountIngredient.push(input.amount);
          }
        });
      },
      addSpices(spice) {
        if (this.spicesIngredient.includes(spice.name)) {
          this.spicesIngredient = this.spicesIngredient.filter(
            (name) => name != spice.name
          );
        } else {
          this.spicesIngredient.push(spice.name);
        }
      },
      inputName({ namePizza }) {
        this.namePizza.splice(
          this.namePizza.findIndex((id) => id === namePizza.id),
          1
        );
        if (this.namePizza.includes(namePizza)) {
          this.namePizza = this.namePizza.filter((id) => id == namePizza.id);
        } else {
          this.namePizza.push(namePizza.name);
        }
      },
      concatArrays() {
        this.allIngredients = this.namePizza.concat(
          this.doughIngredient.concat(
            this.baseIngredient.concat(
              this.fstIngredient.concat(this.spicesIngredient)
            )
          )
        );
        this.totalAmount = this.amountDough.concat(
          this.amountBase.concat(this.amountIngredient)
        );
        this.sum = this.totalAmount.reduce((acc, item) => acc + item, 0);
        this.sum = this.sum.toFixed(2);
        this.allIngredients.push(this.sum);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  #bgImg {
    background-image: url("@/assets/img/createImage.webp");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  
  .card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0px 25px;
    padding: 25px 0px;
  }
  </style>
  