import { ImageGalleryList } from "./ImageGallery.styled";
import { Component } from 'react'

import { getImages } from "components/services/getImages";

import { Audio } from  'react-loader-spinner'
import { ImageGalleryItemImage } from "components/Styles/Styles";



export const ImageGallery = ({ data }) => {
    return (
      <ImageGalleryList>
        {data.map(({ id, largeImageURL, webformatURL, tags }) => (
          <li key={id}>
            <ImageGalleryItemImage src={webformatURL} alt={tags}/>
          </li>
        ))}
      </ImageGalleryList>
    );
  };
  
  ImageGallery.defaultProps = {
    items: [],
  };