import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../CSS/Help.css";

const ChatBox = () => {
  const [textData, setTextData] = useState("");
  const [question, setQuestion] = useState("");
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!listening && transcript) {
      setQuestion(transcript);
      run(transcript);
    }
  }, [listening, transcript]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      run(question);
    }
  };

  const run = async (query) => {
    try {
      const { data } = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_CHAT_ID}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: query }] }],
        },
      });
      const text = data.candidates?.[0]?.content?.parts[0]?.text;
      setTextData(text);
      setQuestion("");
      resetTranscript();
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <div className="chat_box">
      <h2>Chat with AI</h2>
      <hr />
      <h3>{textData}</h3>
      <div className="input_chtbox">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={() => run(question)}
          className="button_chat"
        >
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
        <button type="button" onClick={startListening} className="button_chat">
          <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
