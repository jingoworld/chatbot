// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("안녕")) {
      actions.handleHello();
    }
    if (message.includes("개")) {
      actions.handleDog();
    }
    if (message.includes("hi")) {
      actions.handleHi();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
