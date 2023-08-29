<template>
    <div class="footerContainer">
      <nav class="nav">
        <ul class="ul">
          <li v-for="item in icons" :key="item">
            <a :href="item.href" target="_blank">
              <img :src="item.img" :alt="item.alt" />
            </a>
          </li>
        </ul>
      </nav>
      <p id="credits">Powered by CB</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "footerSect",
    data() {
      return {
        icons: [
          {
            href: "mailto:mail@mail.com",
            img: require("@/assets/img/mail96.svg"),
            alt: "email",
          },
          {
            href: "https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo",
            img: require("@/assets/img/linkedin.png"),
            alt: "linkedin",
          },
          {
            href: "https://www.instagram.com/",
            img: require("@/assets/img/instagram.png"),
            alt: "instagram",
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>  
  .ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .ul li {
    list-style: none;
    padding: 20px;
  }
  img {
    width: 45px;
    height: 45px;
  }
  #credits {
    display: flex;
    justify-content: space-around;
    color: #fa5252;
    font-size: 10px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 350px) {
    .ul {
      padding: 0;
    }
    img {
      width: 30px;
      height: 30px;
    }
    #credits {
      font-size: 5px;
      margin-left: 0;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1300px) {
    .ul {
      padding: 0px;
    }
    img {
      width: 40px;
      height: 40px;
    }
    #credits {
      font-size: 10px;
      margin-left: 0px;
    }
  }
  
  @media only screen and (min-width: 1301px) {
    .ul {
      padding: 0px;
    }
    img {
      width: 60px;
      height: 60px;
    }
    #credits {
      font-size: 15px;
      margin-left: 0px;
    }
  }
  </style>
  