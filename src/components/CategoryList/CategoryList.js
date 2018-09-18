import React, { Component } from "react";
import { connect } from "react-redux";
import { Panel, Button } from "react-bootstrap";
import ImageCard from "../ImageCard/ImageCard";
import "./CategoryList.css";
import { showCategory } from "../../redux/actions/showActions";
import { removeCategory } from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  state = {
    display: "categories"
  };
  toggleDisplay = () => {
    if (this.state.display === "categories") {
      this.setState({ display: "favorites" });
    } else {
      this.setState({ display: "categories" });
    }
  };
  render() {
    let elements;
    const { categories } = this.props;
    if (this.state.display === "categories") {
      elements = Object.keys(categories).map(el => {
        return (
          <h4 key={el}>
            <span
              className="label label-default"
              onClick={() => this.props.showCategory(el)}
            >
              {el[0].toUpperCase() + el.substr(1)}{" "}
              <span
                className="glyphicon glyphicon-remove"
                onClick={event => this.props.removeCategory(el, event)}
              />
            </span>
          </h4>
        );
      });
    } else {
      let pictures = [];
      for (let category in categories) {
        for (let picture of categories[category].result.results) {
          if (categories[category].favorite.includes(picture.id)) {
            pictures.push({ picture, title: categories[category].title });
          }
        }
      }
      elements = pictures.map(el => (
        <ImageCard
          key={el.picture.id}
          {...el.picture}
          title={el.title}
          favorited={true}
          small={true}
        />
      ));
    }

    return (
      <Panel>
        <Panel.Heading className="clearfix">
          <h4>Your {this.state.display}:</h4>{" "}
          <Button className="pull-right" onClick={this.toggleDisplay}>
            {this.state.display === "categories" ? "Favorites" : "Categories"}
          </Button>
        </Panel.Heading>
        <Panel.Body
          className={
            this.state.display === "favorites" ? "category-list-body" : null
          }
        >
          {elements}
        </Panel.Body>
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { showCategory, removeCategory })(
  CategoryList
);
