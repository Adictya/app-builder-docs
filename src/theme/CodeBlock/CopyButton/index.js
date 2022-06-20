import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
export default function CopyButton({code, className}) {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef(undefined);
  const handleCopyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);
  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);
  return (
    <button
      type="button"
      aria-label={
        isCopied
          ? translate({
              id: 'theme.CodeBlock.copied',
              message: 'Copied',
              description: 'The copied button label on code blocks',
            })
          : translate({
              id: 'theme.CodeBlock.copyButtonAriaLabel',
              message: 'Copy code to clipboard',
              description: 'The ARIA label for copy code blocks button',
            })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={handleCopyCode}>
      <span className={styles.copyButtonIcons} aria-hidden="true">
      <svg className={styles.copyButtonIcon}  xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
        <path d="M8.525 13.016H1.525V3.91602C1.525 3.53102 1.21 3.21602 0.825 3.21602C0.44 3.21602 0.125 3.53102 0.125 3.91602V13.016C0.125 13.786 0.755 14.416 1.525 14.416H8.525C8.91 14.416 9.225 14.101 9.225 13.716C9.225 13.331 8.91 13.016 8.525 13.016ZM12.025 10.216V1.81602C12.025 1.04602 11.395 0.416016 10.625 0.416016H4.325C3.555 0.416016 2.925 1.04602 2.925 1.81602V10.216C2.925 10.986 3.555 11.616 4.325 11.616H10.625C11.395 11.616 12.025 10.986 12.025 10.216ZM10.625 10.216H4.325V1.81602H10.625V10.216Z" fill="white"/>
      </svg>
        <svg className={styles.copyButtonSuccessIcon} viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </span>
    </button>
  );
}
