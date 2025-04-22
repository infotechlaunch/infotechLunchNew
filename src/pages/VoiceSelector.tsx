import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VoiceSelector = () => {
  // Voice data with dummy audio text
//   const voices = [
//     { id: 1, name: 'Sophie Heart', gender: 'Female', accent: 'British Accent - English', avatar: '👩🏻', sample: "Hello, I'm Sophie with a British accent." },
//     { id: 2, name: 'Puja Sancha', gender: 'Female', accent: 'Indian Accent - English', avatar: '👩🏽', sample: "Hello, I'm Puja with an Indian accent." },
//     { id: 3, name: 'Anna Bogna', gender: 'Female', accent: 'Polish Accent - Polish', avatar: '👩🏼', sample: "Cześć, jestem Anna z polskim akcentem." },
//     { id: 4, name: 'Maya Isabella', gender: 'Female', accent: 'Spanish Accent - Spanish', avatar: '👩🏽', sample: "Hola, soy Maya con acento español." },
//     { id: 5, name: 'Victoria Bow', gender: 'Female', accent: 'American Accent - English', avatar: '👩🏻', sample: "Hi there, I'm Victoria with an American accent." },
//     { id: 6, name: 'Louis Gabriel', gender: 'Male', accent: 'French Accent - French', avatar: '👨🏻', sample: "Bonjour, je suis Louis avec un accent français." },
//     { id: 7, name: 'Johnathan Kart', gender: 'Male', accent: 'American Accent - English', avatar: '👨🏽', sample: "Hey, I'm Johnathan with an American accent." },
//     { id: 8, name: 'Daren Joe', gender: 'Male', accent: 'British Accent - English', avatar: '👨🏻', sample: "Hello there, I'm Daren with a British accent." },
//     { id: 9, name: 'Kaji Ali', gender: 'Male', accent: 'Indian Accent - English', avatar: '👨🏽', sample: "Hello, I'm Kaji with an Indian accent." },
//     { id: 10, name: 'Louis Gabriel', gender: 'Male', accent: 'French Accent - French', avatar: '👨🏻', sample: "Bonjour, je m'appelle Louis avec un accent français." },
//   ];

const voices: Voice[] = [
    { id: 1, name: 'Isabella West', gender: 'Female', accent: 'British English', avatar: '👩🏻', sample: "Greetings, I'm Isabella with a British accent." },
    { id: 2, name: 'Ananya Sharma', gender: 'Female', accent: 'Indian English', avatar: '👩🏽', sample: "Hello, I'm Ananya with an Indian accent." },
    { id: 3, name: 'Elzbieta Kowalski', gender: 'Female', accent: 'Polish', avatar: '👩🏼', sample: "Cześć, jestem Elzbieta z polskim akcentem." },
    { id: 4, name: 'Lucia Fernandez', gender: 'Female', accent: 'Spanish', avatar: '👩🏽', sample: "Hola, soy Lucia con acento español." },
    { id: 5, name: 'Madeline Hayes', gender: 'Female', accent: 'American English', avatar: '👩🏻', sample: "Hi, I'm Madeline with an American accent." },
    { id: 6, name: 'Pierre Dubois', gender: 'Male', accent: 'French', avatar: '👨🏻', sample: "Bonjour, je suis Pierre avec un accent français." },
    { id: 7, name: 'Ethan Brooks', gender: 'Male', accent: 'American English', avatar: '👨🏽', sample: "Hey, I'm Ethan with an American accent." },
    { id: 8, name: 'Oliver Clarke', gender: 'Male', accent: 'British English', avatar: '👨🏻', sample: "Hello, I'm Oliver with a British accent." },
    { id: 9, name: 'Ravi Patel', gender: 'Male', accent: 'Indian English', avatar: '👨🏽', sample: "Hi, I'm Ravi with an Indian accent." },
    { id: 10, name: 'Jean-Luc Charpentier', gender: 'Male', accent: 'French', avatar: '👨🏻', sample: "Bonjour, je m'appelle Jean-Luc avec un accent français." },
];

  type Voice = {
    id: number;
    name: string;
    gender: 'Male' | 'Female';
    // accent: string;
    accent: Accent;
    avatar: string;
    sample: string;
  };

  type Accent = 
  | 'British English'
  | 'Indian English'
  | 'American English'
  | 'Spanish'
  | 'Polish'
  | 'French';

  type VoiceCardProps = {
    voice: Voice;
  };
  
  // Voice Card Component with framer-motion animations
  const VoiceCard:  React.FC<VoiceCardProps> = ({ voice }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timer, setTimer] = useState('0:00/0:05');
    
    // Function to simulate voice playback
    const playVoice = () => {
      if (isPlaying) {
        setIsPlaying(false);
        setProgress(0);
        setTimer('0:00/0:05');
        window.speechSynthesis.cancel();
        return;
      }
      
      setIsPlaying(true);
      
      // Create speech synthesis
      const utterance = new SpeechSynthesisUtterance(voice.sample);
      
      // Try to match voice based on language
      const voices = window.speechSynthesis.getVoices();
      let voiceMatch;
      
      // if (voice.accent.includes('Spanish')) {
      //   voiceMatch = voices.find(v => v.lang.includes('es'));
      // } else if (voice.accent.includes('Polish')) {
      //   voiceMatch = voices.find(v => v.lang.includes('pl'));
      // } else if (voice.accent.includes('French')) {
      //   voiceMatch = voices.find(v => v.lang.includes('fr'));
      // } else if (voice.accent.includes('Indian')) {
      //   voiceMatch = voices.find(v => v.lang.includes('en'));
      // } else if (voice.accent.includes('British')) {
      //   voiceMatch = voices.find(v => v.lang.includes('en-GB'));
      // } else {
      //   voiceMatch = voices.find(v => v.lang.includes('en-US'));
      // }

      if (voice.accent.includes('Spanish')) {
        voiceMatch = voices.find(v => v.lang.includes('es'));
      } else if (voice.accent.includes('Polish')) {
        voiceMatch = voices.find(v => v.lang.includes('pl'));
      } else if (voice.accent.includes('French')) {
        voiceMatch = voices.find(v => v.lang.includes('fr'));
      } else if (voice.accent.includes('Indian English')) {
        voiceMatch = voices.find(v => v.lang.includes('hi-IN'));
      } else if (voice.accent.includes('British English')) {
        voiceMatch = voices.find(v => v.lang.includes('en-GB'));
      } else if (voice.accent.includes('American English')) {
        voiceMatch = voices.find(v => v.lang.includes('en-US'));
      } else {
        // fallback to any English voice
        voiceMatch = voices.find(v => v.lang.includes('en'));
      }
      
      
      if (voiceMatch) {
        utterance.voice = voiceMatch;
      }
      
      // Set gender-appropriate pitch
      if (voice.gender === 'Female') {
        utterance.pitch = 1.1;
      } else {
        // utterance.pitch = 0.8;
        utterance.pitch = 0.5;
      }
      
      // Handle playback events
      utterance.onstart = () => {
        let elapsed = 0;
        const interval = setInterval(() => {
          elapsed += 100;
          const progressValue = Math.min(elapsed / 5000, 1);
          setProgress(progressValue);
          
          const seconds = Math.floor(elapsed / 1000);
          const totalSeconds = 5;
          setTimer(`0:${seconds.toString().padStart(2, '0')}/0:0${totalSeconds}`);
          
          if (elapsed >= 5000) {
            clearInterval(interval);
            setTimeout(() => {
              setIsPlaying(false);
              setProgress(0);
              setTimer('0:00/0:05');
            }, 500);
          }
        }, 100);
      };
      
      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(0);
        setTimer('0:00/0:05');
      };
      
      // Play the voice
      window.speechSynthesis.speak(utterance);
    };
    
    // Ensure speech synthesis is initialized
    useEffect(() => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
      }
    }, []);

    const cardStyle = {
      backgroundColor: '#212529',
      borderRadius: '0.375rem',
      padding: '1rem',
      marginBottom: '1rem'
    };

    const avatarContainerStyle = {
      backgroundColor: 'rgba(108, 117, 125, 0.25)',
      borderRadius: '50%',
      padding: '0.5rem',
      marginRight: '0.75rem'
    };

    const flexContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    };

    const nameStyle = {
      color: 'white',
      fontWeight: '500',
      margin: 0
    };

    const smallTextStyle = {
      color: '#6c757d',
      fontSize: '0.875rem',
      margin: 0
    };

    const accentTextStyle = {
      color: '#6c757d',
      fontSize: '0.875rem',
      marginBottom: '1rem'
    };

    const buttonStyle = {
      backgroundColor: isPlaying ? '#dc3545' : 'transparent',
      color: 'white',
      border: isPlaying ? 'none' : '1px solid white',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
      marginRight: '0.5rem',
      cursor: 'pointer'
    };

    const timerStyle = {
      color: '#6c757d',
      fontSize: '0.875rem',
      marginRight: '0.5rem'
    };

    const progressContainerStyle = {
      backgroundColor: 'rgba(108, 117, 125, 0.25)',
      borderRadius: '0.25rem',
      height: '6px',
      flexGrow: 1,
      overflow: 'hidden'
    };

    return (
      <motion.div 
        style={cardStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <div style={flexContainerStyle}>
          <div style={avatarContainerStyle}>
            <span style={{ fontSize: '1.5rem' }}>{voice.avatar}</span>
          </div>
          <div>
            <h3 style={nameStyle}>{voice.name}</h3>
            <p style={smallTextStyle}>{voice.gender}</p>
          </div>
        </div>
        <p style={accentTextStyle}>{voice.accent}</p>
        <div style={flexContainerStyle}>
          <button 
            style={buttonStyle}
            onClick={playVoice}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            )}
          </button>
          <span style={timerStyle}>{timer}</span>
          <div style={progressContainerStyle}>
            <motion.div 
              style={{
                backgroundColor: '#dc3545',
                height: '100%',
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    );
  };

  // Initialize speech synthesis voices when component loads
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Firefox and some browsers need this to get the voices
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const containerStyles = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '1rem'
  };

//   const headerContainerStyle = {
//     textAlign: 'center',
//     marginBottom: '2rem'
//   };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#212529',
    padding: '0.5rem 0.75rem',
    borderRadius: '999px',
    marginBottom: '1rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    // color: '#6c757d'
    color: '#ffffff'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1rem'
  };

  return (
    <div style={containerStyles} className='bg-gradient-blue-red'>
      <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
        }} data-aos="fade-up">
        <div style={badgeStyle}>
          <span style={{ marginRight: '0.5rem' }}>🎙️</span>
          <span style={{ fontSize: '1rem' }}>Our Voices</span>
        </div>
        <motion.h1 
          style={titleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Meet Our Most Loved Voices
        </motion.h1>
        <motion.p 
          style={subtitleStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          From different languages to a variety of accents and genders, we offer voices that fit every personality.
        </motion.p>
      </div>

      {/* <div style={gridContainerStyle}>
        {voices.map((voice, index) => (
          <motion.div
            key={voice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <VoiceCard voice={voice} />
          </motion.div>
        ))}
      </div> */}

        <div style={gridContainerStyle}>
        {voices.map((voice, index) => {
            const isTopRow = index < 4;

            return (
            // <motion.div
            //     key={voice.id}
            //     initial={{ opacity: 0, y: 20 }}
            //     animate={{
            //         opacity: 1,
            //         y: [0, isTopRow ? -5 : 5, 0], // vertical subtle bounce
            //         x: isTopRow ? [0, -10, 0] : [0, 10, 0], // left-right for top, right-left for bottom
            //     }}
            //     transition={{
            //         delay: 0.1 * index,
            //         repeat: Infinity,
            //         duration: 3,
            //         ease: 'easeInOut',
            //     }}
            // >
            //     <VoiceCard voice={voice} />
            // </motion.div>

            <motion.div
                key={voice.id}
                // style={{ display: 'flex', justifyContent: 'center' }}
                animate={{
                    x: isTopRow ? [0, -10, 0] : [0, 10, 0],
                }}
                transition={{
                    delay: 0.1 * index,
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                }}
                >
                <VoiceCard key={voice.id} voice={voice} />
            </motion.div>
            );
        })}
        </div>
    </div>
  );
};

export default VoiceSelector;