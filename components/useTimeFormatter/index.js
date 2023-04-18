const useTimeFormatter = (count) => {
  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const displayTime = `${formattedTime(minutes)}:${formattedTime(seconds)}`;

  return {
    displayTime,
  };
};

export default useTimeFormatter;
