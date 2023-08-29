<template>
    <div class="containerMenu">
      <div class="menu">
        <RouterLink to="/">
          <button @click="$router.push({ name: 'index' })">HOME</button>
        </RouterLink>
  
        <RouterLink to="/pizze">
          <button @click="$router.push({ name: 'pizze' })">PIZZE</button>
        </RouterLink>
  
        <RouterLink to="/create">
          <button @click="$router.push({ name: 'create' })">
            CREA LA TUA PIZZA
          </button>
        </RouterLink>
  
        <RouterLink to="/book">
          <button @click="$router.push({ name: 'book' })">PRENOTA</button>
        </RouterLink>
        <RouterLink to="/contacts">
          <button @click="$router.push({ name: 'contacts' })">CONTATTI</button>
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "menuPage",
  };
  </script>
  
  <style lang="scss" scoped>
  .containerMenu {
    background-color: #282525;
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    font-family: ananias;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  button {
    color: #fa5252;
    font-weight: 500;
    border: none;
    background-color: transparentize($color: #00000000, $amount: 0);
    margin-left: 5px;
    margin-right: 5px;
    padding: 20px;
  }
  </style>
  