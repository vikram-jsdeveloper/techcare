import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./DiagnosisHistory.module.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = () => {
  const [patientsList, setPatientsList] = useState([]);

  const fetchData = async () => {
    const username = "coalition";
    const password = "skills-test";

    const credentials = btoa(`${username}:${password}`);

    const url = "https://fedskillstest.coalitiontechnologies.workers.dev/";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatientsList(data);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sliceData = patientsList.slice(3, 4);
  const diagnosisHistory = sliceData[0]?.diagnosis_history || [];
  const userData = diagnosisHistory[0];

  const { heart_rate, respiratory_rate, temperature } = userData || {};

  const diagnosticList = sliceData[0]?.diagnostic_list || [];

  const [selectedRange, setSelectedRange] = useState("Last 6 months");
  const diagnosisData = diagnosisHistory;

  const currentData = diagnosisData[diagnosisData.length - 1] || null;
  if (!currentData) {
    return <div className={styles.loadingWrapper}>Loading</div>;
  }

  const systolicChange =
    currentData?.blood_pressure?.systolic.value < 140
      ? `${currentData?.blood_pressure?.systolic.value} Higher than Average`
      : `${currentData?.blood_pressure?.systolic.value} Lower than Average`;
  const diastolicChange =
    currentData?.blood_pressure?.diastolic.value > 80
      ? `${currentData?.blood_pressure?.diastolic.value} Lower than Average`
      : `${currentData?.blood_pressure?.diastolic.value} Higher than Average`;

  const chartData = {
    labels: diagnosisData.map((data) => {
      return `${data.month.substring(0, 3)}, ${data.year}`;
    }),
    datasets: [
      {
        label: "Systolic",
        data: diagnosisData.map((data) => data.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diagnosisData.map((data) => data.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  const Box = ({ title, value, levels, imgSrc, classname, unit }) => {
    return (
      <div className={`${styles.box} ${styles[classname]}`}>
        <img src={imgSrc} alt="Respiratory Rate" />
        <p>{title}</p>
        <h3>
          {value} {unit}
        </h3>
        <span>{levels}</span>
      </div>
    );
  };

  const DiagnosticList = () => {
    return (
      <div className={styles.tableWrapper}>
        <h3>Diagnostic List</h3>
        {diagnosticList.length > 0 && (
          <div className={styles.secondaryContainer}>
            <table>
              <thead>
                <tr>
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {diagnosticList.map((list, id) => {
                  return (
                    <tr>
                      <td>{list.name}</td>
                      <td>{list.description}</td>
                      <td>{list.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={styles.graphWrapper}>
        <h2>Diagnosis History</h2>
        <div className={styles.graphBox}>
          <div className={styles.canvasContainer}>
            <div className={styles.head}>
              <h4>Blood Pressure</h4>
              <select
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                className={styles.selectBox}
              >
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <h5>
                <span className={styles.pinkCircle}></span>
                <span>Systolic</span>
              </h5>
              <p className={styles.value}>
                {currentData?.blood_pressure?.systolic.value}
              </p>
              <p className={styles.label}>
                {systolicChange === "Lower than Average" ? (
                  <>
                    <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707642/ArrowDown_acxfrp.svg" />{" "}
                    <span>Lower than Average</span>
                  </>
                ) : (
                  <>
                    <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707643/ArrowUp_vdfpr1.svg" />{" "}
                    <span>Higher than Average</span>
                  </>
                )}
              </p>
            </div>
            <div>
              <h5>
                <span className={styles.purpleCircle}></span>
                <span>Diastolic</span>
              </h5>
              <p className={styles.value}>
                {currentData?.blood_pressure?.diastolic.value}
              </p>
              <p className={styles.label}>
                {diastolicChange === "Higher than Average" ? (
                  <>
                    <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707643/ArrowUp_vdfpr1.svg" />
                    <span>Higher than Average</span>
                  </>
                ) : (
                  <>
                    <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707642/ArrowDown_acxfrp.svg" />
                    <span>Lower than Average</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.columnLayout}>
          <Box
            classname={"res"}
            title="Respiratory Rate"
            {...respiratory_rate}
            imgSrc={
              "https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707647/respiratory_rate_jfcgah.svg"
            }
            unit={"bpm"}
          />
          <Box
            classname={"tem"}
            title="Temperature"
            {...temperature}
            imgSrc={
              "https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707649/temperature_ra6iht.svg"
            }
            unit={"°F"}
          />
          <Box
            classname={"heart"}
            title="Heart Rate"
            {...heart_rate}
            imgSrc={
              "https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707645/HeartBPM_n4itae.svg"
            }
            unit={"bpm"}
          />
        </div>
      </div>
      <DiagnosticList />
    </>
  );
};

export default DiagnosisHistory;
