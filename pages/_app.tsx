import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ScriptProps } from 'next/script';
import 'styles/globals.css';

type Page<P = Record<string, never>> = NextPage<P> & {
  Layout: React.FC<ScriptProps>;
};

type Props = AppProps & {
  Component: Page;
};

const Noop: React.FC<ScriptProps> = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
