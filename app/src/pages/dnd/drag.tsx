import React, { useState } from 'react';
import { CARD_DEFAULT_CONFIG } from './config';
import DndCard from './card';
import './index.less';

const Drag = () => {
  const [cards, setCards] = useState(CARD_DEFAULT_CONFIG);

  const move = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex];
    const cloneCards = [...cards];
    cloneCards.splice(dragIndex, 1);
    cloneCards.splice(hoverIndex, 0, dragCard);
    setCards(cloneCards);
  }

  return (
    <div className='drag-content'>
      {cards && cards.map((item, index) => {
        return (
          <DndCard
            key={item.title}
            title={item.title}
            index={index}
            move={move}
            content={item.content}
          />
        )
      })}
    </div>
  )
}

export default Drag;
