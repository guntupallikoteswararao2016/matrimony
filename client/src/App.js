import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const AnotherPage = () => <h1>Another Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

class Profile extends React.Component {
  state = {
      profile: []
    }
  
    componentDidMount() {
      const { id } = this.props.match.params;
      // debugger;
      fetch(`/profile/${id}`)
        .then(res => {
          console.log(res);
          return res.json()
        })
        .then(profile => {
          console.log(profile);
          this.setState({ profile })
        });
    }


  render() {
      debugger;
      return (
          <div>
               <a href={'/'}>Back</a>
              <h1>Profile Preview</h1>
              {
                 <div>
                      <p>Name:{this.state.profile.name}</p>
                      <p>id: {this.state.profile.id} </p>
                      <p>location: {this.state.profile.location} </p>
                      <p>job: {this.state.profile.job} </p>
                 </div>
              }
          </div>
      )
  }
}


class Home extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href="/profile/9032">view profile</a>
          <Link to="/profile/9032" > profile</Link> 
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </header>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/another-page/">Another Page</Link>
            <Link to="/profile/9032">/profile>9032</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/another-page/" component={AnotherPage} />
        <Route path="/profile/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
