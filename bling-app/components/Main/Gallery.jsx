import styles from '../../styles/Main/Gallery.module.css';
import PhotoItem from './PhotoItem';

function Gallery({ photosToDisplay }) {
  return (
    <div className={styles.container}>
      {photosToDisplay
        ? photosToDisplay.map(
            //looping over all pictures and render a component for each of them
            (photo) => <PhotoItem key={photo.id} photo={photo} />
          )
        : null}
    </div>
  );
}

export default Gallery;
