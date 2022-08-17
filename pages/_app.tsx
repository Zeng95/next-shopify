/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppProps } from 'next/app';
import { ScriptProps } from 'next/script';
import 'styles/globals.css';

const Noop: React.FC<ScriptProps> = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
