import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { addCategory } from "../../redux/actions/categoryActions";
import { showCategory } from "../../redux/actions/showActions";

class SearchForm extends Component {
  state = {
    value: ""
  };

  search = e => {
    e.preventDefault();
    if (this.state.value === "") return;
    let value = this.state.value.toLowerCase();
    if (Object.keys(this.props.categories).includes(value)) {
      this.props.showCategory(value);
    } else {
      this.props.addCategory(value);
    }
    this.setState({ value: "" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Form inline onSubmit={this.search}>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search for pictures"
            onChange={this.handleChange}
          />{" "}
          <Button type="submit" bsStyle="primary">
            Search
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, { addCategory, showCategory })(
  SearchForm
);
