import React from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  usePrismTheme,
  useCodeWordWrap,
} from '@docusaurus/theme-common';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import CopyButton from '@theme/CodeBlock/CopyButton';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';
import styles from './styles.module.css';
import FullScreenButton from '../FullScreenButton';
import GithubButton from '../GithubButton';

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language =
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  const githubLink = metastring?.match(/gh=(?<quote>["'])(?<gh>.*?)\1/)?.groups?.gh || ''
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const containerRef = React.createRef();
  const hline = React.useRef(0); // line no where syntax highlight starts
  const tlines = React.useRef(0);// total no of lines 
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const setRef = (ref) => {
    containerRef.current = ref.current;
  }
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  React.useEffect(() => {
    wordWrap.toggle();
    const scrollBy = 20 * hline.current; // height of one line 20x , 300-(32*64) /18
    const section = containerRef?.current?.querySelector('pre')
    if (tlines?.current < 13) {
      const expandbtn = containerRef?.current?.querySelector('.expand-btn')
      expandbtn?.classList?.add('hidden')
    }
    scrollBy && section.classList.add('code-scroll')
    section?.setAttribute('pos', scrollBy)
    // on Chrome page scroll is incorrect if we scroll code snippet to highlighted section on mount
    section?.scrollTo({ top: scrollBy, behavior: 'smooth' })

  }, [])

  return (
    <Container
      as="div"
      setRef={setRef}
      className={clsx(
        blockClassName,
        language &&
        !blockClassName.includes(`language-${language}`) &&
        `language-${language}`,
      )}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>

        <Highlight
          {...defaultProps}
          theme={prismTheme}
          code={code}
          language={language ?? 'text'}>
          {({ className, tokens, getLineProps, getTokenProps }) => {
            tlines.current = tokens.length;
            return (
              <pre
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                tabIndex={0}
                ref={wordWrap.codeBlockRef}
                className={clsx(className, styles.codeBlock, 'thin-scrollbar')}>
                <code
                  className={clsx(
                    styles.codeBlockLines,
                    showLineNumbers && styles.codeBlockLinesWithNumbering,
                  )}>


                  {tokens.map((line, i) => {
                    if (lineClassNames[i] == 'theme-code-block-highlighted-line') {
                      hline.current = hline.current === 0 ? i : hline.current
                    }
                    // tlines.current += i;
                    return <Line
                      key={i}
                      line={line}
                      getLineProps={getLineProps}
                      getTokenProps={getTokenProps}
                      classNames={lineClassNames[i]}
                      showLineNumbers={showLineNumbers}
                    />
                  })}
                </code>
              </pre>
            )
          }}

        </Highlight>
        <div className={styles.buttonGroup}>
          {/* {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )} */}
          {githubLink && <GithubButton link={githubLink} />}
          <CopyButton className={styles.codeButton} code={code} />
          <FullScreenButton className="expand-btn" forwardRef={containerRef} />
        </div>
      </div>
    </Container>
  )
};

