import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryContainer,
} from "victory";
import useLocalStore from "../useLocalStore";
import { StyledTitle } from "../../styles/StyledTitle";

export default function TrackingSection() {
  const storedTimes = useLocalStore((state) => state.storedTimes);

  const lastSevenTimes = storedTimes.slice(-7);

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <StyledTitle>Retention Tracker</StyledTitle>
        <VictoryChart
          domainPadding={{ x: 50, y: 0 }}
          animate={{ duration: 1000, easing: "bounce" }}
          containerComponent={
            <VictoryContainer
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
                backgroundSize: "cover",
                borderRadius: "20px",
                border: "3px solid #454545",
                boxShadow:
                  "0px 35px 68px 0px rgba(255, 165, 89, 0.5), inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
                backdropFilter: "blur(3px)",
              }}
            />
          }
        >
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5, 6]}
            tickFormat={lastSevenTimes.map(
              (entry) => entry.date + "\n" + entry.time
            )}
            style={{
              tickLabels: { fontSize: 10 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickCount={10}
            tickFormat={(t) => `${t}s`}
            style={{
              axis: { stroke: "none" },
              ticks: { stroke: "none" },
              tickLabels: { fontSize: 12 },
            }}
            domain={[0, 240]}
          />
          <VictoryBar
            data={lastSevenTimes}
            x={"date" + "time"}
            y={"retentionCount"}
            style={{
              data: {
                width: 20,
                fill: "#FF6000",
              },
            }}
          />
        </VictoryChart>
      </div>
    </>
  );
}
