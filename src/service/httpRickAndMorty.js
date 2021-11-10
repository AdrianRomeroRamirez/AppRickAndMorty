const baseURL = "https://rickandmortyapi.com/api/";
const firstCharacterURL = `${baseURL}/character`;

export function getCharacterInfo() {
  return fetch(firstCharacterURL).then((resp) => resp.json());
}
