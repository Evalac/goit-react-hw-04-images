const KEY = '45910491-7a91b10438fcd735159f6d92e';
const BASE_URL = `https://pixabay.com/api`;
async function fetchImg(queryName, page) {
  try {
    const responce = await fetch(
      `${BASE_URL}/?q=${queryName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const imgData = await responce.json();
    return imgData;
  } catch (error) {
    throw new Error(`Зображення з таким імʼям ${queryName} не знайдено`);
  }
}

export { fetchImg };
