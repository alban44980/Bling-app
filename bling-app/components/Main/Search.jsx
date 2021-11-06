import styles from '../../styles/Main/Search.module.css';
import { useState } from 'react';
import apiService from '../../pages/api/ApiService';

function Search({ setPhotosToDisplay }) {
  const [state, setState] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setState(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await apiService.search(state);
    setPhotosToDisplay(res.results);
    setState('');
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
