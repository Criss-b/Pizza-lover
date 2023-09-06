<template>
    <div class="card">
      <img
        v-if="doughSelected"
        :src="require('@/assets/img/' + doughSelected.url)"
        class="card-img-top"
      />
      <img v-else src="@/assets/img/choose.png" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">2) Scegli l'impasto *</h5>
        <p class="card-text">
          -Impasto classico: farina bianca 00 (3.00 €)<br />
          -integrale: farina di farro integrale (3.50 €)
        </p>
        <select
          class="selectDough styleBox"
          name="dough"
          :class="{ doughSelected: doughSelected }"
          v-model="doughSelected"
          @change="onDoughSelected"
          required
          style="margin-top: 56px; width: 100%"
        >
          <option disabled value="">Seleziona...</option>
          <option
            v-for="dough in doughes"
            :key="dough"
            :value="dough"
            :selected="doughSelected"
          >
            {{ dough.value }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "select-dough-card",
    data() {
      return {
        doughSelected: "",
        doughes: [
          { value: "impasto classico", url: "classica.png", amount: 3.0 },
          { value: "impasto integrale", url: "integrale.png", amount: 3.5 },
        ],
      };
    },
    emits: ["doughSelected"],
    methods: {
      onDoughSelected() {
        this.$emit("doughSelected", { selected: this.doughSelected });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card {
    margin: 7px;
    background-color: #282525;
    color: white;
    box-shadow: 2px 2px 2px rgba(245, 245, 245, 0.347);
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .styleBox {
    border: none;
    border-radius: 7px;
    height: 50px;
    padding-left: 10px;
  }
  .styleBox:focus {
    border: 3px solid rgba(66, 123, 248, 0.676);
    outline: none;
  }
  
  .card-img-top {
    margin-left: 40%;
    margin-top: 10px;
    width: 50px;
    height: 50px;
  }
  .card-text {
    font-size: 13px;
  }
  
  .selectDough {
    background-color: #3b3838;
    color: rgb(133, 133, 133);
  }
  
  .selectDough option {
    cursor: pointer;
    background-color: #282525;
    color: white;
  }
  .doughSelected {
    background-color: #3b3838;
    color: white;
  }
  @media only screen and (max-width: 426px) {
    .styleBox {
      height: 30px;
    }
  }
  </style>
  