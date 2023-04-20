import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 500,
  exit: 1000,
};

const modal = (props) => {
  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      onEnter={() => {
        console.log("Enter");
      }}
      onEntering={() => {
        console.log("Entering");
      }}
      onEntered={() => {
        console.log("Entered");
      }}
      onExit={() => {
        console.log("Exit");
      }}
      onExiting={() => {
        console.log("Exiting");
      }}
      onExited={() => {
        console.log("Exited");
      }}
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
