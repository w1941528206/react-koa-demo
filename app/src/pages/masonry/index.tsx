import React from 'react';
import './index.less';

const Masonry = () => {
  const list = new Array(100).fill('');

  return (
    <div className='masonry'>
      {list.map((item: string, index: number) => {
        return (
          <div className='item' key={index}>
            <img src={`http://picsum.photos/${(Math.floor(Math.random() * 90) + 10) * 10}/${(Math.floor(Math.random() * 90) + 10) * 10}?random=${index + 1}`} />
          </div>
        )
      })}
    </div>
  )
};

export default Masonry;
