<template>
    <div class="pizzeContainer">
      <div class="tableContent">
        <list-pizze
          title="PIZZE CLASSICHE"
          th1="GUSTO"
          th2="PREZZO"
          v-model="listPizze"
          :options="listPizze"
        ></list-pizze>
        <new-pizza
          title="LE VOSTRE CREAZIONI"
          th1="GUSTO"
          th2="PREZZO"
          ></new-pizza>
      </div>
    </div>
  </template>
  
  <script>
  import listPizze from "@/components/listPizze.vue";
  import newPizza from "@/components/newPizza.vue";
  
  export default {
    name: "pizzePage",
    components: {
      listPizze,
      newPizza,
    },
    data() {
      return {
        listPizze: [
          {
            tasty: "margherita",
            ing: "(impasto classico, pomodoro, mozzarella)",
            price: "5.00€",
          },
          {
            tasty: "Marinara",
            ing: " (impasto classico, pomodoro, aglio e origano)",
            price: "5.00€",
          },
          {
            tasty: "Diavola",
            ing: "(impasto classico, pomodoro, mozzarella e salame piccante)",
            price: "6.00€",
          },
          {
            tasty: "Quattro formaggi",
            ing: "(impasto classico, mozzarella, parmigiano, gorgonzola e provola)",
            price: "7.00€",
          },
          {
            tasty: "Quattro stagioni",
            ing: " (impasto classico, pomodoro, mozzarella, carciofi, prosciutto cotto, funghi e olive)",
            price: "7.00€",
          },
          {
            tasty: "Capricciosa",
            ing: "(impasto classico, pomodoro, mozzarella, carciofi, prosciutto cotto, funghi e olive)",
            price: "6.00€",
          },
          {
            tasty: "Romana",
            ing: "(impasto classico, pomodoro, mozzarella, acciughe e origano)",
            price: "6.50€",
          },
          {
            tasty: "Funghi",
            ing: "(impasto classico, pomodoro, mozzarella e funghi trifolati)",
            price: "6.50€",
          },
          {
            tasty: "Salsiccia",
            ing: "(impasto classico, pomodoro, mozzarella e salsiccia)",
            price: "6.00€",
          },
          {
            tasty: "Salsiccia e friarielli",
            ing: "(impasto classico, pomodoro, mozzarella e salsiccia e friarielli)",
            price: "6.50€",
          },
          {
            tasty: "Salsiccia e patate",
            ing: "(impasto classico, mozzarella, salsiccia e patate)",
            price: "6.50€",
          },
          {
            tasty: "Frutti di mare",
            ing: "(impasto classico, pomodoro, mozzarella e frutti di mare)",
            price: "7.50€",
          },
          {
            tasty: "Mari e monti",
            ing: "(impasto classico, pomodoro, mozzarella, prosciutto cotto e funghi e con misto di mare)",
            price: "8.00€",
          },
          {
            tasty: "Vegetariana",
            ing: "(impasto classico, pomodoro, mozzarella, zucchine, peperoni e melanzane grigliate)",
            price: "6.50€",
          },
          {
            tasty: "Valtellinese",
            ing: "(impasto classico, pomodoro, mozzarella, bresaola, rucola e grana)",
            price: "7.00€",
          },
          {
            tasty: "Al salmone",
            ing: "(impasto classico, pomodoro, mozzarella, panna e salmone)",
            price: "7.00€",
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .pizzeContainer {
    background-color: #282525;
    min-height: 100vh;
    padding-bottom: 90px;
  }
  .tableContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  </style>
  