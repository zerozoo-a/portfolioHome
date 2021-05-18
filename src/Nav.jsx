import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

const NavStyle = styled.ul`
  margin: 0;
  & div li a {
    text-decoration: none;
    font-size: 2.3vw;
    color: rgba(244, 244, 244, 0.6);
  }
  & .NavOn {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    background-color: rgb(59, 87, 111);
    color: whitesmoke;
    flex-direction: row;
    list-style: none;
    padding: 0;
    transition: background 0.2s ease-in-out;
  }
  & .NavOn :hover {
    color: rgb(255, 255, 255);
    transition: color 0.2s ease-in-out;
  }
  & .NavOff {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    flex-direction: row;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    transition: background 0.2s ease-in;
  }
  & .NavOff :hover {
    color: rgb(255, 255, 255);
    transition: color 0.2s ease-in-out;
  }
  & .NavOff li a {
    color: rgba(234, 234, 2s34, 0.9);
    font-weight: 600;
    cursor: pointer;
    scroll-behavior: smooth;
  }
  & .NavOn li a {
    color: rgba(244, 234, 234, 0.8);
    font-weight: 600;
    cursor: pointer;
  }
  & :nth-child(1) {
    margin-right: auto;
  }
  & div li {
    margin: 1vw 5vw;
  }
`;

const Nav = memo(() => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollToggle, setScrollToggle] = useState(false);
  useEffect(() => {
    (() => {
      window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
      if (scrollY > 50) {
        setScrollToggle(true);
        console.log('toggle is on');
      } else if (scrollY < 50) {
        setScrollToggle(false);
        console.log('toggle is off');
      }
    })();
    return () => {
      window.removeEventListener('scroll', () =>
        setScrollY(window.pageYOffset)
      );
    };
  });

  return (
    <>
      <NavStyle>
        <div className={scrollToggle ? 'NavOn' : 'NavOff'}>
          <li>
            <a href='https://github.com/zerozoo-front' target='_blank'>
              GitHub
            </a>
          </li>
          <li>
            <a href='/portfolioHome/#Intro'>Intro</a>
          </li>
          <li>
            <a href='/portfolioHome/#About'>About</a>
          </li>
          <li>
            <a href='/portfolioHome/#Skill'>Skills</a>
          </li>
          <li>
            <a href='/portfolioHome/#MyWork'>My work</a>
          </li>
          <li>
            <a href='/portfolioHome/#Contact'>Contact</a>
          </li>
        </div>
      </NavStyle>
    </>
  );
});

export default Nav;
