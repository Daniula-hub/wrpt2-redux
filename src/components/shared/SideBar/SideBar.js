import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  increment,
  changeCount,
  getSWCharacters
} from '../../../redux/reducer';
import './SideBar.css'

// WRITE
class SideBar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <img className='sidebar-img' src="./newspaper.png" alt="" />
        <h3>News Today</h3>
        <hr />
        <p><a href='/#/hacker-news'>Hacker News</a></p>
        <p><a href='/#/medium'>Medium</a></p>
        <p><a href='/#/reddit'>Reddit</a></p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.getSWCharacters}>Get Star Wars Characters</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  increment,
  changeCount,
  getSWCharacters,
}

export default connect(undefined, mapDispatchToProps)(SideBar);

// argument 1 - mapStateToProps - Reading from the store

// argument 2 - mapDispatchToProps - Writing to the store