import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import Child from './child';

const Parent = () => {
  const [num, setNum] = useState(0);

  const onChange = useCallback(() => {
    console.log('change');
  }, []);

  return (
    <div>
      <div onClick={() => setNum(num + 1)}>p</div>
      <Child
        onChange={onChange}
      // num={num}
      />
    </div>
  )
};

export default Parent;
