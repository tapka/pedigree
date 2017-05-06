import axios from 'axios';

export const FETCH_ANIMAL = 'FETCH_ANIMAL';

const ROOL_URL = 'http://localhost:8081/api/pedigree/animals/';

export function fetchAnimal(id) {
  const request = axios.get(`${ROOL_URL}${id}`);

  return {
    type: FETCH_ANIMAL,
    payload: request
  }
}
