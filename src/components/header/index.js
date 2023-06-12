import styles from './styles.module.scss';

export default function Header({ children }) {
  return (
    <header className={styles.container}>
		{children}
    </header>
  );
}
