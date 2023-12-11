import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../components/Overview/Overview";
import MessageParser from "../chatbot/MessageParser";
import ActionProviderDocs from "../components/ActionProvider/ActionProviderDocs";
import DogPics from "../components/Mountain/DogPics";

const botName = "리액트봇";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(`안녕, 내 이름은${botName}이야. `),
    createChatBotMessage("무엇을 도와줄까?", {
      withAvatar: false,
      delay: 500,
      widget: "overview",
    }),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPics {...props} />,
    },
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParser {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
};

export default config;
