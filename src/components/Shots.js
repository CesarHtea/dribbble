import React, { Component } from 'react';

import Shot from './Shot'

class Shots extends Component {
  render() {
    const { filter } = this.props;

    return (
      <section>
        <div className='container'>
          <div className='shots'>
            {this.props.data.map(function(shot) {
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
