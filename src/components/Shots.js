import React, { Component } from 'react';

import Shot from './Shot'

class Shots extends Component {
  createList = (filter) => {
    return this.props.data.filter(function(shot) {
      return shot.section === filter;
    });
  }

  render() {
    const { filter } = this.props;

    const newList = this.createList(filter);

    return (
      <section>
        <div className='container'>
          <div className='shots'>
            {newList.map(function(shot) {
              return <Shot
                        key={shot.key}
                        info={shot} />
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Shots;
