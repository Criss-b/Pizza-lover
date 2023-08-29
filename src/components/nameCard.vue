<template>
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="@/assets/img/namePizza.png" />
      <div class="card-body">
        <h5 class="card-title">1) Scegli un nome per la tua pizza</h5>
        <p class="card-text">Niente nomi banali 😁</p>
        <div class="inputTextContainer">
          <input
            class="styleBox"
            type="text"
            placeholder="es. Gustosa"
            :value="namePizza.name"
            :id="namePizza.id"
            @change="input"
            required
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "nameCard",
    data() {
      return {
        namePizza: {
          name: "",
          id: 1,
        },
      };
    },
    methods: {
      input(event) {
        const name = event.target.value;
        this.namePizza.name = name;
        this.$emit("inputName", { namePizza: this.namePizza });
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
  .card-img-top {
    margin-left: 40%;
    margin-top: 10px;
    width: 50px;
    height: 50px;
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
  
  .inputTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 45px;
  }
  .inputTextContainer input {
    background-color: #3b3838;
    color: white;
    border: none;
    margin: 2px;
  }
  @media only screen and (max-width: 426px) {
    .styleBox {
      height: 30px;
    }
  }
  </style>
  