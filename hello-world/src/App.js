import React from 'react';

class HelloWorld extends React.Component {
  render() {
    const { name } = this.props

    const isShowEasterEgg = name.toLowerCase() === 'world'
    const easterEgg = <p><span role="img" aria-label="">🥳</span>恭喜你打开了新世界的大门!</p>
    return (
      <div>
        <p>Hello {name}!</p>
        {isShowEasterEgg && easterEgg}
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Anonymous'
    }
  }

  render() {
    return (
      <div>
        <div class="input">
          <input id="name" name="name" />
          <button onClick={this.handleGreet.bind(this)}>Greet</button>
        </div>
        <HelloWorld name={this.state.name} />
      </div>
    )
  }

  handleGreet(event) {
    this.setState({
      name: document.getElementById('name').value
    })
  }
}

export default App
