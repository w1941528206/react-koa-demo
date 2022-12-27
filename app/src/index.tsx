import React from 'react';
import { createRoot } from 'react-dom/client';
// import Router from './components/router';
// import Event from './demos/event';
// import Memo from './demos/memo';
// import Parent from './demos/parent';
// import Context from './demos/context';
import Test from './demos/test';

const root = createRoot(document.getElementById('react-content') as HTMLElement);
root.render(<Test />);