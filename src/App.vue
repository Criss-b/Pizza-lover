<template>
  <navbarSect />
  <RouterView />
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
};
</script>

<style lang="scss" scoped>
template {
  background-color: #282525;
  width: 100%;
}
</style>
