import { ScriptProps } from 'next/script';

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export let thing = 'initial';

setTimeout(() => {
  thing = 'changed';
}, 500);

export default Layout;
