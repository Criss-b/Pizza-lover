<template>
    <div class="card">
      <img
        v-if="baseSelected"
        :src="require('@/assets/img/' + baseSelected.url)"
        class="card-img-top"
      />
      <img v-else src="@/assets/img/choose.png" class="card-img-top" />
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
            {{ base.value }}
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
          { id: 1, value: "pomodoro", url: "tomato.png", amount: 1.0 },
          { id: 2, value: "mozzarella", url: "mozzarella.png", amount: 1.0 },
          {
            id: 3,
            value: "pomodoro, mozzarella",
            url: "tomMozz.png",
            amount: 2.0,
          },
          { id: 4, value: "nessuna base", url: "base.png", amount: 0.0 },
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
    color: rgb(133, 133, 133);
  }
  .selectBase:hover {
    cursor: pointer;
  }
  .selectBase option {
    cursor: pointer;
    background-color: #282525;
    color: white;
  }
  .baseSelected {
    background-color: #3b3838;
    color: white;
  }
  @media only screen and (max-width: 426px) {
    .styleBox {
      height: 30px;
    }
  }
  </style>
  