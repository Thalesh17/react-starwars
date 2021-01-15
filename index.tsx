import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import { Peoples } from "./src/pages/Peoples";
import "./style.css";
import "./global.css";
import { PeopleProvider } from "./contexts/persons";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <PeopleProvider>
          <Header />
          <Peoples />
        </PeopleProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
