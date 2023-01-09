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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWxJ-niLzIKqw2HjBMM_hOPZnoI9xpXEJX1uQAQw&s",
    };
  },
});

app.mount("#root");
