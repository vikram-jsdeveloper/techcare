import React, { useEffect, useState } from "react";
import styles from "./PatientsList.module.scss";

function PatientsList() {
  const [patientsList, setPatientsList] = useState([]);
  const [activePatient, setActivePatient] = useState(null);

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
        console.log("Response Data:", data);
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

  const handleActive = (name) => {
    setActivePatient(name); // Set the clicked patient as active
  };

  return patientsList.length === 0 ? (
    <div className={styles.loadingBox}>Loading</div>
  ) : (
    <div className={styles.PatientsListBox}>
      <div className={styles.searchBox}>
        <h3>Patients</h3>
        <img
          src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707649/search-icon_b0jqfb.svg"
          alt="icon"
        />
      </div>
      <div className={styles.patientList}>
        {patientsList.length > 0 && (
          <ul>
            {patientsList.map((list, id) => {
              const isActive = activePatient === list.name;

              return (
                <li
                  key={id}
                  className={isActive ? styles.active : ""}
                  onClick={() => handleActive(list.name)}
                >
                  <div className={styles.listWrap}>
                    <img src={list.profile_picture} alt={list.name} />
                    <div>
                      <h4>{list.name}</h4>
                      <p>
                        {list.gender}, {list.agee}
                      </p>
                    </div>
                  </div>
                  <span>
                    <img
                      className={styles.moreIcon}
                      src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707646/more-horiz-icon_aoibnr.svg"
                      alt="icon"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PatientsList;
