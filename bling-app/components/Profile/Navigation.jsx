import styles from '../../styles/Profile/Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <img src="home.png" alt="Home" />
          <p>Home</p>
        </li>
        <li className={styles.navItem}>
          <img src="photos.png" alt="My photos" />
          <p>My Photos</p>
        </li>
        <li className={styles.navItem}>
          <img src="heart.png" alt="My likes" />
          <p>My likes</p>
        </li>
        <li className={styles.navItem}>
          <img src="send.png" alt="My Messages" />
          <p>Messages</p>
        </li>
        <li className={styles.navItem}>
          <img src="settings.png" alt="Settings" />
          <p>Settings</p>
        </li>
        <li className={styles.navItem}>
          <img src="Stats.png" alt="Stats" />
          <p>Stats</p>
        </li>
        <li className={styles.navItemLast}>
          <img src="privacy.png" alt="Privacy and support" />
          <p>Privacy and Support</p>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
