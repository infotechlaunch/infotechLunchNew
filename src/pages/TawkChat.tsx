// JotformChatbot.jsx
import { useEffect } from 'react';

declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void;
    };
  }
}

const TawkChat = () => {
  useEffect(() => {
    // Create the Jotform embed script
    const jotformScript = document.createElement('script');
    jotformScript.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    jotformScript.async = true;
    document.body.appendChild(jotformScript);

    // Wait for the script to load and then initialize the chatbot
    jotformScript.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/01966ab2c1c37ab48c0c8b0ead872667da7a",
          rootId: "JotformAgent-01966ab2c1c37ab48c0c8b0ead872667da7a",
          formID: "01966ab2c1c37ab48c0c8b0ead872667da7a",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #FF98BC 0%, #FF98BC 100%)",
          buttonBackgroundColor: "#972D54",
          buttonIconColor: "#FFF",
          variant: false,
          customizations: {
            "greeting": "Yes",
            "greetingMessage": "Hi! How can I assist you?",
            "openByDefault": "No",
            "pulse": "Yes",
            "position": "right",
            "autoOpenChatIn": "10000"
          },
          isVoice: false,
        });
      }
    };
  }, []);

  return null; // This component does not render anything visibly
};

export default TawkChat;
