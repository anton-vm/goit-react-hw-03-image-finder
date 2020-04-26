import React from 'react';
import PropTypes from 'prop-types'

const ImageGalleryItem = ({el, largeImageURL}) => {
  const bigPicture = () => {
    largeImageURL(el.largeImageURL)
  }

  // console.log(el.largeImageURL);
    return (
<li className="ImageGalleryItem" onClick={bigPicture}>
  <img src={el.previewURL} alt="" className="ImageGalleryItem-image" />
</li>
    );
    ImageGalleryItem.propTypes ={
      el: PropTypes.shape({
        epreviewURL: PropTypes.string,
      }),
      largeImageURL: PropTypes.func,
    }
};

export default ImageGalleryItem;