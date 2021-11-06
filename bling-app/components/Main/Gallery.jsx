import styles from '../../styles/Main/Gallery.module.css';

function Gallery({ photosToDisplay }) {
  return (
    <div className={styles.container}>
      {photosToDisplay
        ? photosToDisplay.map((photo) => (
            <div key={photo.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <img src={photo.user.profile_image.small} alt="" />
                <p>{photo.user.name}</p>
              </div>
              <div className={styles.imageContainer}>
                <img
                  className={styles.img}
                  src={photo.urls.regular}
                  alt={photo.description}
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Gallery;
