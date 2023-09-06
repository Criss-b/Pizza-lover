<template>
    <div class="indexContainer">
      <div class="titleIndex">
        <h1>PIZZA LOVER</h1>
        <p>Esplora il menu e ordina la tua pizza, oppure creane una!<!--  🍕😍 --></p>
      </div>
      <div class="descContainer">
        <div class="description">
          <h3>PRENOTA</h3>
          <p>Prenotare la tua pizza e' semplice, vai nella sezione "PRENOTA"
            compila i campi richiesti e verra' creato in automatico un messaggio Whatsapp.
          </p>
        </div>
        <div class="description">
          <h3>CREA LA TUA PIZZA</h3>
          <p>Le pizze proposte non sono di tuo gradimento? 
            Entra nella sezione "CREA LA TUA PIZZA" e dai libero sfogo ai tuoi gusti!
          </p>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "indexPage",
  };
</script>
  
<style lang="scss" scoped>
  .indexContainer {
    background-color: #282525;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;
  }
  .titleIndex {
    background: url("@/assets/img/pizza.png") no-repeat center;
    color: white;
    text-shadow: 2px 2px #282525;
    margin: 100px 0;
    height: 300px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ananias;
    border-radius: 10px;
  }
  h1 {
    font-size: 6rem;
  }
  .descContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .description {
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ananias;
    background-color: #282525;
    margin: 60px 0;
    padding: 20px 10px;
    word-wrap: break-word;
    width: 40%;
    height: 50vh;
    margin: 0.9rem;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 2px rgba(245, 245, 245, 0.347);
  }
  .description h3 {
    color: #fa5252;
  }
  p {
    font-size: large;
    text-align: center;
    margin-top: 20px;
    
  }
@media only screen and (max-width: 364px) {
  h1{
    font-size: 2.4rem;
  }
  .descContainer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 90%;
    height: 40vh;
  }
}

@media only screen and (min-width: 365px) and (max-width: 426px) {
  h1{
    font-size: 2.8rem;
  }
  .descContainer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 90%;
    height: 40vh;
  }
}
@media only screen and (min-width: 426px) and (max-width: 789px) {
  h1 {
    font-size: 5.5rem;
  }
  .descContainer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 90%;
    height: 40vh;
  }
}
</style>
  