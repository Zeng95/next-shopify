import { ScriptProps } from 'next/script';
import React from 'react';

function Layout({ children }: ScriptProps) {
  return <div className="layout">{children}</div>;
}

export default Layout;
