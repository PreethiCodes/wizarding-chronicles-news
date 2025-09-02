import React, { useRef, useState, useEffect } from "react";

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="magical-audio-player">
      <audio
        ref={audioRef}
        src="/audio.mp3"
        loop
        preload="auto"
      />
      
      <div className="audio-controls">
        <button 
          onClick={togglePlay}
          className="audio-toggle-btn"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
        
        <div className="volume-control">
          <span className="volume-icon">🎵</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundAudio;
