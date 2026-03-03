import React, { useEffect } from "react";

export default function ChatBot() {

  useEffect(() => {
    const dfMessenger = document.createElement("df-messenger");

    dfMessenger.setAttribute("intent", "WELCOME");
    dfMessenger.setAttribute("chat-title", "PortfolioAssistant");
    dfMessenger.setAttribute("agent-id", "3c20a11b-a14b-4a5e-a7f2-4509796bde01");
    dfMessenger.setAttribute("language-code", "en");

    document.body.appendChild(dfMessenger);
  }, []);

  return null;
}