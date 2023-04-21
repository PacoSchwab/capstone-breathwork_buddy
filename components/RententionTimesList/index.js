import useLocalStore from "../useLocalStore";
import { useState } from "react";

export default function RetentionTimesList({ lastSevenTimes }) {
  const [entries, setEntries] = useState([lastSevenTimes]);

  const handleEditTimes = (event, lastSevenTimes) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("data:", data);

    console.log("lastSevenTimes:", lastSevenTimes);

    setEntries(
      entries.map((entry) => {
        const currentEntry = entry.date === lastSevenTimes.date;
        if (currentEntry) {
          return {
            date: lastSevenTimes.date,
            time: lastSevenTimes.time,
            retentionCount: `${Math.floor(data.editStoredMinutes / 60)}:${(
              data.editStoredSeconds % 60
            )
              .toString()
              .padStart(2, "0")}`,
          };
        } else {
          return entry;
        }
      })
    );
    console.log("entries:", entries);
  };

  return (
    <ul>
      <h2>Last seven retention times</h2>
      {lastSevenTimes.map((time) => {
        return (
          <li key={time.date}>
            {`${time.date}: ${Math.floor(time.retentionCount / 60)}:${(
              time.retentionCount % 60
            )
              .toString()
              .padStart(2, "0")}`}{" "}
            <form onSubmit={(event) => handleEditTimes(event, time)}>
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
  );
}
