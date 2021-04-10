import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import MathJax from 'react-mathjax';

export const MarkdownRender = (props: ReactMarkdown.ReactMarkdownProps) => {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      math: (props: { value: string }) => (
        <MathJax.Node formula={props.value} />
      ),
      inlineMath: (props: { value: string }) => (
        <MathJax.Node inline formula={props.value} />
      ),
    },
  };
  return (
    <MathJax.Provider>
      <ReactMarkdown {...newProps} />
    </MathJax.Provider>
  );
};
