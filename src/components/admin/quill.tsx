"use client";

import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import CloudinaryUploadWidget from "./cWidject";
import "quill/dist/quill.snow.css";

import { useQuill } from "react-quilljs";
import Quill from "quill";
import { TagsInput } from "@mantine/core";

interface Props {
  prevContent?: string;
}

interface CounterOptions {
  maxCount: number;
}

type Caller = "editor" | "title";

const CloudinaryScriptContext = createContext({});
const CloudinaryScriptContext1 = createContext({});
const RichTextEditor = ({ prevContent }: Props) => {
  const counterRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  //============== clouldnary staff
  const [imageLink, setImageLink] = useState("");
  const [caller, setCaller] = useState<Caller>("editor");
  const [title, setTitle] = useState("");
  const [uploadPreset] = useState("halumx55");
  const cloudName = "djzn1iixv";

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "djzn1iixv",
  //   },
  // });

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  useEffect(() => {
    if (!imageLink || caller === "title") return;
    insertImage(imageLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageLink]);

  const { initializeCloudinaryWidget, loaded } = CloudinaryUploadWidget({
    uwConfig,
    setImageLink,
  });
  const theme = "snow";
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      theme,
      counter: true,
      toolbar: {
        container: "#toolbar",
        handlers: {
          image: () => {
            setCaller("editor");
            initializeCloudinaryWidget();
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
      quill?.insertEmbed(range.index, "image", file, Quill.sources.USER);
    }
  };

  const openTitleImage = () => {
    setCaller("title");
    initializeCloudinaryWidget();
  };
  console.log(content);

  const post = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="">
      <div>
        <CloudinaryScriptContext.Provider value={{ loaded }}>
          <button
            id="upload_widget"
            onClick={openTitleImage}
            className="px-4 py-2 mt-10 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Add a cover picture
          </button>
        </CloudinaryScriptContext.Provider>
      </div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="text-6xl font-black border-solid border-gray-300 border w-[100%] my-5"
        placeholder="New Post Title here..."
      />
      <div className="mb-5">
        <TagsInput
          label="Press Enter to submit a tag"
          mb="md"
          placeholder="Enter tag"
        />
      </div>
      <div style={{ height: 750, width: 900 }}>
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
          <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button id="upload_widget1" className="ql-image"></button>
          </CloudinaryScriptContext.Provider>
          <button className="ql-video">Video</button>
          <div></div>
        </div>
        <div ref={quillRef} />
        <div ref={counterRef} />
      </div>
    </div>
  );
};

export default RichTextEditor;
export { CloudinaryScriptContext, CloudinaryScriptContext1 };
