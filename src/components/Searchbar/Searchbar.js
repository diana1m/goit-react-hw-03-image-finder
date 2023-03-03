import { Component } from 'react'
import { Header, Form, Button, ButtonLabel, Input } from "components/Searchbar/Searchbar.styled"

export class Searchbar extends Component{
    state = {
		value: '',
	}

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (!this.state.value) {
			console.log('Error')
		}
		this.props.onSearch(this.state.value)
		this.setState({ value: '' })
	}


    render() {
        return (
            <Header>
                <Form>
                    <Button type="submit" onSubmit={this.handleSubmit}>
                    <ButtonLabel>Search</ButtonLabel>
                    </Button>

                    <Input
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                </Form>
            </Header>
        )
    }
}