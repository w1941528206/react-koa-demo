import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import { Link } from 'react-router-dom';
import Clouds from 'vanta/dist/vanta.clouds.min';

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(Clouds({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef} style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: 20 }}>
        <Link to='/' style={{ color: '#fff' }}>回到首页</Link>
      </div>
    </div>
  )
};

export default Vanta;