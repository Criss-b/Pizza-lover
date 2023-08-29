<template>
    <tr
      v-for="pizza of newPizze"
      :key="pizza.tasty"
      :tasty="pizza.tasty"
      :ing="pizza.ing"
      :price="pizza.price"
    >
      <td>
        <strong>{{ pizza.tasty }}</strong> ({{ pizza.ing }})
      </td>
      <td>{{ pizza.price }}€</td>
    </tr>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name: "new-pizza",
    computed: {
      ...mapState(["newPizze"]),
    },
  };
  </script>
  
  <style lang="scss" scoped>
  tr {
    margin: 20px 0px;
    border-bottom: 1px solid #ffffff2d;
  }
  
  strong {
    color: white;
  }
  td:last-child {
    text-align: end;
  }
  @media only screen and (max-width: 350px) {
    td {
      font-size: small;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1300px) {
    td {
      font-size: medium;
    }
  }
  @media only screen and (min-width: 1301px) {
    td {
      font-size: large;
    }
  }
  </style>
  