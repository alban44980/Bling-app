import styles from '../../styles/Main/PhotoItem.module.css';

function PhotoItem({ photo }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <img
          src={photo.user.profile_image.small}
          alt="Photograph profile picture"
        />
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
  );
}

export default PhotoItem;
