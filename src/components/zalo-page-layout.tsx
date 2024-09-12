import React, { ReactNode } from "react";
import { NavigationBar } from ".";
import { useSetRecoilState } from "recoil";
import { userState } from "../state";
import { getUserInfo } from "zmp-sdk";

interface IZaloPageLayoutProps {
  children: ReactNode;
}

const ZaloPageLayout: React.FunctionComponent<IZaloPageLayoutProps> = ({children}) => {
  let loginError: undefined | Record<string, unknown> = undefined;
  const setUser = useSetRecoilState(userState);

  getUserInfo()
  .then(resp => {
    if (resp.userInfo) {
      setUser(resp.userInfo);
    }
  })
  .catch(error => {
    console.error(error);
    loginError = error;
  });

  return (
    loginError
    ? <div>
        <p>Login Error!!!</p>
        <p>{loginError || {}}</p>
      </div>
    : <section className="tt-pagelayout">
        {children}
        <NavigationBar></NavigationBar>
      </section>
   );
}
 
export default ZaloPageLayout;