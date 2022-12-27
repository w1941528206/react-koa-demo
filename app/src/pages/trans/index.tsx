import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import _ from 'lodash';
import omit from '../../utils/omit';

const Trans = () => {
  const [target, setTarget] = useState({ name: '123', test: 'test', other: '123' });

  const setTargetData = () => {
    const newTarget = omit(target, ['name', 'test']);
    setTarget(newTarget);
  }

  interface IOjb {
    [key: string]: number | string;
  }

  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  const obj: Record<string, number | string> = {};
  obj.id = 123;
  obj.name = 'roc';

  return (
    <div>
      {Object.keys(target).map((item, index) => {
        return <div key={index}>{item}: {target[item]}</div>
      })}
      <Button onClick={setTargetData}>omit</Button>
    </div>
  )
};

export default Trans;
