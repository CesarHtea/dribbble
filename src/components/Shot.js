import React, { Component } from 'react';

class Shot extends Component {
  render() {
    const { key, img, stats, author } = this.props.info;

    return (
      <article>
        <div>
          <div className='shot'>
            <picture>
              <img src={img} />
            </picture>
            <section>
              <ul className='stats'>
                <li>
                  <i className='fa fa-eye'></i> { stats[0] }
                </li>
                <li>
                  <i className='fa fa-comment'></i> { stats[1] }
                </li>
                <li>
                  <i className='fa fa-heart'></i> { stats[2] }
                </li>
              </ul>
            </section>
          </div>
          <footer className='author'>
            <a href='#'>
              <picture>
                <img src={author.avatar} />
              </picture>
              <span>{author.name}</span>
            </a>
          </footer>
        </div>
      </article>
    );
  }
}

export default Shot;
