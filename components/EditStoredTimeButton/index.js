import useLocalStore from "../useLocalStore";

export default function EditStoredTimeForm() {
  const storedTimes = useLocalStore((state) => state.storedTimes);
  const editStoredTime = useLocalStore((state) => state.editStoredTime);

  return (
    <>
      <form onSubmit={editStoredTime}>
        <label htmlFor="editStoredMinutes">edit minutes</label>
        <input
          id="editStoredMinutes"
          type="number"
          name="editStoredMinutes"
          max={59}
          placeholder="minutes"
          required
        />
        <label htmlFor="editStoredSeconds">edit seconds</label>
        <input
          id="editStoredSeconds"
          type="number"
          name="editStoredSeconds"
          max={59}
          placeholder="seconds"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
