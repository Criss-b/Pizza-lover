<template>
  <div class="menuContainer">
    <div class="logoContainer">
      <RouterLink to="/">
          <img 
              id="logo" 
              :src="imgDefault" 
              alt="logo a forma di pizza"
              @click="clickTo({name: 'index'})"
              >
      </RouterLink>
    </div>
    <div class="btnContainer">
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
        <button @click="clickTo({ name: 'contacts' })">
          CONTATTI
        </button>
      </RouterLink>
    </div>
  </div>
  <div  
      class="menuBurger"
      @click="toggleMenu"
      :class="{ 'is-active': menuActive }"
      @menuOff="menuOff($event)">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </template>
  
  <script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: "navbarSect",
    data() {
        return {
          imgDefault: require("@/assets/img/icons8-pizza-96.png"),
        };
      },
      computed: {
        ...mapState(["menuActive"]),
      },
      methods: {
        ...mapMutations(["SET_MENU_ACTIVE"]),
        toggleMenu() {
          this.SET_MENU_ACTIVE(!this.menuActive);
          if(this.menuActive) {
            this.$router.push({ name: "menu"});
          } else {
            this.$router.go(-1);
          }
          
        },
        clickTo(to) {
          this.$router.push(to);
        },
    }
  };
  </script>
  
  <style lang="scss" scoped>
    .menuContainer {
      height: 80px;
      background-color: #282525;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
  }
  .logoContainer {
    padding: 0;
    background-color: #282525;
  }

  .btnContainer {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      align-items: center;
  }
  #logo {
    position: absolute;
    left: 10px;
    top: 10px;
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
  .menuBurger {
    position: absolute;
    right: 20px;
    top: 20px;
    display: inline-block;
    cursor: pointer;
    z-index: 4;
}
.menuBurger span {
    display: block;
    background-color: #fa5252;
    width: 30px;
    height: 3px;
    margin: 5px 0;
}

.menuBurger.is-active span:nth-child(2) {
    opacity: 0;
}
.menuBurger.is-active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.menuBurger.is-active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
  @media only screen and (max-width: 350px) {
    #logo {
      height: 48px;
      width: 48px;
    }
  }
  @media only screen and (max-width: 964px) {
    .btnContainer {
        display: none;
    }
  }
  @media only screen and (min-width: 965px) {
    .menuBurger {
        display: none;
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
  