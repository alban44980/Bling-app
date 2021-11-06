const BASE_URL = 'https://api.unsplash.com/';
const apiKey = process.env.NEXT_PUBLIC_MY_API_KEY;

const apiService = {};

apiService.getNewPictures = async () => {
  const res = await fetch(
    `${BASE_URL}/photos/random?count=20&orientation=landscape`,
    {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    }
  );
  const photos = await res.json();

  return photos;
};

apiService.search = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/photos?page=1&per_page=20&query=${query}&orientation=landscape`,
    {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    }
  );
  const photos = await res.json();

  return photos;
};

export default apiService;
