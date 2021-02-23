import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value)
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm.length) {
            API.searchBooks(searchTerm)
                .then(res => {
                    setBooks(res.data.items)
                    console.log('res :>> ', res);
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="search"
                            placeholder="Search"
                        />
                        <FormBtn
                            disabled={!searchTerm.length}
                            onClick={handleFormSubmit}
                        >
                            Search
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                            {books.map(book => (
                                <ListItem key={book.id}>
                                    <Link to={book.volumeInfo.previewLink}>
                                        <strong>
                                            {book.volumeInfo.title} by {book.volumeInfo.authors}
                                        </strong>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Books;
