<template>
  <div class="card">
    <div class="imgContainer">
      <img src="@/assets/img/pancetta.webp" alt="pancetta"/>
      <img src="@/assets/img/patata.webp" alt="patata"/>
      <img src="@/assets/img/asparago.webp" alt="asparagi"/>
    </div>
    <div class="card-body">
      <h5 class="card-title">4) Scegli la farcitura</h5>
      <p class="card-text">Scrivi fino a 3 ingredienti: <br />(1.00 € cad)</p>
      <div class="inputTextContainer">
        <input v-for="(input, id) in inputs"
          :key="id"
          class="styleBox"
          type="text"
          list="ingredients"
          autocomplete="off"
          :placeholder="input.placeholder"
          :value="input.value"
          :amount="input.amount"
          :name="input.name"
          @change="onInput(id, $event.target.value)"
        />
        <datalist id="ingredients">
          <option value="Prosciutto cotto"></option>
          <option value="Prosciutto crudo"></option>
          <option value="Bresaola"></option>
          <option value="Provola"></option>
          <option value="Stracchino"></option>
          <option value="Zucchine"></option>
          <option value="Peperoni"></option>
        </datalist>
      </div>
      <div class="btnContainer">
        <bookingButton
          class="btn"
          :value="value"
          @click="saveInput"
        ></bookingButton>
      </div>
    </div>
  </div>
</template>

<script>
import bookingButton from "@/components/bookingButton.vue";
export default {
  name: "inputCard",
  components: { bookingButton },
  data() {
    return {
      value: "ok",
      valuesInput: [],
      inputs: [
        {
          value: "",
          name: "first",
          amount: 1.0,
          placeholder: "es. salsiccia.."
        },
        {
          value: "",
          name: "second",
          amount: 1.0,
          placeholder: "es. patate al forno.."
        },
        {
          value: "",
          name: "third",
          amount: 1.0,
          placeholder: "es. brie.."
        },
      ]
      
    };
  },
  methods: {
    onInput(id, value) {
      this.inputs[id].value = value;
    },
    saveInput() {
      this.$emit("updateInput", {inputs: this.inputs});
    },
  },
};
</script>

<style lang="scss" scoped>
.inputTextContainer {
  margin-top: 20px;
}
.inputTextContainer input {
  background-color: #3b3838;
  color: #fbbf1a;
}
.inputTextContainer input::placeholder {
  color: #fbbf1a74;
}
option {
  padding: 0px 5px 1px;
}
.btnContainer {
  display: flex;
  justify-content: center;
}
.btn {
  color: #fbbf1a;
  height: 25px;
  width: 90%;
  font-size: 10px;
  font-family: ananias;
  margin-top: 10px;
}
.btn:hover {
  color: #282525;
}
</style>
  