<template>
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <th>{{ th1 }}</th>
          <th>{{ th2 }}</th>
        </thead>
        <tbody>
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
        </tbody>
      </table>
</template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name: "new-pizza",
    props: {
      title: {
        type: String,
        default: "",
      },
      th1: {
        type: String,
        default: "",
      },
      th2: {
        type: String,
        default: "",
      },
    },
    computed: {
      ...mapState(["newPizze"]),
    },
  };
  </script>
  
<style lang="scss" scoped>
  h2 {
    color: white;
    padding: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
</style>
  