import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

function FullScreenButton({ code, className, forwardRef }) {

  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef(undefined);
  const handleFullScreen = useCallback((e) => {
    const element = forwardRef.current;
    element.classList.toggle('fullscreen')

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
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
        message: 'FullScreen',
        description: 'The copy button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={handleFullScreen}>
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <svg className={styles.copyButtonIcon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2.06863 9.91177H0.5V13.049C0.5 13.9118 1.20588 14.6176 2.06863 14.6176H5.20588V13.049H2.06863V9.91177ZM2.06863 2.06863H5.20588V0.5H2.06863C1.20588 0.5 0.5 1.20588 0.5 2.06863V5.20588H2.06863V2.06863ZM13.049 0.5H9.91177V2.06863H13.049V5.20588H14.6176V2.06863C14.6176 1.20588 13.9118 0.5 13.049 0.5ZM13.049 13.049H9.91177V14.6176H13.049C13.9118 14.6176 14.6176 13.9118 14.6176 13.049V9.91177H13.049V13.049Z" fill="white" />
        </svg>
      </span>
    </button>
  );
}

export default FullScreenButton;
