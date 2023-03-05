import { Item, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem =({url, tags})=>{
    return(
        <Item>
            <Image src={url} alt={tags}/>
        </Item>
    )
}