const useTimeFormatter = ({ retentionCount }) => {
  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(retentionCount / 60);
  const seconds = retentionCount % 60;
  const displayTime = `${formattedTime(minutes)}:${formattedTime(seconds)}`;

  return {
    displayTime,
  };
};

export default useTimeFormatter;
