import classnames from 'classnames';
import { ScriptProps } from 'next/script';
import styles from './Grid.module.scss';

type Props = ScriptProps & {
  layout?: 'A' | 'B';
};

function Grid({ children, layout = 'A' }: Props) {
  const rootClass = classnames(styles.root, {
    [styles.layoutA]: layout === 'A',
    [styles.layoutB]: layout === 'B'
  });

  return <div className={rootClass}>{children}</div>;
}

export default Grid;
