// import React, { useState, useEffect, memo } from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const NavStyle = styled.div`
//   #Bars {
//     display: none;
//   }
//   .NavOff {
//     position: fixed;
//     left: 0;
//     top: 0;
//     z-index: 400;
//     width: 100vw;
//     height: 3rem;
//     align-items: center;
//     @media screen and (max-width: 425px) {
//       height: 0;
//       li {
//         margin: 0.3rem;
//       }
//       #Bars {
//         display: inline;
//         position: fixed;
//         z-index: 401;
//         left: 90%;
//         top: 0;
//         color: whitesmoke;
//       }
//       .barOn {
//         display: block;
//         position: fixed;
//         z-index: 400;
//         left: 0;
//         top: 0;
//         background-color: rgb(59, 87, 111);
//         height: 10rem;
//         width: 100vw;
//       }
//       .barOff {
//         display: none;
//       }
//     }
//     @media screen and (max-width: 768px) {
//       .barOff {
//         display: flex;
//         flex-direction: row;
//         /* align-items: center; */
//         .gitHubLink {
//           margin-right: auto;
//         }
//         li:not(.gitHubLink) {
//           margin: 0 0.5rem;
//         }

//         li {
//           height: 3rem;
//           padding-top: 1.5rem;
//           font-size: 1.2rem;
//           line-height: 1.5rem;
//         }
//       }
//     }
//   }
//   .NavOn {
//     position: fixed;
//     left: 0;
//     top: 0;
//     z-index: 400;
//     width: 100vw;
//     height: 4rem;
//     background-color: rgb(59, 87, 111);
//     align-items: center;
//     @media screen and (max-width: 425px) {
//       height: 0;
//       .barOn {
//         height: 0;
//         display: block;
//         position: fixed;
//         z-index: 400;
//         left: 0;
//         top: 0;
//         background-color: rgb(59, 87, 111);
//         height: 10rem;
//         width: 100vw;
//       }
//       .barOff {
//         display: none;
//       }
//       #Bars {
//         display: inline;
//         position: fixed;
//         z-index: 401;
//         left: 90%;
//         top: 0;
//         color: ghostwhite;
//       }
//       li {
//         margin: 0.4rem;
//       }
//     }
//     @media screen and (max-width: 768px) {
//       .barOff {
//         display: flex;
//         .gitHubLink {
//           margin-right: auto;
//         }
//         li:not(.gitHubLink) {
//           margin: 0 0.5rem;
//         }

//         li {
//           height: 3rem;
//           padding-top: 1.5rem;
//           font-size: 1.2rem;
//           line-height: 1.5rem;
//         }
//       }
//     }
//   }
//   li {
//     list-style: none;
//     a {
//       color: white;
//     }
//   }
// `;
// const Nav = ({
//   isIntroIntersected,
//   isAboutIntersected,
//   isSkillsIntersected,
//   isMyWorkIntersected,
//   isContactIntersected,
// }) => {
//   const [scrollY, setScrollY] = useState(0);
//   const [scrollToggle, setScrollToggle] = useState(false);
//   const [isBarOn, setIsBarOn] = useState(false);
//   const [windowSize, setWindowSize] = useState(
//     document.documentElement.clientWidth
//   );
//   useEffect(() => {
//     (() => {
//       window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
//       if (scrollY > 50) {
//         setScrollToggle(true);
//       } else if (scrollY < 50) {
//         setScrollToggle(false);
//       }
//     })();
//     return () => {
//       window.removeEventListener('scroll', () =>
//         setScrollY(window.pageYOffset)
//       );
//     };
//   });
//   console.log(windowSize);
//   return (
//     <>
//       <NavStyle>
//         <div className={scrollToggle ? 'NavOn' : 'NavOff'}>
//           <FontAwesomeIcon
//             id='Bars'
//             icon={faBars}
//             size='2x'
//             onClick={() => setIsBarOn(!isBarOn)}
//           />
//           <div className={isBarOn ? 'barOn' : 'barOff'}>
//             <li className='gitHubLink'>
//               <a
//                 href='https://github.com/zerozoo-front/portfolioHome'
//                 target='_blank'>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href='/portfolioHome/#Intro'>Intro</a>
//               {isIntroIntersected ? <span> 👈</span> : null}
//             </li>
//             <li>
//               <a href='/portfolioHome/#About'>About</a>
//               {isAboutIntersected ? <span> 👈</span> : null}
//             </li>
//             <li>
//               <a href='/portfolioHome/#MyWork'>My work</a>
//               {isMyWorkIntersected ? <span> 👈</span> : null}
//             </li>
//             <li>
//               <a href='/portfolioHome/#Skill'>Skills</a>
//               {isSkillsIntersected ? <span> 👈</span> : null}
//             </li>
//             <li>
//               <a href='/portfolioHome/#Contact'>Contact</a>
//               {isContactIntersected ? <span> 👈</span> : null}
//             </li>
//           </div>
//         </div>
//       </NavStyle>
//     </>
//   );
// };

// export default memo(Nav);

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ListStyle = styled.div`
  list-style-type: none;
  a {
    color: ghostWhite;
  }
  @media screen and (min-width: 768px) {
    #Bars {
      display: none;
    }
  }
`;
export default function Nav({
  isIntroIntersected,
  isAboutIntersected,
  isSkillsIntersected,
  isMyWorkIntersected,
  isContactIntersected,
  isBarOn,
  setIsBarOn,
}) {
  return (
    <>
      <ListStyle>
        <FontAwesomeIcon
          id='Bars'
          icon={faBars}
          size='2x'
          onClick={() => setIsBarOn(!isBarOn)}
        />

        {isBarOn ? (
          <div id='listWrapper'>
            <li className='gitHubLink'>
              <a
                href='https://github.com/zerozoo-front/portfolioHome'
                target='_blank'>
                GitHub
              </a>
            </li>
            <li>
              <a href='/portfolioHome/#Intro'>Intro</a>
              {isIntroIntersected ? <span> 👈</span> : null}
            </li>
            <li>
              <a href='/portfolioHome/#About'>About</a>
              {isAboutIntersected ? <span> 👈</span> : null}
            </li>
            <li>
              <a href='/portfolioHome/#MyWork'>My work</a>
              {isMyWorkIntersected ? <span> 👈</span> : null}
            </li>
            <li>
              <a href='/portfolioHome/#Skills'>Skills</a>
              {isSkillsIntersected ? <span> 👈</span> : null}
            </li>
            <li>
              <a href='/portfolioHome/#Contact'>Contact</a>
              {isContactIntersected ? <span> 👈</span> : null}
            </li>
          </div>
        ) : null}
      </ListStyle>
    </>
  );
}
