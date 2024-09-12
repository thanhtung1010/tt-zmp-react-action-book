import React from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, useNavigate } from 'zmp-ui'; 
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { HomePage, AboutPage, UserPage} from '../pages';
import { userState } from '../state';
import ZaloPageLayout from './zalo-page-layout';

export const MyApp = () => {
  // const navigate = useNavigate();
  // const user = useRecoilValue(userState);

  // if (!user) {
  //   navigate('/error');
  // }

  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <ZaloPageLayout>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/setting" element={<AboutPage></AboutPage>}></Route>
              <Route path="/customer" element={<UserPage></UserPage>}></Route>
            </AnimationRoutes>
          </ZaloPageLayout>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};