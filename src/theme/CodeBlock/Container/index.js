import React from 'react';
import clsx from 'clsx';
import {
  usePrismTheme,
  getPrismCssVariables,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import styles from './styles.module.css';
export default function CodeBlockContainer({as: As, setRef, ...props}) {
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  const childRef = React.createRef();
  
  React.useEffect(() => {
    setRef(childRef);
  }, []);

  return (
    <As
      // Polymorphic components are hard to type, without `oneOf` generics
      {...props}
      ref={childRef}
      className={clsx(
        props.className,
        styles.codeBlockContainer,
        ThemeClassNames.common.codeBlock,
      )}
    />
  );
}
