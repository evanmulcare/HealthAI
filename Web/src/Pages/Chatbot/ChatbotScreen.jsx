import React, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import ChatbotView from "./ChatbotView";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fewShotLearnings, roleplayPrompt } from "../../Data/ChatbotData";

const Chatbot = () => {
  const { t } = useTranslation();
  const API_KEY = process.env.CHATBOT_API_KEY;
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const currentUserData = users.find((user) => user.docId === currentUser?.uid);

  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initial message from the chat assistant to ask a question
    setMessages([
      {
        message: t("chatbot.opener"),
        sender: "ChatGPT",
      },
    ]);
  }, [t]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setThinking(true);

    await sendToChatGPT(newMessages);
  };

  const sendToChatGPT = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
      content: messageObject.message,
    }));

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [roleplayPrompt, ...fewShotLearnings, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      const data = await response.json();
      const chatbotResponse = data.choices[0].message.content;

      setMessages([
        ...chatMessages,
        { message: chatbotResponse, sender: "ChatGPT" },
      ]);

      setThinking(false);
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  return (
    <ChatbotView
      messages={messages}
      thinking={thinking}
      handleSend={handleSend}
      currentUserData={currentUserData}
    />
  );
};

export default Chatbot;
