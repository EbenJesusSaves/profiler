"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import CloudinaryUploadWidget from "./cWidject";
import { Cloudinary } from "@cloudinary/url-gen";
import parse from "html-react-parser";
import "quill/dist/quill.snow.css";

import { useQuill } from "react-quilljs";
import Quill from "quill";

interface Props {
  prevContent?: string;
}

interface CounterOptions {
  maxCount: number;
}

const RichTextEditor = ({ prevContent }: Props) => {
  const counterRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const theme = "snow";
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      theme,
      counter: true,
      toolbar: "#toolbar",
      handlers: {
        handlers: {
          image: function () {
            alert("Custom button clicked!");
          },
        },
      },
    },
  });

  if (Quill && !quill) {
    Quill.register(
      "modules/counter",
      function (quill: Quill, options: CounterOptions) {
        quill.on("text-change", function () {
          const text = quill.getText();
          if (counterRef.current) {
            counterRef.current.textContent = text
              .split(/\s+/)
              .length.toString();
          }
        });
      }
    );
  }

  useEffect(() => {
    if (prevContent) {
      quill?.clipboard.dangerouslyPasteHTML(prevContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevContent]);

  const content = quill?.root.innerHTML;
  const insertImage = (file: string) => {
    const range = quill?.getSelection(true);
    if (range) {
      quill?.insertText(range.index, file);
      quill?.formatText(range.index, file.length, "link", file);
    }
  };

  //============== clouldnary staff
  const [imageLink, setImageLink] = useState("");
  const [uploadPreset] = useState("halumx55");
  const cloudName = "djzn1iixv";
  const cld = new Cloudinary({
    cloud: {
      cloudName: "djzn1iixv",
    },
  });

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  useEffect(() => {
    if (!imageLink) return;
    insertImage(imageLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageLink]);
  return (
    <>
      <div style={{ height: 600, width: 800 }}>
        <div id="toolbar" style={{ position: "relative" }}>
          <button className="ql-bold">Bold</button>
          <button className="ql-italic">Italic</button>
          <button className="ql-underline">Underline</button>
          <button className="ql-list" value="ordered">
            Ordered List
          </button>
          <button className="ql-list" value="bullet">
            Bullet List
          </button>
          <select className="ql-size">
            <option value="small">Small</option>
            <option value="false">Normal</option>
            <option value="large">Large</option>
            <option value="huge">Huge</option>
          </select>
          <select className="ql-header">
            <option value="1">Header 1</option>
            <option value="2">Header 2</option>
            <option value="3">Header 3</option>
            <option value="4">Header 4</option>
            <option value="5">Header 5</option>
            <option value="6">Header 6</option>
            <option value="false">Normal</option>
          </select>
          <button className="ql-link">Link</button>
          <button className="ql-clean">Clean</button>
          <button className="ql-image">hii</button>
          <button className="ql-video">Video</button>
          <div
            style={{
              backgroundColor: "pink",
              width: 30,
              zIndex: 4000,
              position: "absolute",
              left: 700,
            }}
          >
            <CloudinaryUploadWidget
              uwConfig={uwConfig}
              setImageLink={setImageLink}
            />
          </div>
        </div>
        <div ref={quillRef} />
        <div ref={counterRef} />
      </div>
    </>
  );
};

export default RichTextEditor;
