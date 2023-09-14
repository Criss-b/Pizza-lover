<template>
    <div class="card">
      <div class="imgContainer">
        <img
        v-if="doughSelected"
        :src="require('@/assets/img/' + doughSelected.url)"
        :alt="doughes.value"/>
      <img v-else src="@/assets/img/choose.webp"
      alt="clessidra"/>
      </div>
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
            {{ dough.value }} ({{ dough.amount.toFixed(2) }} €)
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
          { value: "impasto classico", url: "classica.webp", amount: 3.0 },
          { value: "impasto integrale", url: "integrale.webp", amount: 3.5 },
        ],
      };
    },
    methods: {
      onDoughSelected() {
        this.$emit("doughSelected", { selected: this.doughSelected });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .selectDough {
    background-color: #3b3838;
    color: #fbbf1a74;
  }
  .selectDough:hover {
    cursor: pointer;
  }
  .selectDough option {
    cursor: pointer;
    background-color: #3b3838;
    color: #fbbf1a;
  }
  .selectDough option:disabled {
    color: #fbbf1a74;
  }
  .doughSelected {
    background-color: #3b3838;
    color: #fbbf1a;
  }
  
  </style>
  