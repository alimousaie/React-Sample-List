import config from "../common/config";
import userDecorator from "../common/userDecorator";

export default class Api {
  // constructor() {
  //   console.log(config);
  // }

  async findUser(name) {
    const users = JSON.parse(localStorage.getItem("users"));
    return users.filter(user => user.name.inclues(name));
  }

  async delete(userId) {
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.filter(user => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }

  async update(updatedUserData) {
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.map(user => {
      if (user.id === updatedUserData.id) {
        user = {
          ...user,
          ...updatedUserData
        };
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }

  async save(user) {
    const users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }

  async readAll() {
    let users;
    users = JSON.parse(localStorage.getItem("users"));
    if (users === null || users === {} || users.length===0) {
      users = await fetch(`${config.API_URL}users`)
        .then(response => response.json())
        .then(response => response.map(user => userDecorator(user)));
      localStorage.setItem("users", JSON.stringify(users));
    }
    return users;
  }
}
