import React, {
  useEffect,
  useRef
} from 'react';

const Event = () => {
  const fuRef: any = useRef(null);
  const ziRef: any = useRef(null);
  const sunRef: any = useRef(null);

  const clickFunction = (e: any, type: string) => {
    console.log(type);
  }

  useEffect(() => {
    if (fuRef) {
      fuRef.current.addEventListener('click', () => { console.log('fu native'); }, false);
      fuRef.current.addEventListener('click', () => { console.log('fu native'); }, true);

    }
    if (ziRef) {
      ziRef.current.addEventListener('click', () => { console.log('zi native'); }, false);
      ziRef.current.addEventListener('click', () => { console.log('zi native'); }, true);

    }
    if (sunRef) {
      sunRef.current.addEventListener('click', () => { console.log('sun native'); }, false);
      sunRef.current.addEventListener('click', () => { console.log('sun native'); }, true);
    }
  }, []);

  return (
    <div
      ref={fuRef}
      onClick={(e) => clickFunction(e, 'fu')}
      onClickCapture={(e) => clickFunction(e, 'fu')}
      style={{ width: 300, height: 300, background: 'red' }}
      className='fu'
    >
      fu
      <div
        ref={ziRef}
        onClick={(e) => clickFunction(e, 'zi')}
        onClickCapture={(e) => clickFunction(e, 'zi')}
        style={{ width: 200, height: 200, background: 'blue' }}
        className='zi'
      >
        zi
        <div
          ref={sunRef}
          onClick={(e) => clickFunction(e, 'sun')}
          onClickCapture={(e) => clickFunction(e, 'sun')}
          style={{ width: 100, height: 100, background: 'pink' }}
          className='sun'
        >
          sun
        </div>
      </div>
    </div>
  )
};

export default Event;
