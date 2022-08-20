import { ScriptProps } from 'next/script';
import styles from './Grid.module.scss';

function Grid({ children }: ScriptProps) {
  return <div className={styles.root}>{children}</div>;
}

export default Grid;
