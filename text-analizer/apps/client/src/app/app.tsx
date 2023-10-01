import { useApp } from './useApp';
import styles from './app.module.scss';

export function App() {
  const {
    text,
    wordTypes,
    handleSumbit,
    handleChangeText,
  } = useApp();

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="text">Input text</label>
        <textarea
          id="text"
          className={styles.inputText}
          rows={10}
          onChange={handleChangeText}
        >
          {text}
        </textarea>
      </div>
      <div>
        <button onClick={handleSumbit} className={styles.submit}>Submit</button>
      </div>
      {wordTypes && (
        <div className={styles.result}>
          <ul>
            {wordTypes.map((wordType, i) => (
              <li key={i}>{wordType[0]}: {wordType[1]}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
