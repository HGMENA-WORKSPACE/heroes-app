export class LoadServices {
  config = {
    method: "GET",
    headers: {
      Accept:
        "application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: null,
  };
  urlApi = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";
  loadHeroes() {
    return fetch(`${this.urlApi}/all.json`)
      .then((res) => res.json())
      .catch(() => console.warn);
  }
  loadHeroe(id) {
    return fetch(`${this.urlApi}/id/${id}.json`)
      .then((res) => res.json())
      .catch(() => console.warn);
  }
}
