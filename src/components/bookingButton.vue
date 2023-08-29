<template>
    <button class="btnClass">
      {{ value }}
    </button>
  </template>
  
  <script>
  export default {
    name: "booking-button",
    props: ["value"],
  };
  </script>
  
  <style lang="scss" scoped>
  .btnClass {
    font-family: ananias;
    color: white;
    background-color: #282525;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 2px rgba(245, 245, 245, 0.347);
  }
  .btnClass:hover {
    background-color: rgba(245, 245, 245, 0.347);
  }
  </style>
  