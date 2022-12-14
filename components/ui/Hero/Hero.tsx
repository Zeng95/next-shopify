import Link from 'next/link';
import { Container } from '../';
import styles from './Hero.module.scss';

type Props = {
  headline: string;
  description: string;
};

function Hero(props: Props) {
  const { headline, description } = props;
  return (
    <div className="bg-white border-t border-b border-accent-2">
      <Container>
        <div className={styles.root}>
          {/* Headline | 标题 */}
          <h2 className={styles.headline}>{headline}</h2>

          {/* Description | 描述 */}
          <div className={styles.description}>
            <p>{description}</p>
            <Link href="/">
              <a className={styles.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
