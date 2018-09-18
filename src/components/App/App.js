import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { PageHeader } from "react-bootstrap";
import SearchForm from "../SearchForm/SearchForm";
import CategoryList from "../CategoryList/CategoryList";
import ImageList from "../ImageList/ImageList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <PageHeader>Browse unsplash photos</PageHeader>
        <CategoryList />
        <SearchForm />
        <hr />
        <ImageList />
      </div>
    </Provider>
  );
};

export default App;
