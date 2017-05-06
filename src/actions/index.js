import axios from 'axios';

export const FETCH_ANIMAL = 'FETCH_ANIMAL';
export const FETCH_ANIMAL_FIRST = 'FETCH_ANIMAL_FIRST';

const ROOL_URL = 'https://tapka.cz/api/pedigree/animals/';

export function fetchAnimal(id, first) {
  const request = axios.get(`${ROOL_URL}${id}`);

  return {
    type: first ? FETCH_ANIMAL_FIRST : FETCH_ANIMAL,
    payload: request
  }
}
