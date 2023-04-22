import useLocalStore from "../useLocalStore";
import useClearEditing from "../useClearEditing";
import { StyledEditButton } from "../../styles/StyledEditButton";
import { StyledTrackingList } from "../../styles/StyledTrackingList";
import { StyledInputField } from "../../styles/StyledInputField";

export default function RetentionTimesList() {
  const storedTimes = useLocalStore((state) => state.storedTimes);
  const updateStoredTimes = useLocalStore((state) => state.updateStoredTimes);
  const toggleIsEditingRetentionTime = useLocalStore(
    (state) => state.toggleIsEditingRetentionTime
  );
  const resetIsEditingRetentionTime = useLocalStore(
    (state) => state.resetIsEditingRetentionTime
  );
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

  useClearEditing(resetIsEditingRetentionTime);

  return (
    <>
      <StyledTrackingList>
        {lastSevenTimes.map((time) => {
          return (
            <li key={time.id}>
              {`${time.date}: ${Math.floor(time.retentionCount / 60)}:${(
                time.retentionCount % 60
              )
                .toString()
                .padStart(2, "0")}`}{" "}
              <StyledEditButton
                onClick={() => toggleIsEditingRetentionTime(time.id)}
              >
                {time.isEditingRetentionTime ? "Cancel" : "Edit"}
              </StyledEditButton>
              {time.isEditingRetentionTime && (
                <form
                  onSubmit={(event) => handleEditRetentionTimes(event, time.id)}
                >
                  <label htmlFor="editStoredMinutes">minutes</label>
                  <StyledInputField
                    id="editStoredMinutes"
                    type="number"
                    name="editStoredMinutes"
                    min={0}
                    max={3}
                    placeholder="mm"
                    required
                  />
                  <label htmlFor="editStoredSeconds">seconds</label>
                  <StyledInputField
                    id="editStoredSeconds"
                    type="number"
                    name="editStoredSeconds"
                    min={0}
                    max={59}
                    placeholder="ss"
                    required
                  />
                  <StyledEditButton type="submit">Confirm</StyledEditButton>
                </form>
              )}
            </li>
          );
        })}
      </StyledTrackingList>
    </>
  );
}
