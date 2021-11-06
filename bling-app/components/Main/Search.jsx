import styles from '../../styles/Main/Search.module.css';
import { useState } from 'react';
import apiService from '../../ApiService';

function Search({ setPhotosToDisplay }) {
  const [state, setState] = useState(''); //input value state

  //function that update the input state with the current input value
  function handleChange(e) {
    const { value } = e.target;
    setState(value);
  }

  //on submit we make an API call passing it the input state
  async function handleSubmit(e) {
    e.preventDefault(); //prevent page from refreshing on submit
    const res = await apiService.search(state); //making the API call to search for pictures
    setPhotosToDisplay(res.results); //update pictures state
    setState(''); //reset input state
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="searchInput"></label>
        <input
          id="searchInput"
          type="text"
          placeholder="Search an image: mountains, ocean, or anything else !"
          name="image-search"
          value={state}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <img
        className={styles.profilePic}
        src="profile_pic.jpeg"
        alt="Profile Picture"
      />
    </div>
  );
}

export default Search;
