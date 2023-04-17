const useVolumeControl = ({ audio, music }) => {
  const handleIncreaseAudioVolume = () => {
    audio.setVolume(audio.volume + 0.1);
  };

  const handleDecreaseAudioVolume = () => {
    audio.setVolume(audio.volume - 0.1);
  };

  const handleIncreaseMusicVolume = () => {
    music.setVolume(music.volume + 0.1);
  };

  const handleDecreaseMusicVolume = () => {
    music.setVolume(music.volume - 0.1);
  };

  return {
    handleIncreaseAudioVolume,
    handleDecreaseAudioVolume,
    handleIncreaseMusicVolume,
    handleDecreaseMusicVolume,
  };
};

export default useVolumeControl;
