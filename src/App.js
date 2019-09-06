import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./Components/HeaderAndFooter/Header";
import Footer from "./Components/HeaderAndFooter/Footer";
import View from "./Components/View/View";
import { fetchData } from "./Components/Store/action";

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData())
});


/**
 * main class App
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchData();
  }

  /**
   * template rendering
   * @return {*}
   */
  render() {
    const { data, isLoading } = this.props.data;
    return (
      <div className="App">
        <Header />
        <View isLoading={isLoading} data={data.articles}/>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
