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
            img: require("@/assets/img/mail.webp"),
            alt: "email",
          },
          {
            href: "https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo",
            img: require("@/assets/img/linkedin.webp"),
            alt: "linkedin",
          },
          {
            href: "https://www.instagram.com/",
            img: require("@/assets/img/instagram.webp"),
            alt: "instagram",
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .footerContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    background-color: #282525;
    height: 110px;
    width: 100%;
    padding-bottom: 10px;
  }
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
    font-size: 0.5rem;
  }
  @media only screen and (max-width: 350px) {
    .ul {
      padding: 0;
    }
    img {
      width: 30px;
      height: 30px;
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
  }
  
  @media only screen and (min-width: 1301px) {
    .ul {
      padding: 0px;
    }
    img {
      width: 60px;
      height: 60px;
    }
  }
  </style>
  