const unsplashApi = {
  getSearchResults: async (searchTerm, page = 1) => {
    const url = `https://api.unsplash.com/search/photos?per_page=6&page=${page}&query=${searchTerm}`;
    return fetch(url, {
      mode: 'cors',
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }).then(res => res.json())
      .then(data => data.results)
      .catch(err => console.error(err.message));
  },
  appendToGallery: (results, element) => {
    results.forEach(result => {
      const image = document.createElement('img');
      image.className = 'gallery__img';
      const imgUrl = result.urls.small
        .replace('fit=max', 'fit=crop')
        .replace('crop=entropy', '');
      image.src = `${imgUrl}&h=500`;
      element.append(image);
    });
  },
};

export default unsplashApi;
