<template>
    <div class="containerMenu">
      <div class="menu">
        <RouterLink to="/">
          <button @click="clickTo({ name: 'index' })">HOME</button>
        </RouterLink>
  
        <RouterLink to="/pizze">
          <button @click="clickTo({ name: 'pizze' })">PIZZE</button>
        </RouterLink>
  
        <RouterLink to="/create">
          <button @click="clickTo({ name: 'create' })">
            CREA LA TUA PIZZA
          </button>
        </RouterLink>
  
        <RouterLink to="/book">
          <button @click="clickTo({ name: 'book' })">PRENOTA</button>
        </RouterLink>
        <RouterLink to="/contacts">
          <button @click="clickTo({ name: 'contacts' })">CONTATTI</button>
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script>
import { mapMutations } from 'vuex';

  export default {
    name: "menuPage",
    methods: {
      ...mapMutations(["SET_MENU_ACTIVE"]),
      clickTo(to) {
          this.SET_MENU_ACTIVE(false);
          this.$router.push(to);
      },
    }

  };
  </script>
  
  <style lang="scss" scoped>
  .containerMenu {
    background-color: #282525;
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  button {
    color: #fa5252;
    font-size: 20px;
    border: none;
    background-color: transparentize($color: #00000000, $amount: 0);
    margin-left: 5px;
    margin-right: 5px;
    padding: 20px;
    font-family: ananias;
  }
  </style>
  