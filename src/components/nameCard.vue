<template>
    <div class="card">
      <img class="card-img-top" src="@/assets/img/namePizza.png" />
      <div class="card-body">
        <h5 class="card-title">1) Scegli un nome per la tua pizza *</h5>
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
  