import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Panel } from "react-bootstrap";
import FavoriteControl from "../FavoriteControl/FavoriteControl";
import { showCategory } from "../../redux/actions/showActions";

const ImageCard = ({
  id,
  created_at,
  description,
  likes,
  urls,
  user,
  links,
  title,
  favorited,
  small
}) => {
  return (
    <Panel className="image-card">
      <Panel.Heading className="clearfix">
        {small ? "" : <h4>{description}</h4>}
        <FavoriteControl elementId={id} title={title} favorited={favorited} />
      </Panel.Heading>
      <Panel.Body>
        <a href={links.html}>
          <img
            src={small ? urls.thumb : urls.regular}
            className="img-responsive center-block"
            alt={description}
          />
        </a>
      </Panel.Body>
      <Panel.Footer>
        <div className="clearfix">
          <p className="pull-left">
            Author: <a href={user.links.html}>{user.username}</a>
          </p>
          <p className="pull-right">Likes: {likes}</p>
        </div>
        <p>Created: {moment(created_at).format("LLL")}</p>
      </Panel.Footer>
    </Panel>
  );
};

export default connect(null, { showCategory })(ImageCard);
