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

  filterShots = (filter) => {
    this.setState({
      filter
    });
  }

  render() {
    return (
      <header>
        <nav className='nav'>
          <ul className='nav__list'>
            <li>
              <a href='#' className={this.state.filter === 'all' ? 'selected' : '' } onClick={ () => { this.filterShots('all') } }>All</a>
            </li>
            <li>
              <a href='#' className={this.state.filter === 'popular' ? 'selected' : '' } onClick={ () => { this.filterShots('popular') } }>Popular</a>
            </li>
            <li>
              <a href='#' className={this.state.filter === 'recent' ? 'selected' : '' } onClick={ () => { this.filterShots('recent') } }>Recent</a>
            </li>
            <li>
              <a href='#' className={this.state.filter === 'debut' ? 'selected' : '' } onClick={ () => { this.filterShots('debut') } }>Debuts</a>
            </li>
          </ul>
        </nav>
        <Shots data={this.state.data} filter={this.state.filter} />
      </header>
    );
  }
}

export default Container;
