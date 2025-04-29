import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Amritanshu_india from "../assets/Audios/Amritanshu_india.mp4";
import ammy_uk from "../assets/Audios/ammy_uk.mp4";
import Ethan_american from "../assets/Audios/Ethan_american.mp4";
import Monika_india from "../assets/Audios/Monika_india.mp4";
import paola_american from "../assets/Audios/paola_american.mp4";
import samad_india from "../assets/Audios/samad_india.mp4";
import santiago_spanish from "../assets/Audios/santiago_spanish.mp4";
import victoria_american from "../assets/Audios/victoria_american.mp4";
import steve_american from "../assets/Audios/steve_american.mp4";
import zuri_american from "../assets/Audios/zuri_american.mp4";
import ryan_american from "../assets/Audios/ryan_american.mp4";
import susan_american from "../assets/Audios/susan_american.mp4";
import echo_american from "../assets/Audios/echo_american.mp4";
import shimmer_american from "../assets/Audios/shimmer_american.mp4";
import briyan_american from "../assets/Audios/briyan_american.mp4";

const PlayAudio = () => {

  type Voice = {
    id: number;
    name: string;
    gender: 'Male' | 'Female';
    accent: Accent;
    avatar: string;
    audioFile: string;
  };

  type Accent = 
    | 'British English'
    | 'Indian English'
    | 'American English'
    | 'Spanish'
    | 'Polish'
    | 'French'
    | 'UK English';

  type VoiceCardProps = {
    voice: Voice;
  };

  const voices: Voice[] = [
    { id: 1, name: 'Amritanshu', gender: 'Male', accent: 'Indian English', avatar: '👩🏻', audioFile: Amritanshu_india },
    { id: 2, name: 'Ammy', gender: 'Female', accent: 'UK English', avatar: '👩🏽', audioFile: ammy_uk },
    { id: 3, name: 'Ethan', gender: 'Male', accent: 'American English', avatar: '👩🏼', audioFile: Ethan_american },
    { id: 4, name: 'Monika', gender: 'Female', accent: 'Indian English', avatar: '👩🏽', audioFile: Monika_india },
    { id: 5, name: 'Paola', gender: 'Female', accent: 'American English', avatar: '👩🏻', audioFile: paola_american },
    { id: 6, name: 'Samad', gender: 'Male', accent: 'Indian English', avatar: '👨🏻', audioFile: samad_india },
    { id: 7, name: 'Santiago', gender: 'Male', accent: 'Spanish', avatar: '👨🏽', audioFile: santiago_spanish },
    { id: 8, name: 'Victoria', gender: 'Female', accent: 'American English', avatar: '👨🏻', audioFile: victoria_american },
    { id: 9, name: 'Steve', gender: 'Male', accent: 'American English', avatar: '👨🏽', audioFile: steve_american },
    { id: 10, name: 'Zuri', gender: 'Female', accent: 'American English', avatar: '👨🏻', audioFile: zuri_american },
    { id: 11, name: 'Ryan', gender: 'Male', accent: 'American English', avatar: '👨🏾‍🦱', audioFile: ryan_american },
    { id: 12, name: 'Susan', gender: 'Female', accent: 'American English', avatar: '👩🏼‍🦰', audioFile: susan_american },
    { id: 13, name: 'Echo', gender: 'Male', accent: 'American English', avatar: '👨🏽‍🦳', audioFile: echo_american },
    { id: 14, name: 'Shimmer', gender: 'Female', accent: 'American English', avatar: '👨🏼‍🦰', audioFile: shimmer_american },
    { id: 15, name: 'Briyan', gender: 'Male', accent: 'American English', avatar: '👩🏽', audioFile: briyan_american },
  ];
  

  // Voice Card Component
  const VoiceCard: React.FC<VoiceCardProps> = ({ voice }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timer, setTimer] = useState('0:00/0:00');
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const updateProgress = () => {
        if (audio.duration > 0) {
          const current = audio.currentTime;
          const duration = audio.duration;
          setProgress(current / duration);
          setTimer(`${formatTime(current)}/${formatTime(duration)}`);
        }
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setProgress(0);
        setTimer('0:00/0:00');
      });

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
      };
    }, []);

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const playVoice = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    };

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
        <audio ref={audioRef} src={voice.audioFile} preload="auto" />
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
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
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

  const containerStyles = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '1rem'
  };

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
    color: '#ffffff'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1rem'
  };

  return (
    <div style={containerStyles} className='bg-gradient-blue-red'>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-aos="fade-up">
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

      <div style={gridContainerStyle}>
        {voices.map((voice, index) => {
          const isTopRow = index < 4;
          return (
            <motion.div
              key={voice.id}
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
              <VoiceCard voice={voice} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayAudio;
