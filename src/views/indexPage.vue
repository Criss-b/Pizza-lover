<template>
    <div class="indexContainer">
      <div class="titleIndex">
        <img src="@/assets/img/pizza.webp" alt="pizza mangiata">
        <h1>PIZZA LOVER</h1>
          <p>Esplora il menu e ordina la tua pizza, oppure creane una!</p>
      </div>
      <div class="descContainer">
        <div class="description">
          <h2>CREA LA TUA PIZZA</h2>
            <p>Le pizze proposte non sono di tuo gradimento? 
              Entra nella sezione "CREA LA TUA PIZZA" e dai libero sfogo ai tuoi gusti!
          </p>
        </div>
        <div class="description">
          <h2>PRENOTA</h2>
            <p>Prenotare la tua pizza e' semplice, vai nella sezione "PRENOTA"
              compila i campi richiesti e verra' creato in automatico un messaggio Whatsapp.
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
    background: rgb(40, 37, 37);
    background: radial-gradient(circle, rgba(40,37,37,0.7289040616246498) 0%, rgba(40,37,37,1) 50%);
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;
  }
  .titleIndex {
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    text-shadow: 2px 2px #282525;
    margin: 100px 0;
    height: 300px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  .titleIndex img {
    position: absolute;
    z-index: 0;
    width: 300px;
    height: 300px;
    transform: rotate(180deg);
  }
  .titleIndex h1, p {
    z-index: 1;
  }
  h1 {
    font-size: 6rem;
    word-break: keep-all;
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
  .description h2 {
    color: #fa5252;
  }
  p {
    font-size: large;
    text-align: center;
    margin-top: 20px;
    
  }
@media only screen and (max-width: 387px) {
  h1{
    font-size: 2.4rem;
  }
  .titleIndex img {
    width: 150px;
    height: 150px;
  }
}
@media only screen and (min-width: 387px) and (max-width: 583px) {
  h1{
    font-size: 3rem;
  }
  .titleIndex img {
    width: 200px;
    height: 200px;
  }
}
@media only screen and (min-width: 583px) and (max-width: 789px) {
  h1 {
    font-size: 4rem;
  }

}
@media screen and (max-width: 885px){
  .descContainer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 90%;
    height: 100%;
  }
}
</style>
  