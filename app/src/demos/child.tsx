import React, { memo } from 'react';

const Child: React.FC<any> = memo((props) => {
  console.log('ccc');

  return (
    <div onClick={() => props.onChange()}>c</div>
  )
});

export default Child;