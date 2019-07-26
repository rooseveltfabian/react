import React from 'react';
import './imagenCompo.css';

function ImagenF() {
    let imagen = React.createElement('img',{
        src: 'https://files.rcnradio.com/public/styles/image_834x569/public/2019-05/1526420779-dragon-ball.jpg?itok=nzMfGJjZ',
        className: 'ImagenCSS'
    })
  return (
    imagen
  );
}

export default ImagenF;