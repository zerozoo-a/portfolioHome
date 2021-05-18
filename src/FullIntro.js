import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FullIntroWrapperStyle = styled.div`
  & .toggleOn {
    position: absolute;
    visibility: hidden;
    width: 100vw;

    z-index: 200;
    height: 100vh;
    padding-top: 25%;
    background-color: rgba(233, 233, 233, 0);
    transition: all 1.5s linear;
    color: rgba(22, 34, 34, 0.2);
    @media screen and (max-width: 539px) {
      h1 {
        width: 80vw;
        text-align: center;
        margin: 0 auto;
      }
      h2 {
        width: 80vw;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
  & .toggleOff {
    visibility: visible;
    color: rgba(22, 34, 34, 1);
    position: absolute;
    height: 100vh;
    padding-top: 25%;
    width: 100%;
    z-index: 200;
    background-color: rgba(233, 233, 233, 0.7);
    text-align: center;
    margin: 0 auto;
    @media screen and (max-width: 539px) {
      h1 {
        width: 80vw;
        text-align: center;
        margin: 0 auto;
      }
      h2 {
        width: 80vw;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
`;

const FullIntro = () => {
  const [fullIntroOn, setFullIntroOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFullIntroOn(true);
    }, 1000);
  }, []);
  return (
    <FullIntroWrapperStyle>
      <div className={fullIntroOn ? 'toggleOn' : 'toggleOff'}>
        <h1>안녕하세요? 윤영주입니다.🙋🏻‍♂️</h1>
        <h2>포트폴리오 사이트에 방문하신것을</h2>
        <h2>환영합니다.🎉</h2>
      </div>
    </FullIntroWrapperStyle>
  );
};

export default FullIntro;
