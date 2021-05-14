import React, { Component } from 'react';
import SideBar from './components/shared/SideBar/SideBar';
import HackerNews from './components/HackerNews/HackerNews'
import Reddit from './components/Reddit/Reddit'
import Medium from './components/Medium/Medium'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <SideBar />
          <h1>{this.props.count}</h1>
          {this.props.loading
            ? <h1>Loading Characters</h1>
            : (
                <ul>
                  {this.props.characters.map((character) => <li>{character.name}</li>)}
                </ul>
              )
          }

          {this.props.error}
          <Switch>
            <Route path='/hacker-news' component={HackerNews} />
            <Route path='/medium' component={Medium} />
            <Route path='/reddit' component={Reddit} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    count: reduxState.reducer.count,
    loading: reduxState.reducer.loading,
    characters: reduxState.reducer.characters,
    error: reduxState.reducer.error,
  }
}

// const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
