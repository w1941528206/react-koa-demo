import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MenuOutlined } from '@ant-design/icons';
import './index.less';

interface IDndCard {
  title: string | number;
  content: string | number | React.ReactNode;
  index: number;
  move: any;
}

const DndCard: React.FC<IDndCard> = ({
  title,
  content,
  index,
  move,
}) => {
  let ref = useRef() as any;

  const [, drop] = useDrop(() => ({
    accept: 'card',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    hover: (item: any, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      // 交换卡片
      const { top, bottom } = ref.current.getBoundingClientRect();
      const halfOfHoverHeight = (bottom - top) / 2;
      const { y } = monitor.getClientOffset() as any;
      const hoverClientY = y - top;

      console.log(dragIndex, hoverIndex);

      if (
        (dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)
        || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
      ) {
        console.log(dragIndex, hoverIndex);
        move(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  }))

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'card',
    item: { id: 1, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const opacity = isDragging ? .1 : 1;

  drag(ref);
  drop(ref);

  return (
    <div
      ref={preview}
      className='card'
      style={{ opacity }}
    >
      <div className='handle'>
        <MenuOutlined ref={drag} className='handleIcon' />
      </div>
      <div className='content'>
        <p>{title}</p>
        <div>{content}</div>
      </div>
    </div>
  )
};

export default DndCard;
