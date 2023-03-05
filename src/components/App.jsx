import { Component } from 'react'
import { getImages } from "components/services/getImages";

import { Hearts } from  'react-loader-spinner'

import { Container } from "./Styles/Styles";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';

// import Notiflix from 'notiflix';

export class App  extends Component{ 
  state = {
		textSearch: '',
    images: [],
		error: '',
		page: 1,
    isLoading: true,
	}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch || prevState.page !== this.state.page) {
      if (prevState.textSearch !== this.state.textSearch){
        this.setState({images: []});
      }
      this.setState({ isLoading: true });

      try{
        getImages(this.state.textSearch, this.state.page)
        .then((data) =>  {
          this.setState({
						images: [...this.state.images, ...data.hits],
					})
          if(data.total === 0){
            this.setState({ error:  "Sorry, there are no images matching your search query. Please try again."});
            throw new Error("Sorry, there are no images matching your search query. Please try again.");
          }
        });
      } catch(error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false});
      }
    }
  
}

	handleSubmit = (textSearch) => {
		this.setState({ textSearch})
	}

  loadMore = ()=>{
    this.setState({ page: this.state.page+1})
  }

  render(){
    return (
      <Container>
        <Searchbar onSearch={this.handleSubmit}/>
        
        {this.state.isLoading && 
        <Hearts 
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />}
        <ImageGallery data={this.state.images}/>

        {Boolean(this.state.images.length) &&
          <ButtonLoadMore  onClick={this.loadMore}/>
        }

        {Boolean(this.state.error.length) && <p>{this.state.error}</p>}
        
      </Container>
    );
  }
};
