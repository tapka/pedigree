import axios from 'axios';

export const FETCH_ANIMAL = 'FETCH_ANIMAL';
export const FETCH_RANDOM_ANIMAL = 'FETCH_RANDOM_ANIMAL';
export const FETCH_MARRIAGE = 'FETCH_MARRIAGE';

const ROOT_URL = 'https://tapka.cz/api/pedigree/';

export function fetchAnimal(id) {
  const request = axios.get(`${ROOT_URL}animals/${id}`);

  return {
    type: FETCH_ANIMAL,
    payload: request
  }
}

export function fetchRandomAnimal() {
  const request = axios.get(`${ROOT_URL}animals/random`);

  return {
    type: FETCH_RANDOM_ANIMAL,
    payload: request
  }
}

export function fetchMarriage(id, mateId) {
  const request = axios.get(`${ROOT_URL}marriage/${id}-${mateId}`);

  return {
    type: FETCH_MARRIAGE,
    payload: request
  }
}
