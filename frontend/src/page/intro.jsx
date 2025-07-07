import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";

const Intro = () => {
    const markdownText = `# h1 \n *만이러ㅣㅏㄴㅇㄹ* \n \`const app = use.get()\`하는거노?`
    return (
        <>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{markdownText}
            </ReactMarkdown>
        </>
    )   
}

export default Intro;