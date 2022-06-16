const generateCard = (image, desc, photographer) => {
  const innerCard = document.createElement('div');
  innerCard.className = 'card-container';

  const imageElement = document.createElement('img');
  imageElement.className = 'card__image';
  imageElement.src = `${image}&h=500`;

  const description = document.createElement('p');
  description.className = 'card__text-container';
  description.innerHTML = `<h3>Photographer: ${photographer}</h3>
  <p>${desc || 'No description available'}</p>`;

  innerCard.append(imageElement, description);

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(innerCard);

  return card;
};

const unsplashApi = {
  getSearchResults: async (searchTerm, page = 1) => {
    const url = `https://api.unsplash.com/search/photos?per_page=9&page=${page}&query=${searchTerm}`;
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Set-Cookie': 'Same-Site=Secure',
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }).then(res => res.json())
      .then(data => data.results)
      .catch(err => console.error(err.message));
  },
  appendToGallery: (results, element) => {
    results.forEach(result => {
      const imgUrl = result.urls.small
        .replace('fit=max', 'fit=crop')
        .replace('crop=entropy', '');
      const card = generateCard(imgUrl, result.description, result.user.name);
      element.append(card);
    });
  },
};

export default unsplashApi;
