import styles from "./searchBox.module.css";

const SearchBox = ({ value, setValue }) => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Find contacts by name"
      value={value}
      onChange={setValue}
      className={styles.search}
    />
  );
};

export default SearchBox;
