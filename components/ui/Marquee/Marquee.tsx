import { ScriptProps } from 'next/script';
import styles from './Marquee.module.scss';

function Marquee(props: ScriptProps) {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
}

export default Marquee;
