export default class Kartya {
  #obj = {};
  constructor(obj = {}, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.kartyaMegjelenit();
    this.termekElem = this.szuloElem.lastChild;
    this.termekElem.addEventListener("click", () => {
      const kattintas = new CustomEvent("kattintas", {
        detail: this.#obj,
      });
      window.dispatchEvent(kattintas);
    });
  }
  kartyaMegjelenit() {
    let kod = `<div class="termekKartya">
    <p>Név: ${this.#obj.nev}</p>
    <p>Ár: ${this.#obj.ar}</p>
    <p>Leírás: ${this.#obj.leiras}</p>
    <p>Kedvezmény: ${this.#obj.kedvezmeny}</p>
    </div>`;
  }
  
}
