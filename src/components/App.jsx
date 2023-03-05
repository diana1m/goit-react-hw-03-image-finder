import { Component } from 'react'
import { getImages } from "components/services/getImages";

// import { Audio } from  'react-loader-spinner'

import { Container } from "./Styles/Styles";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App  extends Component{ 
  state = {
		textSearch: '',
    images: [],
		error: '',
		page: 1,
    isLoading: false,
	}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch || prevState.page !== this.state.page) {
      this.setState({ isLoading: true, images: [] });

      try{
        getImages(this.state.textSearch, this.state.page)
        .then((data) =>  {
          this.setState({
						images: [...this.state.images, ...data.hits],
					})
        });

      } catch(error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false});
      }
    }
  
}

	handleSubmit = (textSearch) => {
		this.setState({ textSearch, isLoading: true })
    
	}

  render(){
    return (
      <Container>
        <Searchbar onSearch={this.handleSubmit}/>
        
        {this.state.isLoading && <p>Loading...</p>}
        <ImageGallery data={this.state.images}/>
        
      </Container>
    );
  }
};
