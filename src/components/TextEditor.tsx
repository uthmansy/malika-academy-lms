import { Button } from "antd";
import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  onSave: (content: string) => void;
  isLoading: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ onSave, isLoading }) => {
  const [content, setContent] = useState<string>("");

  // Custom function to insert inline images
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      if (!input.files || input.files.length === 0) return;
      const file = input.files[0];

      // Convert image to Base64 and insert into editor
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        const quill = document.querySelector(".ql-editor") as HTMLElement;
        if (quill) {
          quill.innerHTML += `<img src="${base64Image}" alt="Inline Image" style="max-width: 100%; display: block; margin: 10px 0;" />`;
        }
      };
      reader.readAsDataURL(file);
    };
  };

  // Quill toolbar configuration with custom image handler
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "link"],
        ],
        handlers: {
          image: handleImageUpload, // Custom image handler
        },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill value={content} onChange={setContent} modules={modules} />
      <Button
        loading={isLoading}
        type="primary"
        onClick={() => onSave(content)}
        className="bt-5"
        size="large"
      >
        Save
      </Button>
    </div>
  );
};

export default TextEditor;
