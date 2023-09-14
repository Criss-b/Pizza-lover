<template>
    <div class="card">
      <div class="imgContainer">
        <img
        v-if="baseSelected"
        :src="require('@/assets/img/' + baseSelected.url)"
        :alt="bases.value"
      />
      <img v-else src="@/assets/img/choose.webp"
      alt="clessidra"/>
      </div>
      <div class="card-body">
        <h5 class="card-title">3) Scegli la base *</h5>
        <p class="card-text">
          -Rossa: passata di pomodro (1.00 €)<br />
          -Bianca: mozzarella (1.00 €)<br />
          -Basic: pomodoro e mozzarella (2.00 €)<br />
          -Nessuna base (solo impasto)
        </p>
        <select
          class="selectBase styleBox"
          :class="{ baseSelected: baseSelected }"
          name="base"
          @change="onBaseSelected"
          v-model="baseSelected"
          required
          style="margin-top: 35px; width: 100%"
        >
          <option disabled value="">Seleziona..</option>
          <option v-for="base in bases" :key="base.id" :value="base">
            {{ base.value }} ({{ base.amount.toFixed(2) }} €)
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "select-base-card",
    data() {
      return {
        baseSelected: "",
        bases: [
          { id: 1, value: "pomodoro", url: "tomato.webp", amount: 1.0 },
          { id: 2, value: "mozzarella", url: "mozzarella.webp", amount: 1.0 },
          {
            id: 3,
            value: "pomodoro, mozzarella",
            url: "tomMozz.webp",
            amount: 2.0,
          },
          { id: 4, value: "nessuna base", url: "base.webp", amount: 0.0 },
        ],
      };
    },
    emits: ["baseSelected"],
    methods: {
      onBaseSelected() {
        this.$emit("baseSelected", { selected: this.baseSelected });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card-text {
    font-size: 13px;
  }
  .selectBase {
    background-color: #3b3838;
    color: #fa525274;
  }
  .selectBase:hover {
    cursor: pointer;
  }
  .selectBase option {
    cursor: pointer;
    background-color: #3b3838;
    color: #fa5252;
  }
  .selectBase option:disabled {
    color: #fa525274;
  }
  .baseSelected {
    background-color: #3b3838;
    color: #fa5252;
  }

  </style>
  