import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ScriptProps } from 'next/script';
import 'styles/main.scss';

type Page<P = Record<string, never>> = NextPage<P> & {
  Layout: (page: ScriptProps) => JSX.Element;
};

type Props = AppProps & {
  Component: Page;
};

const Noop = ({ children }: ScriptProps) => <>{children}</>;

function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
