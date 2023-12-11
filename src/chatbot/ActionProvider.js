// src/chatbot/ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // OpenAI API에 메시지를 보내고 응답을 처리하는 함수
  callChatGPT = async (userMessage) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 개발 목적으로만 사용하고, 배포 시에는 서버를 통해야 합니다.
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = this.createChatBotMessage(data.choices[0].text);

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  // 사용자 메시지를 받아 AI에 요청하는 함수
  handleUserMessage = (userMessage) => {
    this.callChatGPT(userMessage);
  };
}

export default ActionProvider;
