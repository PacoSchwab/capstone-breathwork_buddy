import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryContainer,
} from "victory";
import useLocalStore from "../useLocalStore";
import { StyledTitle } from "../../styles/StyledTitle";
import RetentionTimesList from "../RententionTimesList";
import IceBathTimesList from "../IceBathTimesList";
import EditStoredTimeForm from "../EditStoredTimeButton";

export default function TrackingSection() {
  const storedTimes = useLocalStore((state) => state.storedTimes);
  const lastSevenTimes = storedTimes.slice(-7);

  const storedIceBathTimes = useLocalStore((state) => state.storedIceBathTimes);
  const lastSevenIceBathTimes = storedIceBathTimes.slice(-7);

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <StyledTitle>Retention Tracker</StyledTitle>
        <VictoryChart
          domainPadding={{ x: 0, y: 0 }}
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
              tickLabels: { fontSize: 11 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickCount={17}
            tickFormat={(t) =>
              `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
            }
            style={{
              axis: { stroke: "none" },
              ticks: { stroke: "none" },
              tickLabels: { fontSize: 13 },
            }}
            domain={[0, 4 * 60]}
            tickValues={Array.from({ length: 17 * 4 }).map((_, i) => i * 15)}
          />
          <VictoryBar
            data={lastSevenTimes.map((entry) => ({
              date: entry.date + "\n" + entry.time,
              retentionCount: parseInt(entry.retentionCount),
            }))}
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
        <RetentionTimesList lastSevenTimes={lastSevenTimes} />
        <StyledTitle>Ice Bath Tracker</StyledTitle>
        <VictoryChart
          domainPadding={{ x: 0, y: 0 }}
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
            tickFormat={lastSevenIceBathTimes.map(
              (entry) => entry.date + "\n" + entry.time
            )}
            style={{
              tickLabels: { fontSize: 11 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickCount={17}
            tickFormat={(t) =>
              `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
            }
            style={{
              axis: { stroke: "none" },
              ticks: { stroke: "none" },
              tickLabels: { fontSize: 13 },
            }}
            domain={[0, 12 * 60]}
            tickValues={Array.from({ length: 17 * 4 }).map((_, i) => i * 60)}
          />
          <VictoryBar
            data={lastSevenIceBathTimes.map((entry) => ({
              date: entry.date + "\n" + entry.time,
              iceBathCount: parseInt(entry.iceBathCount),
            }))}
            x={"date" + "time"}
            y={"iceBathCount"}
            style={{
              data: {
                width: 20,
                fill: "#454545",
              },
            }}
          />
        </VictoryChart>
      </div>
    </>
  );
}
