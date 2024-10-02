import * as MonacoEditor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import * as prettier from "prettier";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import React from "react";
import { createHighlighter } from "shiki";
import Button from "./Button";

function evaluate(code: string): Error | null {
  try {
    eval(code);
    return null;
  } catch(error) {
    return error as Error;
  }
}


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

  const onFormat = () => {
    async function format() {
      if (ref.current === null) {
        return;
      }

      const value = ref.current.getValue();

      const formatted = await prettier.format(value, {
        parser: "babel",
        plugins: [prettierPluginBabel, prettierPluginEstree],
      });

      ref.current.setValue(formatted);
    }
    format();
  };

  const onRun = () => {
    async function run() {
      if (ref.current === null) {
        return;
      }

      const value = ref.current.getValue();
      const error = evaluate(value);

      if (error !== null) {
        console.error(error);
      }
    }
    run();
  };

  return (
    <div className="relative h-full">
      <MonacoEditor.Editor
        height={height}
        defaultLanguage="javascript"
        defaultValue="// code"
        beforeMount={beforeMount}
        onMount={onMount}
        options={{ minimap: { enabled: false }, fontSize, tabSize: 2 }}
      />
      <div className="absolute bottom-0 right-0 p-4 flex gap-2">
        <Button onClick={onFormat}>Format</Button>
        <Button onClick={onRun}>Run</Button>
      </div>
    </div>
  );
}

export default Editor;
