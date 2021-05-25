import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  & .modalClose {
    display: none;
  }
  & .modalOpen {
    position: fixed;
    z-index: 400;
    width: 55vw;
    line-height: 4vh;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    background-color: white;
    color: rgb(24, 34, 34);
    border-radius: 10px;
  }
`;
export default function ({ isOpen, toggle, children }) {
  const node = useRef();
  const handleClick = () => {
    if (isOpen) toggle(!isOpen);
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <Modal ref={node}>
      <div className={isOpen ? 'modalOpen' : 'modalClose'}>{children}</div>
    </Modal>
  );
}
