// console.log("js ok");
/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = Vue.createApp({
  data() {
    return {
      message: "ciao Mondo",
    };
  },
});

app.mount("#root");
