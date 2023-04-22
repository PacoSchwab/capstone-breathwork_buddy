import useLocalStore from "../useLocalStore";
import useClearEditing from "../useClearEditing";
import { StyledEditButton } from "../../styles/StyledEditButton";
import { StyledTrackingList } from "../../styles/StyledTrackingList";

export default function IceBathTimesList() {
  const storedIceBathTimes = useLocalStore((state) => state.storedIceBathTimes);
  const updateStoredIceBathTimes = useLocalStore(
    (state) => state.updateStoredIceBathTimes
  );
  const toggleIsEditingIceBathTime = useLocalStore(
    (state) => state.toggleIsEditingIceBathTime
  );
  const resetIsEditingIceBathTime = useLocalStore(
    (state) => state.resetIsEditingIceBathTime
  );
  const lastSevenIceBathTimes = storedIceBathTimes.slice(-7);

  const handleEditIceBathTimes = (event, id) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const minutes = parseInt(data.editStoredMinutes, 10);
    const seconds = parseInt(data.editStoredSeconds, 10);

    const newCount = minutes * 60 + seconds;

    updateStoredIceBathTimes(id, newCount);
  };

  useClearEditing(resetIsEditingIceBathTime);

  return (
    <>
      <StyledTrackingList>
        {lastSevenIceBathTimes.map((time) => {
          return (
            <li key={time.id}>
              {`${time.date}: ${Math.floor(time.iceBathCount / 60)}:${(
                time.iceBathCount % 60
              )
                .toString()
                .padStart(2, "0")}`}{" "}
              <StyledEditButton
                onClick={() => toggleIsEditingIceBathTime(time.id)}
              >
                {time.isEditingIceBathTime ? "Cancel" : "Edit"}
              </StyledEditButton>
              {time.isEditingIceBathTime && (
                <form
                  onSubmit={(event) => handleEditIceBathTimes(event, time.id)}
                >
                  <label htmlFor="editStoredMinutes">edit minutes</label>
                  <input
                    id="editStoredMinutes"
                    type="number"
                    name="editStoredMinutes"
                    min={0}
                    max={11}
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
                  <StyledEditButton type="submit">Submit</StyledEditButton>
                </form>
              )}
            </li>
          );
        })}
      </StyledTrackingList>
    </>
  );
}
