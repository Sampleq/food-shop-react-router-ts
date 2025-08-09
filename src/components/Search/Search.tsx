import { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { useLocation } from 'react-router-dom';

interface SearchProps {
  cb: (value: string) => void;
}

export const Search = ({ cb }: SearchProps) => {
  const { search } = useLocation();

  const [value, setValue] = useState<string>(search.split('=')[1] ?? '');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value !== search.split('=')[1]) {
      cb(value);
    }
  }

  useEffect(() => setValue(search.split('=')[1] ?? ''), [search]);

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='search category'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />

      <button
        type='submit'
        className='btn'
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        Search
      </button>
    </form>
  );
};
