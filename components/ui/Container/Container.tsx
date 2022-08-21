import { ScriptProps } from 'next/script';

type Props = ScriptProps & {
  el?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
};

function Container (props: Props) {
  const { children, el: Component = 'div' } = props
  return <Component className="max-w-7xl mx-auto px-6">{children}</Component>;
}

export default Container;
