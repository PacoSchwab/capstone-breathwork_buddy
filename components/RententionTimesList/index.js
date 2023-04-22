import useLocalStore from "../useLocalStore";

export default function RetentionTimesList() {
  const storedTimes = useLocalStore((state) => state.storedTimes);
  const updateStoredTimes = useLocalStore((state) => state.updateStoredTimes);
  const lastSevenTimes = storedTimes.slice(-7);

  const handleEditRetentionTimes = (event, id) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const minutes = parseInt(data.editStoredMinutes, 10);
    const seconds = parseInt(data.editStoredSeconds, 10);

    const newCount = minutes * 60 + seconds;

    updateStoredTimes(id, newCount);
  };

  return (
    <>
      <ul>
        <h2>Last seven retention times</h2>
        {lastSevenTimes.map((time) => {
          return (
            <li key={time.id}>
              {`${time.date}: ${Math.floor(time.retentionCount / 60)}:${(
                time.retentionCount % 60
              )
                .toString()
                .padStart(2, "0")}`}{" "}
              <form
                onSubmit={(event) => handleEditRetentionTimes(event, time.id)}
              >
                <label htmlFor="editStoredMinutes">edit minutes</label>
                <input
                  id="editStoredMinutes"
                  type="number"
                  name="editStoredMinutes"
                  min={0}
                  max={3}
                  placeholder="minutes"
                  required
                />
                <label htmlFor="editStoredSeconds">edit seconds</label>
                <input
                  id="editStoredSeconds"
                  type="number"
                  name="editStoredSeconds"
                  min={0}
                  max={59}
                  placeholder="seconds"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </li>
          );
        })}
      </ul>
    </>
  );
}
