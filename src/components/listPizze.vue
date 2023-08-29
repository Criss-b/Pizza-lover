<template>
    <div>
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <tr>
            <th>{{ th1 }}</th>
            <th>{{ th2 }}</th>
          </tr>
        </thead>
        <tbody class="tableContent">
          <tr
            class="trPizze"
            :value="modelValue"
            v-for="(option, id) in options"
            :key="id"
          >
            <td>
              <strong>{{ option.tasty }}</strong> {{ option.ing }}
            </td>
            <td>
              {{ option.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "list-pizze",
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
      modelValue: {
        type: Array,
        required: true,
      },
      options: {
        type: [Object, Array],
        required: true,
      },
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
  table {
    color: white;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    justify-self: unset;
    margin-bottom: 25px;
  }
  thead {
    font-size: large;
  }
  .trPizze {
    margin: 20px 0px;
    border-bottom: 1px solid #ffffff2d;
  }
  th {
    color: white;
  }
  strong {
    color: white;
  }
  td:last-child {
    text-align: end;
  }
  @media only screen and (max-width: 350px) {
    thead {
      font-size: medium;
    }
    td {
      font-size: small;
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 1300px) {
    thead {
      font-size: large;
    }
    td {
      font-size: medium;
    }
  }
  @media only screen and (min-width: 1301px) {
    thead {
      font-size: x-large;
    }
    td {
      font-size: large;
    }
  }
  </style>
  