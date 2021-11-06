import styles from '../../styles/Profile/User.module.css';

function User() {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <img src="profile_pic.jpeg" alt="Profile picture" />
        <div className={styles.credentials}>
          <h2>Alban MANSORD</h2>
          <p>@alban.msd</p>
        </div>
      </div>
      <div className={styles.userData}>
        <div className={styles.dataItem}>
          <h2>287</h2>
          <p>Photos</p>
        </div>
        <div className={styles.dataItem}>
          <h2>452</h2>
          <p>Followers</p>
        </div>
        <div className={styles.dataItem}>
          <h2>312</h2>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}

export default User;
