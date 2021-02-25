import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";

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
        <div>
            <Container>
                <Row>
                    <Col size="md">
                        <h3>Book Search</h3>
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="search"
                                placeholder="Enter A Book Title"
                            />
                            <FormBtn
                                disabled={!searchTerm.length}
                                onClick={handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col size="md">
                        {books.length ? (
                            <List>
                                {books.map(book => (
                                    <ListItem key={book.id}>
                                        <Row>
                                            <Col size="md">
                                                <h4>{book.volumeInfo.title}</h4>
                                                <h5>Written by {book.volumeInfo.authors && book.volumeInfo.authors.map((a, idx) => (
                                                    <span key={idx}>{a} </span>
                                                ))}</h5>
                                            </Col>
                                            <Col size="md">
                                                <ViewBtn href={book.volumeInfo.previewLink} />
                                                <SaveBtn />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col size="md">
                                                <p>{book.volumeInfo.description}</p>
                                            </Col>
                                        </Row>


                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Books;
