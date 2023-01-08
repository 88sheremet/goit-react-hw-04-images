import axios from 'axios';

export async function fetchImages(searchName, page) {
  const API_URL = 'https://pixabay.com/api/';
  const config = new URLSearchParams({
    key: '31754006-f43a1b08b2cea32f92fc299f3',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: searchName,
    per_page: 12,
  });

  const response = await axios.get(`${API_URL}?page=${page}&${config}`);
  return response.data;
}
