const baseURL = "https://rickandmortyapi.com/api/";
const charactersURL = `${baseURL}/character`;

export function getCharacterInfo(url = charactersURL) {
  return fetch(url).then((resp) => resp.json());
}

export function getCharacter(id) {
  return fetch(charactersURL + id).then((resp) => resp.json());
}
