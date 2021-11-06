import styles from '../styles/Main.module.css';
import Search from './Main/Search';
import Gallery from './Main/Gallery';
import Bottom from './Main/Bottom';

function Main({ photosToDisplay }) {
  return (
    <div className={styles.container}>
      <Search />
      <Gallery photosToDisplay={photosToDisplay} />
      <Bottom />
    </div>
  );
}

export default Main;
