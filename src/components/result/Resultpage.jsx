import React from "react";
import "./result.css";
import ScatterChartComponent from "./Chart1";

const ResultPage = ({ values }) => {
  return (
    <div className="tableDiv">
      <h2 className="pageTitle">Result Page</h2>
      <h1 className="pageSubtitle">Table Result</h1>
      <table className="resultTable">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Name</td>
            <td>{values.projectName}</td>
          </tr>
          <tr>
            <td>Project Description</td>
            <td>{values.projectDescription}</td>
          </tr>
          <tr>
            <td>Client</td>
            <td>{values.client}</td>
          </tr>
          <tr>
            <td>Contractor</td>
            <td>{values.contractor}</td>
          </tr>
          <tr>
            <td>Max X:</td>
            <td>{values.maxX}</td>
          </tr>
          <tr>
            <td>Min X:</td>
            <td>{values.minX}</td>
          </tr>
          <tr>
            <td>Max Y:</td>
            <td>{values.maxY}</td>
          </tr>
          <tr>
            <td>Min Y:</td>
            <td>{values.minY}</td>
          </tr>
          <tr>
            <td>Max Z:</td>
            <td>{values.maxZ}</td>
          </tr>
          <tr>
            <td>Min Z:</td>
            <td>{values.minZ}</td>
          </tr>
        </tbody>
      </table>
      <ScatterChartComponent />
    </div>
  );
};

export default ResultPage;
