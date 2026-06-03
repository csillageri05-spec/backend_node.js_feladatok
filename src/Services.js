export default class Services {
  constructor() {}
  getData(url, callback) {
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>callback(data))
  }
}
