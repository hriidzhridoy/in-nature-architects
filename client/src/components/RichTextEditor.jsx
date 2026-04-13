import { useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";

const editorConfig = {
  readonly: false,
  height: 320,
  placeholder: "Enter project description",
  buttons:
    "bold,italic,underline,|,ul,ol,|,font,fontsize,brush,paragraph,|,align,|,link,image,table,|,undo,redo,|,hr,eraser,fullsize",
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
};

function RichTextEditor({ value, onChange, placeholder }) {
  const [editorValue, setEditorValue] = useState(value || "");

  useEffect(() => {
    setEditorValue(value || "");
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (editorValue !== value) {
        onChange(editorValue);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [editorValue, onChange, value]);

  const config = useMemo(
    () => ({
      ...editorConfig,
      placeholder: placeholder || editorConfig.placeholder,
    }),
    [placeholder],
  );

  return (
    <div className="border border-neutral-300 transition focus-within:border-black">
      <JoditEditor
        value={editorValue}
        config={config}
        onChange={(newContent) => setEditorValue(newContent)}
        onBlur={(newContent) => onChange(newContent)}
      />
    </div>
  );
}

export default RichTextEditor;
