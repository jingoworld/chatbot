// src/chatbot/MessageParser.js

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("몇 살이니?")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
