export default function IceBathTimesList({ lastSevenIceBathTimes }) {
  return (
    <ul>
      <h2>Last seven ice bath times</h2>
      {lastSevenIceBathTimes.map((iceBathTime) => {
        return (
          <li key={iceBathTime.date}>
            {`${iceBathTime.date}: ${Math.floor(
              iceBathTime.iceBathCount / 60
            )}:${(iceBathTime.iceBathCount % 60)
              .toString()
              .padStart(2, "0")}`}{" "}
            <button>edit</button>
          </li>
        );
      })}
    </ul>
  );
}
