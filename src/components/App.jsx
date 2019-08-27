import React, { Component } from "react";
import UserList from "./UserList";
import SplashLoading from "./SplashLoading";
import Api from "../services/Api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiService = new Api();
    this.state = {
      isLoaded: false,
      users: []
    };
  }
  async refreshData() {
    const users = await this.apiService.readAll();
    this.setState(state => {
      return {
        ...state,
        users,
        isLoaded: true
      };
    });
  }
  componentDidMount() {
    setTimeout(async () => {
      this.refreshData();
    }, 3000);
  }
  render() {
    let currentComponent;
    if (this.state.isLoaded) {
      currentComponent = (
        <UserList users={this.state.users} onChange={e => this.refreshData()} />
      );
    } else {
      currentComponent = <SplashLoading />;
    }

    return <div className="mt-3 my-auto">{currentComponent}</div>;
  }
}
