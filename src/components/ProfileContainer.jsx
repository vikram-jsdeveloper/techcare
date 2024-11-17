import styles from "./ProfileContainer.module.scss";

const ProfileContainer = () => {
  const userData = {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    profile_picture: "https://fedskillstest.ct.digital/4.png",
    date_of_birth: "08/23/1996",
    phone_number: "(415) 555-1234",
    emergency_contact: "(415) 555-5678",
    insurance_type: "Sunrise Health Assurance",
    lab_results: ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays"],
  };

  const labResults = userData?.lab_results || [];

  const LabResults = () => {
    return (
      <>
        {labResults.length > 0 && (
          <div className={styles.listBox}>
            <h3>Lab Result</h3>
            <ul>
              {labResults.map((list, id) => {
                return (
                  <li key={id}>
                    <span>{list}</span>
                    <img src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707643/download-icon_hcyskv.svg" />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className={styles.profileContainer}>
        <img src={userData.profile_picture} alt="profile" />
        <h3>{userData.name}</h3>
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731792630/BirthIcon_2x_efz9r9.png"
              alt="icon"
            />
            <div>
              <label>Date Of Birth</label>
              <span>{userData.date_of_birth}</span>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707644/FemaleIcon_yxcj7u.svg"
              alt="icon"
            />
            <div>
              <label>Gender</label>
              <span>{userData.gender}</span>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707648/PhoneIcon_ol3fbt.svg"
              alt="icon"
            />
            <div>
              <label>Contact Info</label>
              <span>{userData.phone_number}</span>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707648/PhoneIcon_ol3fbt.svg"
              alt="icon"
            />
            <div>
              <label>Emergency Contacts</label>
              <span>{userData.emergency_contact}</span>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dqgoqxupk/image/upload/v1731707646/InsuranceIcon_qbhkh7.svg"
              alt="icon"
            />
            <div>
              <label>Insurance Provider</label>
              <span>{userData.insurance_type}</span>
            </div>
          </li>
        </ul>
        <button className={styles.btn}>Show All Information</button>
      </div>
      <LabResults />
    </>
  );
};

export default ProfileContainer;
