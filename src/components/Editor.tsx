import * as MonacoEditor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import React from "react";
import { createHighlighter } from "shiki";

function Editor(props: { height?: string; fontSize?: number }) {
  const { height = "100%", fontSize = 12 } = props;

  const ref = React.useRef<Parameters<MonacoEditor.OnMount>[0] | null>(null);
  const beforeMount = async (monaco: MonacoEditor.Monaco) => {
    monaco.languages.register({ id: "javascript" });
    const highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["javascript"],
    });

    shikiToMonaco(highlighter, monaco);
  };

  const onMount: MonacoEditor.OnMount = (editor) => {
    ref.current = editor;
  };
  return (
    <MonacoEditor.Editor
      height={height}
      defaultLanguage="javascript"
      defaultValue="// code"
      beforeMount={beforeMount}
      onMount={onMount}
      options={{ minimap: { enabled: false }, fontSize, tabSize: 2 }}
    />
  );
}

export default Editor;
