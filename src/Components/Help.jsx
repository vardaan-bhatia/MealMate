import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../SCSS/Help.scss";

const Help = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (!listening && transcript) {
      sendMessage(transcript);
    }
  }, [listening, transcript]);

  const sendMessage = async (message) => {
    setInput("");
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
      index: messages.length,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const { data } = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_CHAT_ID}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: message }] }],
        },
      });
      const text = data.candidates?.[0]?.content?.parts[0]?.text;
      const botMessage = {
        sender: "bot",
        text: text || "Error fetching response",
        index: messages.length + 1,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      resetTranscript();
    } catch (error) {
      console.error("Error generating content:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Error fetching response",
          index: messages.length + 1,
        },
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const lastMessageElement = messagesContainerRef.current.querySelector(
        `[data-index="${lastMessage.index}"]`
      );
      lastMessageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <>
      <center>
        <div className="chat-container">
          <h1 style={{ marginRight: "15rem" }}>Chat with AI</h1>
          <div className="chat-box">
            <div className="messages" ref={messagesContainerRef}>
              <div className="message bot-message">
                Hi 👋, Welcome to MealMate ! How can I assist you today? Fun
                fact: I'm faster than Zwiggy and Somato because I deliver
                answers, not just food! 🍔😉
              </div>
              {messages.map((message, index) => (
                <div
                  key={index}
                  data-index={message.index}
                  className={`message ${
                    message.sender === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(input);
                  }
                }}
              />
              <button onClick={() => sendMessage(input)}>Send</button>
              <button onClick={startListening}>
                <i className="fa fa-microphone" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Help;
