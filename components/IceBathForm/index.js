import useLocalStore from "../useLocalStore";

export default function IceBathForm() {
  const iceBathDuration = useLocalStore((state) => state.iceBathDuration);
  const addIceBathDuration = useLocalStore((state) => state.addIceBathDuration);

  const handleSubmit = (event) => {
    event.preventDefault();
    addIceBathDuration(event.target.iceBathDuration.value);

    console.log("iceBathDuration:", event.target.iceBathDuration.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="iceBathDuration">
        How long did you stay in the ice bath?
      </label>
      <input
        id="iceBathDuration"
        type="number"
        name="iceBathDuration"
        placeholder="in seconds"
        min="0"
        max="900"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
