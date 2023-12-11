// src/chatbot/MessageParser.js

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // 사용자의 메시지를 처리하는 로직
    this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
