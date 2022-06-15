const gallery = document.createElement('section');
gallery.className = 'gallery';

for (let i = 0; i < 6; i++) {
  const image = document.createElement('img');
  image.className = 'gallery__img';
  image.src = `https://picsum.photos/500/300?random=${i + 1}`;
  gallery.appendChild(image);
}

export default gallery;
