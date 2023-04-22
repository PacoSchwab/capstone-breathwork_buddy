import useLocalStore from "../useLocalStore";

export default function RetentionTimesList() {
  const storedTimes = useLocalStore((state) => state.storedTimes);
  const storedIceBathTimes = useLocalStore((state) => state.storedIceBathTimes);
  const updateStoredTimes = useLocalStore((state) => state.updateStoredTimes);
  const lastSevenTimes = storedTimes.slice(-7);
  const lastSevenIceBathTimes = storedIceBathTimes.slice(-7);
  const updateStoredIceBathTimes = useLocalStore(
    (state) => state.updateStoredIceBathTimes
  );

  const handleEditTimes = (event, id) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const minutes = parseInt(data.editStoredMinutes, 10);
    const seconds = parseInt(data.editStoredSeconds, 10);

    const newRetentionCount = minutes * 60 + seconds;

    updateStoredTimes(id, newRetentionCount);
    updateStoredIceBathTimes(id, newRetentionCount);
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
              <form onSubmit={(event) => handleEditTimes(event, time.id)}>
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

      <ul>
        <h2>Last seven ice bath times</h2>
        {lastSevenIceBathTimes.map((time) => {
          return (
            <li key={time.id}>
              {`${time.date}: ${Math.floor(time.iceBathCount / 60)}:${(
                time.iceBathCountCount % 60
              )
                .toString()
                .padStart(2, "0")}`}{" "}
              <form onSubmit={(event) => handleEditTimes(event, time.id)}>
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
