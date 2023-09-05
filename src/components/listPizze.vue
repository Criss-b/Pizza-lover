<template>
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <th>{{ th1 }}</th>
          <th>{{ th2 }}</th>
        </thead>
        <tbody>
          <tr
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
  
  
  </style>
  