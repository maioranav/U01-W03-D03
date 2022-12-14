/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
  /*  const getTitle = document.getElementsByTagName("title"); */
  const getH1 = document.getElementsByTagName("h1");
  getTitle[0].innerText = newTitle;
  getH1[0].innerText = newTitle;
};

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const getH1 = document.getElementsByTagName("h1");
  getH1[0].classList.add("myHeading");
};

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

const changePcontent = function (nuovoPdiv) {
  const divPs = document.querySelectorAll("div p");
  for (let p = 0; p < divPs.length; p++) {
    divPs[p].innerText = nuovoPdiv;
  }
};

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  //   aHrefs = document.getElementsByTagName("a");
  aHrefs = document.querySelectorAll("a:not(footer a)");
  for (let a = 0; a < aHrefs.length; a++) {
    aHrefs[a].href = "https://www.google.com";
  }
};

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const nuovoElemento5 = document.createElement("li");
  nuovoElemento5.innerText = "Nuovo elemento aggiunto";
  const padre5 = document.getElementById("secondList");
  padre5.append(nuovoElemento5);
};

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

const addParagraph = function () {
  const nuovoElemento = document.createElement("p");
  nuovoElemento.innerText = "Nuovo paragrafo aggiunto";
  const padre = document.getElementsByTagName("div");
  padre[0].append(nuovoElemento);
};

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const firstList = document.getElementById("firstList");
  firstList.style.display = "none";
};

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const ulS = document.getElementsByTagName("ul");
  for (let ul = 0; ul < ulS.length; ul++) {
    ulS[ul].style.background = "green";
  }
};

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1 = document.getElementsByTagName("h1");
  h1[0].innerText = h1[0].innerText.slice(0, -1);
};

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footerLink = document.querySelector("footer a").href;
  alert(footerLink);
};

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const table = document.createElement("table");
  table.id = "nuovaTabella";
  const trHead = document.createElement("tr");
  const th = [];
  for (let i = 0; i < 4; i++) {
    th[i] = document.createElement("th");
  }
  th[0].innerText = "immagine";
  th[1].innerText = "nome prodotto";
  th[2].innerText = "quantità";
  th[3].innerText = "prezzo";
  th.forEach((th) => trHead.append(th));
  table.append(trHead);

  const oggetti = [
    {
      immagine: "foto1",
      nome: "t-shirt",
      quantità: "2",
      prezzo: "15,99",
    },
    {
      immagine: "foto2",
      nome: "polo",
      quantità: "6",
      prezzo: "39,99",
    },
    {
      immagine: "foto3",
      nome: "felpa",
      quantità: "1",
      prezzo: "27,99",
    },
    {
      immagine: "foto4",
      nome: "giacca",
      quantità: "4",
      prezzo: "51,40",
    },
    {
      immagine: "foto5",
      nome: "maglione",
      quantità: "8",
      prezzo: "8,79",
    },
  ];

  for (let i = 0; i < oggetti.length; i++) {
    const tRow = document.createElement("tr");
    const tdS = [];
    for (let p = 0; p < 4; p++) {
      tdS[p] = document.createElement("td");
    }
    tdS[0].innerText = oggetti[i].immagine;
    tdS[1].innerText = oggetti[i].nome;
    tdS[2].innerText = oggetti[i].quantità;
    tdS[3].innerText = oggetti[i].prezzo;
    for (c = 0; c < tdS.length; c++) {
      tRow.append(tdS[c]);
    }
    table.append(tRow);
  }
  document.getElementById("tableArea").append(table);
};

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (item, price, qty = "1", img = "ND") {
  const table = document.getElementById("nuovaTabella");
  const tRow = document.createElement("tr");
  const tdS = [];
  for (let p = 0; p < 4; p++) {
    tdS[p] = document.createElement("td");
  }
  tdS[0].innerText = img;
  tdS[1].innerText = item;
  tdS[2].innerText = qty;
  tdS[3].innerText = price;
  for (c = 0; c < tdS.length; c++) {
    tRow.append(tdS[c]);
  }
  table.append(tRow);
};

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const tRows = document.getElementsByTagName("tr");
  for (let i = 0; i < tRows.length; i++) {
    firstCell = tRows[i].firstElementChild;
    tRows[i].removeChild(firstCell);
  }
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const h2ToColor = document.getElementById("changeMyColor");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  h2ToColor.style = "color: #" + randomColor;
};

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {
  document.body.innerText = document.body.innerText.replaceAll("a", "");
  document.body.innerText = document.body.innerText.replaceAll("e", "");
  document.body.innerText = document.body.innerText.replaceAll("i", "");
  document.body.innerText = document.body.innerText.replaceAll("o", "");
  document.body.innerText = document.body.innerText.replaceAll("u", "");
  document.body.innerText = document.body.innerText.replaceAll("A", "");
  document.body.innerText = document.body.innerText.replaceAll("E", "");
  document.body.innerText = document.body.innerText.replaceAll("I", "");
  document.body.innerText = document.body.innerText.replaceAll("O", "");
  document.body.innerText = document.body.innerText.replaceAll("U", "");
};

/*
changeTitle("Nuovo Sito")
addClassToTitle()
changePcontent("testorandom")
changeUrls()
addToTheSecond()
addParagraph()
paintItGreen()
hideFirstUl()
generateTable()
addRow("gianni", "12,90")
hideAllImages()
changeColorWithRandom()
deleteVowels()
*/
