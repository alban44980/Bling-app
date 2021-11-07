import apiService from '../../ApiService';
import styles from '../../styles/Main/Bottom.module.css';

function Bottom({ setPhotosToDisplay }) {
  async function handleClick() {
    const newPics = await apiService.getNewPictures(); //making the call to get new random pictures
    setPhotosToDisplay(newPics); //setting the state with the data response
  }

  return (
    <div className={styles.container}>
      <h1>Not liking these ?</h1>
      <button onClick={handleClick}>Click me to load new pics !</button>
    </div>
  );
}

export default Bottom;
