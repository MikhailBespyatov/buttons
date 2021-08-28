import { Component } from "react";
import ChangeButtons from "./components/change-buttons";
import MainButton from "./components/main-button";

export default class App extends Component {
  state = {
    value: 1,
    change: false
  };

  onMainButton = () => {
    this.setState({ change: true });
  };

  onChangeButtons = num => {
    this.setState({ value: num, change: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.change
          ? <ChangeButtons onChangeButtons={this.onChangeButtons} />
          : <MainButton
              value={this.state.value}
              onMainButton={this.onMainButton}
            />}
      </div>
    );
  }
}
