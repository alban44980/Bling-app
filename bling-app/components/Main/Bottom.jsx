import apiService from '../../ApiService';
import styles from '../../styles/Main/Bottom.module.css';

function Bottom({ setPhotosToDisplay }) {
  async function handleClick() {
    const newPics = await apiService.getNewPictures();
    setPhotosToDisplay(newPics);
  }

  return (
    <div className={styles.container}>
      <h1>Not liking those ?</h1>
      <button onClick={handleClick}>Click me to load new pics !</button>
    </div>
  );
}

export default Bottom;
