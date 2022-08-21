import { ScriptProps } from 'next/script';

type Props = ScriptProps & {};

function Container(props: Props) {
  const { children } = props;

  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}

export default Container;
