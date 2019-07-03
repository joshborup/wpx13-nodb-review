import React, { Component } from "react";
import axios from "axios";
import LeaderBoard from "./components/LeaderBoard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      name: "",
      campus: "",
      role: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.updatePlayerRatio = this.updatePlayerRatio.bind(this);
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    // VVVVVV request                VVVVVV response
    axios
      .get("/api/cheetah")
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  postThatWoodpecker() {
    const newWoodPecker = {
      name: this.state.name,
      campus: this.state.campus,
      role: this.state.role
    };
    axios
      .post("/api/woodpecker", newWoodPecker)
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }
  // change handler that is unique to the assigned input
  changeHandler(e) {
    this.setState({
      campus: e.target.value
    });
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  updatePlayerRatio(id, match) {
    axios
      .put(`/api/beaver/${id}?match=${match}`)
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <div className="input-container">
          {/* change handler done in-line */}
          <input
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
          <input onChange={this.changeHandler} value={this.state.campus} />
          <input
            onChange={event =>
              this.universalChangeHandler(event.target.name, event.target.value)
            }
            name="role"
            value={this.state.role}
          />
        </div>
        <button onClick={() => this.postThatWoodpecker()}>Add Player</button>
        <LeaderBoard
          players={players}
          updatePlayerRatio={this.updatePlayerRatio}
        />
      </div>
    );
  }
}

export default App;
