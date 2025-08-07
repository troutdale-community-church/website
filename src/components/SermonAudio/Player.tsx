import React, { useEffect, useState } from 'react';

interface PlayerProps {
  playlist: Array<{
    name: string;
    writer?: string;
    img?: string;
    src: string;
    id: number;
  }>;
}

function Player({ playlist }: PlayerProps) {
  const [AudioPlayer, setAudioPlayer] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Dynamically import the audio player on the client side
    import('react-modern-audio-player')
      .then((module) => {
        setAudioPlayer(() => module.default);
      })
      .catch((error) => {
        console.error('Failed to load audio player:', error);
      });
  }, []);

  if (!isMounted || !AudioPlayer || !playlist || playlist.length === 0) {
    return <div>Loading audio player...</div>;
  }

  return (
    <div>
      <AudioPlayer 
        playList={playlist}
        audioInitialState={{
          muted: false,
          volume: 0.5,
          curPlayId: playlist[0]?.id || 1,
        }}
      />
    </div>
  );
}

export default Player;
