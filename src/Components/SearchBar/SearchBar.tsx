import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useSearchData } from '../../Context/SearchDataContext';

// CSS files import
import './SearchBar.css'; // Search css

export default function SearchBar(props: any) {
    const { handleSearchFormSubmit } = useSearchData();

    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearchQuery = (event: any) => {
        event.preventDefault();
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleSearchFormSubmit(searchQuery);
    };

    return (
        <div className='search-bar'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            type="text"
                            placeholder="Search here.."
                            className='search-bar-input'
                            onChange={handleSearchQuery}
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