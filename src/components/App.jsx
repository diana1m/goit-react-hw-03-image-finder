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
    totalHits: 0,
		error: '',
		page: 1,
    isLoading: false,
	}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch || prevState.page !== this.state.page) {
      if (prevState.textSearch !== this.state.textSearch){
        this.setState({images: []});
      }
      this.setState({ isLoading: true});

      try{
        getImages(this.state.textSearch, this.state.page)
        .then((data) =>  {
          this.setState({
						images: [...this.state.images, ...data.hits],
            totalHits: data.totalHits,
					})
          if(data.total === 0){
            this.setState({ error:  "Sorry, there are no images matching your search query. Please try again."});
          }
        });
      } catch(error) {
        this.setState({ error: error.message });
      } finally {

        setTimeout(()=>this.setState({ isLoading: false}), 300);
        
      }
    }
  
}

	handleSubmit = (textSearch) => {
		this.setState({ textSearch, error: ""})
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
              color="#a94d69"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
      />}
        <ImageGallery data={this.state.images}/>

        {(this.state.page * 12 <= this.state.totalHits) &&
            <ButtonLoadMore  onClick={this.loadMore}/>}

        {Boolean(this.state.error.length) && <p>{this.state.error}</p>}
        
      </Container>
    );
  }
};
