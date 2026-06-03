import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  constructor(lista = [], szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.kartyak = document.querySelector(".kartyak")
    this.ListabaTesz()
  }
  ListabaTesz(){
    this.#lista.forEach((obj)=>{
        new Kartya(obj, this.szuloElem)
    })
  }

}
