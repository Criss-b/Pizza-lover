<template>
    <div class="card">
      <div class="imgContainer">
        <img src="@/assets/img/pancetta.png" />
        <img src="@/assets/img/patata.png" />
        <img src="@/assets/img/asparago.png" />
      </div>
      <div class="card-body">
        <h5 class="card-title">4) Scegli la farcitura</h5>
        <p class="card-text">Scrivi fino a 3 ingredienti: <br />(1.00 € cad)</p>
        <div class="inputTextContainer">
          <input v-for="(input, id) in inputs"
            :key="id"
            class="styleBox"
            type="text"
            :placeholder="input.placeholder"
            :value="input.value"
            :amount="input.amount"
            :name="input.name"
            @change="onInput(id, $event.target.value)"
          />
        </div>
        <div class="btnContainer">
          <bookingButton
            class="btn"
            :value="value"
            @click="saveInput"
          ></bookingButton>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import bookingButton from "@/components/bookingButton.vue";
  export default {
    name: "inputCard",
    components: { bookingButton },
    data() {
      return {
        value: "ok",
        valuesInput: [],
        inputs: [
          {
            value: "",
            name: "first",
            amount: 1.0,
            placeholder: "es. prosciutto crudo.."
          },
          {
            value: "",
            name: "second",
            amount: 1.0,
            placeholder: "es. patate al forno.."
          },
          {
            value: "",
            name: "third",
            amount: 1.0,
            placeholder: "es. brie.."
          },
        ]
        
      };
    },
    methods: {
      onInput(id, value) {
        this.inputs[id].value = value;
      },
      saveInput() {
        this.$emit("updateInput", {inputs: this.inputs});
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .imgContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .imgContainer img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  .inputTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
  .inputTextContainer input {
    background-color: #3b3838;
    color: white;
    border: none;
    margin: 2px;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
  }
  .btn {
    height: 25px;
    width: 90%;
    font-size: 10px;
    font-family: ananias;
    margin-top: 10px;
  }
  @media only screen and (max-width: 426px) {
    .styleBox {
      height: 30px;
      font-size: 14px;
    }
    .btn {
      margin-top: 20px;
    }
  }
  </style>
  