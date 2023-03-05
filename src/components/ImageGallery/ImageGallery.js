import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ data }) => {
    return (
      <ImageGalleryList>
        {data.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem key={id} url={webformatURL} tags={tags}/>
        ))}
      </ImageGalleryList>
    );
  };
  
  ImageGallery.defaultProps = {
    items: [],
  };