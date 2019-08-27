import React, { Component } from "react";
import UserItemSimple from "./UserItemSimple";
import UserItemEdit from "./UserItemEdit";
import Api from "../services/Api";
import operationMode from "../common/operation";

export default class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false
    };

    this.data = props.data;
    this.rowIndex = props.rowIndex;
    this.apiService = new Api();

    this.doEdit = this.doEdit.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.doSave = this.doSave.bind(this);
  }
  changeMode(mode) {
    this.setState(prevState => {
      return {
        ...prevState,
        isEditMode: mode === operationMode.EDIT
      };
    });
  }
  doEdit(e) {
    this.changeMode(operationMode.EDIT);
  }
  async doDelete(e, userId) {
    await this.apiService.delete(userId);
    this.props.onChange();
    this.changeMode(operationMode.DELETE);
  }
  async doSave(e, user) {
    await this.apiService.update(user);
    this.props.onChange();
    this.changeMode(operationMode.SAVE);
    this.data=user;
  }
  render() {
    let itemComponent;
    if (this.state.isEditMode) {
      itemComponent = (
        <UserItemEdit
        rowIndex={this.rowIndex}
          data={this.data}
          onSave={this.doSave}
          onDelete={this.doDelete}
        />
      );
    } else {
      itemComponent = (
        <UserItemSimple
        rowIndex={this.rowIndex}
          data={this.data}
          onEdit={this.doEdit}
          onDelete={this.doDelete}
        />
      );
    }
    return <>{itemComponent}</>;
  }
}
