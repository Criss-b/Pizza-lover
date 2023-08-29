<template>
    <div class="card" style="width: 18rem">
      <div class="imgContainer">
        <img src="@/assets/img/pancetta.png" />
        <img src="@/assets/img/patata.png" />
        <img src="@/assets/img/asparago.png" />
      </div>
      <div class="card-body">
        <h5 class="card-title">4) Scegli la farcitura</h5>
        <p class="card-text">Scrivi fino a 3 ingredienti: <br />(1.00 € cad)</p>
        <div class="inputTextContainer">
          <input
            class="styleBox"
            type="text"
            placeholder="es. prosciutto crudo.."
            :value="first.value"
            :index="first.id"
            :amount="first.amount"
            @change="onInputFirst"
          />
          <input
            class="styleBox"
            type="text"
            placeholder="es. patate al forno.."
            :value="second.value"
            :index="second.id"
            :amount="second.amount"
            @change="onInputSecond"
          />
          <input
            class="styleBox"
            type="text"
            id="third"
            placeholder="es. brie.."
            :value="third.value"
            :index="third.id"
            :amount="third.amount"
            @change="onInputThird"
          />
        </div>
  
        <div class="btnContainer">
          <bookingButton
            class="btn"
            :value="value"
            @click="
              $emit('updateInput', {
                allInput: {
                  firstInput: this.first,
                  secondInput: this.second,
                  thirdInput: this.third,
                },
              })
            "
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
        first: {
          value: "",
          id: 1,
          amount: 1.0,
        },
        second: {
          value: "",
          id: 2,
          amount: 1.0,
        },
        third: {
          value: "",
          id: 3,
          amount: 1.0,
        },
      };
    },
    methods: {
      onInputFirst(event) {
        const value = event.target.value;
        this.first.value = value;
      },
      onInputSecond(event) {
        const value = event.target.value;
        this.second.value = value;
      },
      onInputThird(event) {
        const value = event.target.value;
        this.third.value = value;
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
  