import React, { Component } from 'react';

import Shots from './Shots';

import data from '../data/datasource';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }

  render() {
    return (
      <header>
        <nav className='nav'>
          <ul className='nav__list'>
            <li>
              <a href='#' onClick={ () => {} }>All</a>
            </li>
            <li>
              <a href='#'>Popular</a>
            </li>
            <li>
              <a href='#'>Recent</a>
            </li>
            <li>
              <a href='#'>Debuts</a>
            </li>
          </ul>
        </nav>
        <Shots data={this.state.data}/>
      </header>
    );
  }
}

export default Container;
