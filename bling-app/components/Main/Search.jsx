import styles from '../../styles/Main/Search.module.css';

function Search() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('FORM SUBMITTED YIII');
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="searchInput"></label>
        <input
          id="searchInput"
          type="text"
          placeholder="Search an image: mountains, ocean, or anything else !"
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
