import { useState } from "react";
import useSound from "use-sound";

export default function useAudio({ breathIntervalDelay }) {
  let playCounter;
  let playCounterMusic;
  if (breathIntervalDelay === "2000") {
    playCounter = "/audio/powerBreathingCounter.mp3";
    playCounterMusic = "/audio/powerBreathingCounterMusic.mp3";
  } else {
    playCounter = "/audio/focusedBreathingCounter.mp3";
    playCounterMusic = "/audio/focusedBreathingCounterMusic.mp3";
  }

  const [audioVolume, setAudioVolume] = useState(0.5);
  const [musicVolume, setMusicVolume] = useState(0.5);

  const [playCounterSound, { stop: stopCounter }] = useSound(playCounter, {
    volume: audioVolume,
  });
  const [playCounterMusicSound, { stop: stopCounterMusic }] = useSound(
    playCounterMusic,
    { volume: musicVolume }
  );
  const [playRetentionMusic, { stop: stopRetentionMusic }] = useSound(
    "/audio/breathingRetentionMusic.mp3",
    { volume: musicVolume }
  );
  const [playCountdown, { stop: stopCountdown }] = useSound(
    "/audio/breathingCountdown.mp3",
    { volume: audioVolume }
  );
  const [playCountdownMusic, { stop: stopCountdownMusic }] = useSound(
    "/audio/breathingCountdownMusic.mp3",
    { volume: musicVolume }
  );
  const [playTripleCounter, { stop: stopTripleCounter }] = useSound(
    "/audio/tripleCounter.mp3",
    { volume: audioVolume }
  );

  const [playTripleCounterMusic, { stop: stopTripleCounterMusic }] = useSound(
    "/audio/tripleCounterMusic.mp3",
    { volume: musicVolume }
  );

  const [playGong] = useSound("/audio/gong.mp3");

  return {
    playCounter: playCounterSound,
    stopCounter,
    playCounterMusic: playCounterMusicSound,
    stopCounterMusic,
    playRetentionMusic,
    stopRetentionMusic,
    playCountdown,
    stopCountdown,
    playCountdownMusic,
    stopCountdownMusic,
    playTripleCounter,
    stopTripleCounter,
    playTripleCounterMusic,
    stopTripleCounterMusic,
    audioVolume,
    setAudioVolume,
    musicVolume,
    setMusicVolume,
    playGong,
  };
}
