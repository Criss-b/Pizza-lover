<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img
          @click="$router.push({ name: 'index' })"
          src="@/assets/img/icons8-pizza-96.png"
          alt="logo"
          id="logo"
        />
  
        <RouterLink to="/menu">
          <a
            @click="'clicked', $router.push({ name: 'menu' })"
            role="button"
            class="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" style="color: #fa5252"></span>
            <span aria-hidden="true" style="color: #fa5252"></span>
            <span aria-hidden="true" style="color: #fa5252"></span>
          </a>
        </RouterLink>
      </div>
  
      <div class="navbar-menu" id="navMenu">
        <div class="navbar-end">
          <div class="navbar-item">
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
              <button @click="$router.push({ name: 'contacts' })">
                CONTATTI
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "navbarSect",
  };
  </script>
  
  <style lang="scss" scoped>
  .navbar {
    background-color: #282525;
  }
  
  .navbar-brand {
    margin-left: 10px;
    padding: 0;
  }
  #logo {
    width: 64px;
    height: 64px;
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
  
  button:last-child {
    margin-right: 25px;
  }
  button:hover {
    background-color: #4e49498c;
    border-radius: 10px;
  }
  
  #logo:hover {
    transform: rotate(335deg);
  }
  
  @media only screen and (max-width: 350px) {
    #logo {
      height: 48px;
      width: 48px;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1300px) {
    #logo {
      height: 64px;
      width: 64px;
    }
  }
  @media only screen and (min-width: 1301px) {
    #logo {
      height: 96px;
      width: 96px;
    }
    button {
      font-size: 20px;
      font-weight: 900;
      margin-left: 15px;
      margin-right: 15px;
      padding: 30px;
    }
  }
  </style>
  