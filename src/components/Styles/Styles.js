import styled from "styled-components";

/*
 * Стили компонента App
 */

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
` 

  /*
   * Стили компонента ImageGallery
   */
export const ImageGallery = styled.section`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`
  
  /*
   * Стили компонента ImageGalleryItem
   */
export const ImageGalleryItem = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`
export const ImageGalleryItemImage = styled.image`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`
  /*
   * Стили компонента Modal
   */
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`
  
export const Modal = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`
  
  /*
  * Стили компонента Buton (Load more)
  */
  export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

      &:hover,
      &:focus {
            background-color: #303f9f;
      }
  `
  
  
  
  