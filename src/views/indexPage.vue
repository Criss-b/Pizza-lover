<template>
    <div class="indexContainer">
        <p id="p1">ALL YOU</p>
        <p id="p2">NEED</p>
        <p id="p3">IS PIZZA</p>
    </div>
    <div class="descrContainer">
        <p>Esplora il menu e ordina la tua pizza, oppure creane una! 🍕😍</p>
        <p>(Web app fittizia)</p>
      </div>
</template>
  
<script>
  export default {
    name: "indexPage",
  };
</script>
  
<style lang="scss" scoped>
  .indexContainer {
   background-image: url("@/assets/img/indexOriz.webp");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   height: 150vh;
   color: #282525;
   text-shadow: 2px 2px 2px rgb(251, 191, 26);
   font-family: ananias;
   font-size: 120px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
  }

  #p1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 30px;
  }
  #p2 {
    display: flex;
    flex-direction: row;
    justify-content: center;    
    padding: 30px;
  }
  #p3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;    
    padding: 30px;
  }
  .descrContainer {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-end;
    font-family: ananias;
    background-color: #282525;
  }
    
  .descrContainer p {
    font-size: large;
    text-align: center;
    margin-top: 40px;
    width: 80%;
  }
  @media only screen and (max-width: 320px) {
    .indexContainer {
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  }
  @media only screen and (min-width: 321px) and (max-width: 425px) {
    .indexContainer {
      background-position: center;
      font-size: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
  }
  }
 @media only screen and (min-width: 426px) and (max-width: 768px) {
  .indexContainer {
    font-size: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .descrContainer h1 {
    text-align: center;
    font-size: medium;
  }
  .descrContainer p {
    font-size: medium;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .indexContainer {
    font-size: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
  