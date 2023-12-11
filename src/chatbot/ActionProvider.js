// src/chatbot/ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // Example action
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend!");
    this.updateChatbotState(greetingMessage);
  }

  // Function to update the state of the chatbot
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
