import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "./../components/Grid";
// import Jumbotron from "./../components/Jumbotron";
import { List, ListItem } from "./../components/List";
import { Input, FormBtn } from "./../components/Form";

class Search extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
    query: ""
  };

  componentDidMount() {
    this.searchGB();
  }

  searchGB = query => {
    API.getBooks(query)
      .then(res =>
        this.setState({ 
          books: res.data.items, 
          // title: "", 
          // author: "",
          // description: "",
          // image: ""
        })
        ).catch(err => console.log(err));
        
      };
      
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   // When the form is submitted, search the Giphy API for `this.state.search`
   handleFormSubmit = event => {
    event.preventDefault();
    this.searchGB(this.state.query);
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
                  value={this.state.query}
                  onChange={this.handleInputChange}
                  name="query"
                  placeholder="Please enter a title"
                />
                <FormBtn
                disabled={!(this.state.query)}
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
                console.log(this.state.books.length),
              <List>
                {this.state.books.map(book => (
                  console.log(book),
                  <ListItem key={book.id}>
                    <p>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                      </strong>
                    </p>
                      <img alt={book.volumeInfo.title} className="img-fluid" src={book.volumeInfo.imageLinks.smallThumbnail} />
                      <span>
                        {book.volumeInfo.description}

                      </span>
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
    );
  }
  
}

export default Search;