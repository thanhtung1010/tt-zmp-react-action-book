import React, { useEffect } from 'react';
import { parseImgSrc } from '../untils';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../enums';

function checkActiveRoute(path: string) {
  const activeCls: string = 'tt-navbar-item-active';

  const routeKey: string[] = Object.keys(ROUTE);
  for (let i = 0; i < routeKey.length; i++) {
    const route = ROUTE[routeKey[i]];
    const element: HTMLButtonElement | null = document.getElementById('navbar-' + route) as HTMLButtonElement | null;
    if (element) {
      const _class = element.className;
      if (path.includes(route)) {
        _class.includes(activeCls) ? null : element.className = element.className + ' ' + activeCls;
      } else {
        element.className = element.className.replace(activeCls, '');
      }
    }
  }
}

function goToURL(path: string, navigate: NavigateFunction) {
  navigate('/' + path);
  checkActiveRoute(path);
}

export const NavigationBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkActiveRoute(location.pathname);
  }, []);
  
  return (
    <aside className='tt-navbar'>
      <button id='navbar-shoping' onClick={()=> goToURL(ROUTE.CUSTOMERS, navigate)} className='tt-navbar-item'>
        <img src={parseImgSrc('shoping-cart')} alt="shoping-cart.svg" />
      </button>
      <button id='navbar-setting' onClick={()=> goToURL(ROUTE.SETTING, navigate)} className='tt-navbar-item'>
        <img src={parseImgSrc('profile')} alt="profile.svg" />
      </button>
    </aside>
  );
};