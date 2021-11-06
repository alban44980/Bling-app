import styles from '../../styles/Main/Bottom.module.css';

function Bottom() {
  function handleClick() {
    console.log('button clicked yiiii');
  }

  return (
    <div className={styles.container}>
      <h1>Not liking those ?</h1>
      <button onClick={handleClick}>Click me to load new pics !</button>
    </div>
  );
}

export default Bottom;
