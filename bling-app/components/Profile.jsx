import styles from '../styles/Profile.module.css';
import User from './Profile/User';
import Navigation from './Profile/Navigation';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>BLING</h1>
      </div>
      <User />
      <Navigation />
    </div>
  );
}

export default Profile;
