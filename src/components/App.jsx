import { Component } from 'react'
import { getImages } from "components/services/getImages";

import { Audio } from  'react-loader-spinner'

import { Container } from "./Styles/Styles";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App  extends Component{ 
  state = {
		textSearch: '',
    images: [],
		error: '',
		status: 'idle',
		page: 1,
    isLoading: false,
	}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      try{
        getImages(this.state.textSearch, this.state.page)
        .then((data) =>  {
          this.setState({
						images: [...this.state.images, ...data.hits],
						status: 'resolved',
					})
        });

      } catch(error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    
    // getImages(this.props.value, this.state.page).then((image) => console.log(image))
    // if (
    //     prevProps.value !== this.props.value ||
    //     prevState.page !== this.state.page
    //   ) {
    //     this.setState({ status: 'pending' })

    //     getImages(this.props.value.trim(), this.state.page)
    //       .then((response) => console.log(response) )
    //       .then((image) => {
    //                       console.log(image)
                          // response.json()
            // if (news.status !== 'ok') {
            // 	return Promise.reject(news.message)
            // }

            // this.setState({
            // 	news: [...this.state.news, ...news.articles],
            // 	status: 'resolved',
            // })
          // })
          // .catch((error) => {
          //   console.log('error :>> ', error)
          //   this.setState({ error, status: 'rejected' })
          // })
      // }
}

	handleSubmit = (textSearch) => {
		this.setState({ textSearch })
	}

  render(){
    return (
      <Container>
        <Searchbar onSearch={this.handleSubmit}/>
        {this.state.isLoading && <Audio/>}
        <ImageGallery data={this.state.images}/>
      </Container>
    );
  }
};
