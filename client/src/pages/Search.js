import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "./../components/Grid";
// import Jumbotron from "./../components/Jumbotron";
import { List, ListItem } from "./../components/List";
import { Input, FormBtn } from "./../components/Form";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    input: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="searchBar"> 
              <h4> Book Search</h4>
              Book
              <form>
                <Input
                  value={this.state.input}
                  onChange={this.handleInputChange}
                  name="input"
                  placeholder="Please enter a title"
                />
                <FormBtn
                disabled={!(this.state.input)}
                onClick={this.handleFormSubmit}
                >
                  <h4>
                    Search
                  </h4>
                </FormBtn>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="results">
              <h4> Results </h4>
              {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3> No Results to Display </h3>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  
}

export default Search;