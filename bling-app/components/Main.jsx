import styles from '../styles/Main.module.css';
import Search from './Main/Search';
import Gallery from './Main/Gallery';
import Bottom from './Main/Bottom';

function Main({ photosToDisplay, setPhotosToDisplay }) {
  return (
    <div className={styles.container}>
      <Search setPhotosToDisplay={setPhotosToDisplay} />
      <Gallery photosToDisplay={photosToDisplay} />
      <Bottom setPhotosToDisplay={setPhotosToDisplay} />
    </div>
  );
}

export default Main;
