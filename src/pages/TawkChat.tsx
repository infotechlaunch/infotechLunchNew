import { useEffect } from "react";

// Declare Tawk_API on the window object
declare global {
  interface Window {
    Tawk_API?: {
      onLoad: (callback: () => void) => void;
      sendMessage: (message: string) => void;
      showWidget: () => void;
      hideWidget: () => void;
    };
  }
}

const TawkChat = () => {
  useEffect(() => {
    console.log("Loading Tawk.to script...");

    // Check if script is already loaded
    if (document.getElementById("tawk-script")) {
      console.log("Tawk.to script already loaded.");
      return;
    }

    // Create Tawk.to script dynamically
    const script = document.createElement("script");
    script.id = "tawk-script";
    script.src = "https://embed.tawk.to/67ce9476875b89190ded50ba/1ilvf7sr9";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    script.onload = () => {
      console.log("Tawk.to script loaded.");

      if (window.Tawk_API) {
        window.Tawk_API.onLoad(() => {
          console.log("Tawk.to API is ready.");
          window.Tawk_API?.sendMessage("Hello! How can I assist you today?");
        });
      } else {
        console.log("Tawk_API not found.");
      }
    };

    return () => {
      console.log("Tawk.to script cleanup...");
    };
  }, []);

  // Function to send a custom message
  // const sendMessage = () => {
  //   if (window.Tawk_API) {
  //     console.log("Sending message via Tawk.to API.");
  //     window.Tawk_API.sendMessage("Thanks for reaching out! How can I assist?");
  //   } else {
  //     console.log("Tawk_API is not available.");
  //   }
  // };

  return (
    <></>
    // <div>
    //   <button 
    //     onClick={sendMessage} 
    //     className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
    //   >
    //     Send Automated Reply
    //   </button>
    // </div>
  );
};

export default TawkChat;
