import React, { useState } from 'react';
import Nav from './src/Nav';
import Modal from './src/Modal';
import Section from './src/Section';
import FullIntro from './src/FullIntro';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faReact,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  ${'' /* margin: 0 auto; */}
  background-color:#30363D;
  text-align:center;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all 0.5s ease-in-out;
}
`;

const AppStyle = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-decoration: none;
`;
const IntroStyle = styled.header`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  & .text {
    position: absolute;
    left: 50%;
    top: 40%;
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
  }
  & h2 {
    color: rgb(233, 244, 244);
    font-size: 4vw;
    width: 100%;
  }
  & h4 {
    font-size: 1.15rem;
  }
  & .Btn {
    display: inline-block;
    width: 50%;
    border: 2px solid salmon;
    text-decoration: none;
    color: rgb(233, 244, 244);
  }
  & .background {
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    filter: blur(2px) grayscale(20%);
  }
`;
const AboutStyle = styled.article`
  height: 40vh;
  color: whitesmoke;
  background-color: #0d1117;
  padding-top: 10vh;
  padding-bottom: 15vh;
  & img {
    border-radius: 0.6rem;
  }
  & h2 {
    font-size: 4vw;
  }
  & h4 {
    font-size: 2vw;
  }
  & p {
    font-size: 1.6vw;
  }
  @media screen and (max-width: 539px) {
    & h2 {
      font-size: 2rem;
    }
    & h4 {
      font-size: 1rem;
    }
    & p {
      font-size: 0.9rem;
    }
  }
`;
const SkillStyle = styled.article`
  height: 45vh;
  padding-top: 5vh;
  padding-bottom: 10vh;
  color: rgb(233, 244, 244);
  background-color: #161b22;
  font-size: 4vw;
  & h2 {
    font-size: 4vw;
  }
  & h4 {
    font-size: 2vw;
  }
  & p {
    font-size: 1.3vw;
  }

  @media screen and (max-width: 539px) {
    & div {
      font-weight: 600;
      font-size: 0.5rem;
      flex-direction: column;
    }
    & .icon {
      margin: 0.5rem;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1455px) {
    height: 55vh;
  }
`;

const FontAwesome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  & div {
    font-weight: 600;
    font-size: 2vw;
    flex-direction: row;
  }
  & .icon {
    margin: 2vw;
    cursor: pointer;
  }
  & .HTML:hover {
    color: rgb(255, 132, 76);
  }

  & .CSS:hover {
    color: rgb(42, 152, 246);
  }
  & .JS:hover {
    color: rgb(255, 230, 78);
  }
  & .REACT:hover {
    color: rgb(122, 266, 255);
  }
  @media screen and (max-width: 539px) {
    & div {
      font-weight: 600;
      font-size: 0.5rem;
      flex-direction: row;
    }
    & .icon {
      margin: 0.5rem;
      cursor: pointer;
    }
  }
`;

const MyWorkStyle = styled.article`
  height: 60vh;
  padding-top: 10vh;
  padding-bottom: 15vw;
  color: whitesmoke;
  background-color: rgb(44, 44, 48);
  font-size: 4vh;

  & h2 {
    font-size: 4vw;
  }
  & h4 {
    font-size: 2vw;
  }
  & p {
    font-size: 1.3vw;
  }
  .worksLogos {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-size: 1.5vw;
    div {
      margin: 0 2.5rem;
    }
    overflow: scroll;
    img {
      width: 13vw;
      height: 13vw;
      border: 0.5rem solid rgb(77, 77, 88);
      border-radius: 50%;
    }
    a {
      color: white;
    }
    h4 {
      text-align: center;
      font-size: 2.1vw;
    }
    @media screen and (max-width: 539px) {
      flex-direction: column;
      div {
        margin: 1vh;
      }
    }
  }
`;
const ContactStyle = styled.article`
  height: 40vh;
  padding-top: 20vh;
  color: whitesmoke;
  & h2 {
    font-size: 2.2vw;
  }
  & a {
    color: ghostwhite;
    font-size: 2vw;
    letter-spacing: 0.1rem;
  }
`;
const EmailStyle = styled.div`
  & a:hover {
    color: #ffd100;
    transition: 0.2s ease-in-out color;
  }
`;

const App = () => {
  const [isModalHTMLOpen, setIsModalHTMLOpen] = useState(false);
  const [isModalCssOpen, setIsModalCssOpen] = useState(false);
  const [isModalJsOpen, setIsModalJsOpen] = useState(false);
  const [isModalReactOpen, setIsModalReactOpen] = useState(false);

  //div click -> open Modal
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <FullIntro />
        <Nav />
        {/* headerStart */}
        <IntroStyle id='Intro'>
          <Section
            title={'윤영주의 포트폴리오입니다.'}
            describe={'지속적 성장과 성과로 보답하겠습니다.'}
            button={'FIND OUT MORE 👇'}
            buttonLink={'/portfolioHome/#About'}
          />
        </IntroStyle>
        {/* headerEnd */}

        {/* containerStart */}
        <section id='container'>
          <AboutStyle id='About'>
            <img
              alt='userImage'
              src='https://user-images.githubusercontent.com/80259925/118583181-9de3d700-b7cf-11eb-814c-ec6afef526b2.jpeg'
            />
            <Section
              title={'About Me'}
              describeTitle={' 안녕하세요? 윤영주입니다.'}
              describeDescribe={
                'web 개발의 매력과 가능성에 매료되어 꾸준히 배우고 익히는 중입니다.'
              }
            />
          </AboutStyle>
          <SkillStyle id='Skill'>
            <Section title={'Skills'} />
            <FontAwesome>
              <div
                onClick={() => {
                  setIsModalHTMLOpen(!isModalHTMLOpen);
                }}>
                <FontAwesomeIcon
                  className='icon HTML'
                  icon={faHtml5}
                  size='4x'
                  color='rgb(236,92,36)'
                />
                <div>HTML</div>
                <Modal isOpen={isModalHTMLOpen} toggle={setIsModalHTMLOpen}>
                  <div>HTML에서 제시하는 웹표준 사양을 따릅니다.</div>
                </Modal>
              </div>
              <div
                onClick={() => {
                  setIsModalCssOpen(!isModalCssOpen);
                }}>
                <FontAwesomeIcon
                  className='icon CSS'
                  icon={faCss3}
                  size='4x'
                  color='rgb(2,123,201)'
                />
                <div>CSS</div>
                <Modal isOpen={isModalCssOpen} toggle={setIsModalCssOpen}>
                  <div>기본적인 CSS와 💅styled-components를 사용합니다.</div>
                </Modal>
              </div>
              <div
                onClick={() => {
                  setIsModalJsOpen(!isModalJsOpen);
                }}>
                <FontAwesomeIcon
                  className='icon JS'
                  icon={faJs}
                  size='4x'
                  color='rgb(241,190,38)'
                />
                <div>JavaScript</div>
                <Modal isOpen={isModalJsOpen} toggle={setIsModalJsOpen}>
                  <div>es6 사양에 기반한 개발을 익혔습니다.</div>
                </Modal>
              </div>
              <div
                onClick={() => {
                  setIsModalReactOpen(!isModalReactOpen);
                }}>
                <FontAwesomeIcon
                  className='icon REACT'
                  icon={faReact}
                  size='4x'
                  color='rgb(72,206,217)'
                />

                <div>React.JS</div>
                <Modal isOpen={isModalReactOpen} toggle={setIsModalReactOpen}>
                  <div>webpack과 react-router의 기본적인 사용 가능</div>
                </Modal>
              </div>
            </FontAwesome>
          </SkillStyle>
          <MyWorkStyle id='MyWork'>
            <Section title={'My Works'} describeTitle={'solo project'} />
            <div>
              <div className='worksLogos'>
                <div>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/airbnbClone/'>
                    <img src='https://media.vlpt.us/images/zerozoo-front/post/61d047ea-2093-4372-86c6-b66c7aa707a1/image.png' />
                  </a>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/airbnbClone/'>
                    <h4>Airbnb 클론사이트 제작</h4>
                  </a>
                </div>
                <div>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/YoonGif/'>
                    <img src='https://media.vlpt.us/images/zerozoo-front/post/6d0967e9-1ff3-407b-abfb-e37d80e628fb/image.png' />
                  </a>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/YoonGif/'>
                    <h4>giphy API를 활용한 gif 사이트 제작</h4>
                  </a>
                </div>
                <div>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/reactClone/#/'>
                    <img src='https://media.vlpt.us/images/zerozoo-front/post/e153dde0-27e5-41e1-a911-02beaefd41f8/image.png' />
                  </a>
                  <a
                    target='_blank'
                    href='https://zerozoo-front.github.io/reactClone/#/'>
                    <h4>React 클론사이트 제작</h4>
                  </a>
                </div>
              </div>
            </div>
          </MyWorkStyle>
          <ContactStyle id='Contact'>
            <Section
              title={'Contact'}
              button={<FontAwesomeIcon icon={faPhoneAlt} />}
              describeStyle={{ fontSize: '1.6rem' }}
              buttonText={' Tel: 010-3481-0259'}
            />

            <EmailStyle>
              <Section
                id='email'
                title={'Send Mail'}
                button={<FontAwesomeIcon icon={faMailBulk} size='2x' />}
                buttonLink={'mailto:zerozoo385@gmail.com'}
                buttonText={' e-mail: zerozoo385@gmail.com'}
              />
            </EmailStyle>
          </ContactStyle>
        </section>

        {/* containerEnd */}
      </AppStyle>
    </>
  );
};

export default App;
