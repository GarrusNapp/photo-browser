import React from "react";
import { connect } from "react-redux";
import { Panel } from "react-bootstrap";
import ImageCard from "../ImageCard/ImageCard";
import SortingControl from "../SortingControl/SortingControl";
import InfiniteScroll from "react-infinite-scroller";
import { updateCategory } from "../../redux/actions/categoryActions";

const ImageList = props => {
  const { show, categories } = props;
  let requestPage;
  let elements = "Search for pictures!";
  let hasMore = false;
  if (show) {
    let itemsNumber = categories[show].result.results.length;
    let itemsAvailable = categories[show].result.total;
    requestPage = itemsNumber / 10 + 1;
    if (itemsNumber < itemsAvailable && Number.isInteger(requestPage))
      hasMore = true;
    elements = (
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={() => props.updateCategory(show, requestPage)}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        threshold={250}
      >
        {categories[show].result.results.map((el, i) => (
          <ImageCard
            {...el}
            key={el.id}
            title={show}
            favorited={categories[show].favorite.includes(el.id)}
          />
        ))}
      </InfiniteScroll>
    );
  }
  return (
    <Panel>
      <Panel.Heading className="clearfix">
        <h4>{show ? show[0].toUpperCase() + show.substr(1) : ""}</h4>
        <SortingControl />
      </Panel.Heading>
      <Panel.Body>{elements}</Panel.Body>
    </Panel>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { updateCategory })(ImageList);
