<template>
    <div class="card">
      <div class="imgContainer">
        <img src="@/assets/img/namePizza.webp" alt="fetta di pizza sorridente"/>
      </div>
      <div class="card-body">
        <h5 class="card-title">1) Scegli un nome per la tua pizza *</h5>
        <p class="card-text">Niente nomi banali 😁</p>
        <div class="inputTextContainer">
          <input
            autocomplete="off"
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
  margin-top: 45px;
}
.inputTextContainer input {
  background-color: #3b3838;
  color: #fa5252;
}
.inputTextContainer input::placeholder {
  color: #fa525274;
}
</style>
  