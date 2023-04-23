import useLocalStore from "../useLocalStore";
import useClearEditing from "../useClearEditing";
import { StyledEditButton } from "../../styles/StyledEditButton";
import { StyledTrackingList } from "../../styles/StyledTrackingList";
import { StyledInputField } from "../../styles/StyledInputField";

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
  const deleteStoredIceBathTime = useLocalStore(
    (state) => state.deleteStoredIceBathTime
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

  const handleDeleteIceBathTimes = (id) => {
    window.confirm("Are you sure?") && deleteStoredIceBathTime(id);
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
                  <label htmlFor="editStoredMinutes">minutes</label>
                  <StyledInputField
                    id="editStoredMinutes"
                    type="number"
                    name="editStoredMinutes"
                    min={0}
                    max={11}
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
              <StyledEditButton
                onClick={() => handleDeleteIceBathTimes(time.id)}
              >
                Delete
              </StyledEditButton>
            </li>
          );
        })}
      </StyledTrackingList>
    </>
  );
}
