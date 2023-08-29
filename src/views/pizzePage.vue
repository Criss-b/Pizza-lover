<template>
    <div class="pizzeContainer">
      <span class="info">
        nella sezione "prenota" compila i campi per creare l'ordine
      </span>
      <list-pizze
        title="PIZZE CLASSICHE"
        th1="GUSTO"
        th2="PREZZO"
        v-model="listPizze"
        :options="listPizze"
      ></list-pizze>
    </div>
    <div class="pizzeContainer">
      <h2>LE VOSTRE CREAZIONI</h2>
      <table>
        <thead>
          <tr>
            <th>GUSTO</th>
            <th>PREZZO</th>
          </tr>
        </thead>
        <tbody class="tableContent">
          <new-pizza></new-pizza>
        </tbody>
      </table>
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
    padding-bottom: 40px;
  }
  .info {
    position: absolute;
    text-align: center;
    right: 5%;
    top: 150px;
    width: 250px;
    height: auto;
    color: white;
    background-color: #282525;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 2px rgba(245, 245, 245, 0.347);
  }
  h2 {
    color: white;
    padding: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
  table {
    color: white;
    margin-left: 5%;
    width: 90%;
    justify-self: unset;
    margin-bottom: 25px;
  }
  thead {
    font-size: x-large;
  }
  th {
    color: white;
  }
  th:last-child {
    text-align: end;
  }
  @media only screen and (max-width: 350px) {
    thead {
      font-size: medium;
    }
    .info {
      font-size: 10px;
      top: 190px;
      width: 180px;
      height: auto;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1300px) {
    thead {
      font-size: large;
    }
    .info {
      text-align: center;
      font-size: 10px;
      top: 190px;
      width: 175px;
      height: auto;
    }
  }
  @media only screen and (min-width: 1301px) {
    thead {
      font-size: x-large;
    }
  }
  </style>
  