import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./FavoriteControl.css";
import { favorite, removeFavorite } from "../../redux/actions/categoryActions";

const FavoriteControl = props => {
  const { title, elementId, favorited } = props;
  const likeButton = favorited ? (
    <Button
      className="pull-right"
      onClick={() => props.removeFavorite(title, elementId)}
    >
      <span className="glyphicon glyphicon-heart liked" />
    </Button>
  ) : (
    <Button
      className="pull-right"
      onClick={() => props.favorite(title, elementId)}
    >
      <span className="glyphicon glyphicon-heart" />
    </Button>
  );
  return likeButton;
};

export default connect(null, { favorite, removeFavorite })(FavoriteControl);
