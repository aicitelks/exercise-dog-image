import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: '',
      load: true,
    }

    this.fetchDogImage = this.fetchDogImage.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  async fetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const object = await response.json();

    this.setState({
      data: object,
      load: false,
    });

  }

  render() {
    const { data: { message }, load } = this.state;
    return (
      <div className="App">
        { load ? <p>'Loading'</p> : 
          <header className="App-header">
            <img src={ message } alt="aleatory-dog" />
            <button onClick={this.fetchDogImage}>Buscar outro dog</button>
          </header>
        }
      </div>
    );
  }
}

export default App;
