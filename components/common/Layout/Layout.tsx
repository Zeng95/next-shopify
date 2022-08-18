import { ScriptProps } from 'next/script';
import React from 'react';

// The easiest way to declare a Function Component; return type is inferred.
function Layout({ children }: ScriptProps) {
  return <div className="layout">{children}</div>;
}

export default Layout;
