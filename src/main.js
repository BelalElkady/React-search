import React from "react";
import { Component } from "react";
import axios from "axios";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: [],
      data: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
      )
      .then(res => {
        this.setState({
          initData: res.data.Reggae,
          data: res.data.Reggae
        });
      });
  }
  handleSearch(e) {
    const updatedList = this.state.initData;
    const list = updatedList.filter(item => {
      return item.search(e.target.value) !== -1;
    });
    this.setState({
      data: list
    });
    console.log(this.state.data);
  }

  render() {
    const parsedData = this.state.data.map((item, i) => (
      <li key={i}>{item}</li>
    ));
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="Search the list with React"
        />
        <ul className="list">{parsedData}</ul>
        <div />
      </div>
    );
  }
}
export default Main;
