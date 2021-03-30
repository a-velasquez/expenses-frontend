import React from "react";

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/accounts/1', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return <div className="App">Accounts Component</div>;
  }
}

export default App;
