"use client";

import React, { useCallback, useEffect } from "react";

import "quill/dist/quill.snow.css";

import { useQuill } from "react-quilljs";

interface Props {
  prevContent?: string;
}

const RichTextEditor = ({ prevContent }: Props) => {
  const counterRef = React.useRef<HTMLDivElement>();
  const theme = "snow";
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      theme,
      counter: true,
      toolbar: [
        "bold",
        "italic",
        "underline",
        { list: "ordered" },
        { list: "bullet" },
        { size: ["small", false, "large", "huge"] },
        { header: [1, 2, 3, 4, 5, 6, false] },
        "link",
        "clean",
        "link",
        "image",
        "video",
      ],
    },
  });

  if (Quill && !quill) {
    // For execute this line only once.
    Quill.register("modules/counter", function (quill, options) {
      quill.on("text-change", function () {
        const text = quill.getText();
        // There are a couple issues with counting words
        // this way but we'll fix these later
        if (counterRef.current) {
          counterRef.current.innerText = text.split(/\s+/).length;
        }
      });
    });
  }

  useEffect(() => {
    if (prevContent) {
      quill?.clipboard.dangerouslyPasteHTML(prevContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevContent]);

  const content = quill?.root.innerHTML;

  // const dispatchAppointment = useCallback(() => {
  //   if (content) {
  //     dispatch(updateRichText(content));
  //   }
  // }, [content, dispatch]);

  // useEffect(() => {
  //   dispatchAppointment();
  // }, [dispatchAppointment, content]);

  return (
    <div style={{ height: 600, width: 500 }}>
      <div ref={quillRef} />
      <div ref={counterRef} />
    </div>
  );
};

export default RichTextEditor;
