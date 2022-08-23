import { ScriptProps } from 'next/script';
import React from 'react';
import styles from './Layout.module.scss';

// The easiest way to declare a Function Component; return type is inferred.
function Layout({ children }: ScriptProps) {
  return <div className={styles.root}>{children}</div>;
}

export default Layout;
