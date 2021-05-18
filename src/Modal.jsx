import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Modal = styled.div`
  & .modalClose {
    display: none;
  }
  & .modalOpen {
    position: fixed;
    width: 50%;
    height: auto;
    line-height: 8vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: rgb(24, 34, 34);
    border-radius: 10px;
  }
`;
export default function ({ isOpen, toggle, children }) {
  // const handleClick = (e) => {
  //   console.log(node.current.contains(e.target));
  //   if (node.current.contains(e.target)) {
  //     return;
  //   }
  //   if (isOpen) {
  //     console.log(node.current.contains(e.target));
  //     toggle(!isOpen);
  //   }
  // };

  // const node = useRef();
  // useEffect(() => {
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [isOpen]);
  const node = useRef();
  const handleClick = () => {
    if (isOpen) toggle(!isOpen);
    console.log("clicked");
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <Modal ref={node}>
      <div className={isOpen ? "modalOpen" : "modalClose"}>{children}</div>
    </Modal>
  );
}
