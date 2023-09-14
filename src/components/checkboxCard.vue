<template>
    <div class="card">
      <div class="imgContainer">
        <img src="@/assets/img/basil.webp" alt="basilico"/>
        <img src="@/assets/img/oregano.webp" alt="origano"/>
        <img src="@/assets/img/oil.webp" alt="olio d'oliva"/>
        <img src="@/assets/img/spicy.webp" alt="olio piccante"/>
      </div>
      <div class="card-body">
        <h5 class="card-title">5) Scegli le spezie</h5>
        <label class="labelCheckbox" v-for="item in spices" :key="item.id">
          <input
            :name="item.name"
            type="checkbox"
            class="checkbox"
            :checked="item.checked"
            @change="checkedSpices(item)"
          />
          <span class="checkmark"></span>
          {{ item.name }}
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "checkboxCard",
    data() {
      return {
        spices: [
          {
            name: "basilico",
          },
          {
            name: "origano",
          },
          {
            name: "olio d'oliva",
          },
          {
            name: "olio piccante",
          },
        ],
      };
    },
    methods: {
      checkedSpices(spice) {
        this.$emit("checkedSpices", spice);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .labelCheckbox {
    color: #282525;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .labelCheckbox input {
    opacity: 0;
    margin-left: 1.6rem;
  }
  
  .checkmark {
    position: absolute;
    width: 30px;
    height: 30px;
    margin-top: 0.3rem;
    left: 15px;
    background-color: #3b3838;
    border-radius: 5px;
  }
  .checkmark:hover {
    cursor: pointer;
  }
  
  .labelCheckbox input:checked ~ .checkmark {
    background-color: #282525;
    border: 2px solid #eee;
  }
  
  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }
  .labelCheckbox input:checked ~ .checkmark:after {
    display: block;
  }
  .labelCheckbox .checkmark:after {
    left: 7px;
    top: 0;
    width: 10px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  @media only screen and (max-width: 350px) {
    .labelCheckbox {
      font-size: 13px;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1258px) {
    .labelCheckbox {
      font-size: 15px;
    }
  }
  </style>
  