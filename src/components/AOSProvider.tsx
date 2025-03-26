import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      disable: false, // Enable for all devices
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 0,
      throttleDelay: 99,
      offset: 30,
      delay: 0,
      duration: 1000,
      easing: "cubic-bezier(.215, .61, .355, 1)",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS periodically
    const interval = setInterval(() => {
      AOS.refresh();
    }, 250);

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
