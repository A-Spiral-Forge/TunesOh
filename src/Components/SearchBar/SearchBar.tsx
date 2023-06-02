import React, { Component } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

// CSS files import
import './SearchBar.css'; // Search css

// Define types
interface IProps {
    handleSearchInput: (event: any) => void;
}

interface IState {
    searchInput: string;
}

export default class SearchBar extends Component<IProps, IState> {
    state = {
        searchInput: '',
    };

    handleSearchInput = (event: any) => {
        event.preventDefault();
        this.setState({ searchInput: event.target.value });
    };

    handleFormSubmit = (event: any) => {
        event.preventDefault();
        this.props.handleSearchInput(this.state.searchInput);
    };

    render() {
        return (
            <div className='search-bar'>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <InputGroup className='mb-3'>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                                className='search-bar-input'
                                onChange={this.handleSearchInput}
                            />
                            <Button type='submit' className='search-bar-button'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + '/svg-icons/SearchIcon.svg'
                                    }
                                    style={{ width: '20px', height: '20px' }}
                                    alt=''
                                    className='search-icon'
                                />
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}