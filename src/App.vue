<template>
  <navbarSect />
  <RouterView />
  <img v-if="showArrow" id="arrow" src="@/assets/img/arrowWhite.png" alt="freccia" @click="toUpPage"/>
  <footerSect />
</template>

<script>
import footerSect from "@/components/footer.vue";
import navbarSect from "@/components/navbar.vue";

export default {
  components: {
    navbarSect,
    footerSect,
  },
  data() {
    return {
      showArrow: false,
      positionY: 0,
    }
  },
  methods: {
      handleScroll() {
        this.positionY = window.scrollY;
        
        if(this.positionY >= 700) {
          this.showArrow = true;
        } else {
          this.showArrow = false;
        }
      },
      toUpPage() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
template {
  background-color: #282525;
  width: 100%;
}
#arrow {
  display: block;
  position: fixed;
  width: 25px;
  height: 25px;
  right: 10px;
  bottom: 15px;
  z-index: 2;
}
#arrow:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
