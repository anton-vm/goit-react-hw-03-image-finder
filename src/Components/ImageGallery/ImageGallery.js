import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types'

const ImageGallery = ({imgArr, largeImageURL}) => {

    return (
<ul className="ImageGallery">
    {imgArr.map(el => <ImageGalleryItem el={el} key={el.id} largeImageURL={largeImageURL}/>)}

</ul>
    );
    ImageGallery.propTypes = {
        imgArr: PropTypes.array,
        largeImageURL: PropTypes.func,
    }

};

export default ImageGallery;