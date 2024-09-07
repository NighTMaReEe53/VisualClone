import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IContent {
  content: string;
}

const Content = ({ content }: IContent) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers
      customStyle={{
        backgroundColor: "transparent",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.5rem",
      }}
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default Content;
