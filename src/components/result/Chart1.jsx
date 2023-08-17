import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { kp: 585778.436, x: 2108892.92 },
  { kp: 585281.709, x: 2107660.687 },
  // Add more data points here if needed
];

const ScatterChartComponent = () => {
  return (
    <ScatterChart
      width={800}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid />
      <XAxis
        dataKey="kp"
        type="number"
        label={{ value: "KP", position: "insideBottomRight", offset: 0 }}
      />
      <YAxis
        dataKey="x"
        type="number"
        label={{ value: "X", angle: -90, position: "insideLeft" }}
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter name="Data Points" data={data} fill="#8884d8" />
    </ScatterChart>
  );
};

export default ScatterChartComponent;
