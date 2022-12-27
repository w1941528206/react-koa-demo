import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export const menuList = [{
  title: 'css',
  key: 'css',
  desc: '',
  path: '',
  children: [{
    title: 'vanta.js',
    key: '1',
    path: '/vanta',
  }, {
    title: '瀑布流',
    key: '2',
    path: '/masonry',
  }]
}, {
  title: 'js',
  key: 'js',
  desc: '',
  path: '',
}];

const RenderChild: React.FC<any> = ({
  child
}): React.ReactElement => {
  return (
    <div className='menu-child-content'>
      {child?.map((item: any, index: number) => {
        return (
          <div className='menu-card' key={item.key}>
            <Link style={{ textDecoration: 'none' }} to={item.path}>
              <p>{item.title}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

const Menu = (): React.ReactElement => {
  return (
    <div style={{ padding: 20 }}>
      {menuList.map((item, index) => {
        return (
          <div key={item.key}>
            <p className='menu-title'>{item.title}</p>
            <RenderChild child={item.children} />
          </div>
        )
      })}
    </div>
  )
};

export default Menu;
