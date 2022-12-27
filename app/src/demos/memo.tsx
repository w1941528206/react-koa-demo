import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const Memo = () => {
  const [num, setNum] = useState<number>(0);

  const fn = useCallback(() => {
    console.log('this is fn');
  }, []);

  // const fn = () => console.log('this is fn');

  const obj = useMemo(() => {
    return {
      inset: 1
    }
  }, []);

  useEffect(() => {
    console.log(obj.inset);
    fn();
  }, [fn]);

  return (
    <div onClick={() => setNum(num + 1)}>memo</div>
  )
};

export default Memo;
