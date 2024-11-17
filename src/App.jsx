import Header from "./components/Header";
import styles from "./App.module.scss";
import PatientsList from "./components/PatientsList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <PatientsList />
            </div>
            <div className={styles.centerSection}>
              <DiagnosisHistory />
            </div>
            <div className={styles.rightSection}>
              <ProfileContainer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
