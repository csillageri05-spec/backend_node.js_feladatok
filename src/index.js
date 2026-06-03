//import Services from "./Services.js";
import { lista } from "./adatok.js";
import Kartyak from "./Kartyak.js";

//const szuloElem = document.querySelector(".kartyak");
//const url = "http://localhost:3000/termek";

const services = lista;
const kartyak = new Kartyak(services, szuloElem);

let adatok = [];

hozzaAd()

function hozzaAd() {
  for (let index = 0; index < services.length; index++) {
    adatok.push(kartyak);
  }
}

//services.getData(url, (data) => {
//    const kartyak = new Kartyak(data.results, szuloElem);

//  });
