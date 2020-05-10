import React, { Component } from "react";
import { Container, Row, Col } from "./../components/Grid";
// import Jumbotron from "./../components/Jumbotron";
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
            <div>
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
      </Container>
    )
  }
  
}

export default Search;