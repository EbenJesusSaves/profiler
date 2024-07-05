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
import { TagsInput, Button } from "@mantine/core";
import base from "@/axios/baseApi";
import { getSession } from "next-auth/react";
import { Post } from "@/types/types";
import { notifications } from "@mantine/notifications";
import { Button as CustomBtn } from "../ui/CoolBtn";

interface Props {
  prevContent?: string;
  prevPost?: Post;
}

interface CounterOptions {
  maxCount: number;
}

type Caller = "editor" | "title";

const CloudinaryScriptContext = createContext({});
const CloudinaryScriptContext1 = createContext({});
const RichTextEditor = ({ prevContent, prevPost }: Props) => {
  const counterRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  //============== clouldnary staff
  const [imageLink, setImageLink] = useState("");
  const [caller, setCaller] = useState<Caller>("editor");
  const [tag, setTag] = useState<string[]>(prevPost?.tags || []);
  const [title, setTitle] = useState(prevPost?.title);
  const [uploadPreset] = useState("halumx55");
  const [headerImage, setHeaderImage] = useState(prevPost?.image);
  const [session, setSession] = useState<string>();
  const [draftLoader, setDraftLoader] = useState(false);
  const cloudName = "djzn1iixv";
  const render = useRef<string | null>(null);
  const [content, setContent] = useState("");
  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  // getting user session
  useEffect(() => {
    (async () => {
      const session = await getSession();

      setSession(session?.user?.name);
    })();
  }, []);

  useEffect(() => {
    if (!imageLink || caller === "title") return;
    insertImage(imageLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageLink]);
  useEffect(() => {
    if (caller === "title") {
      setHeaderImage(imageLink);
    }

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
      // content={ }
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
  quill?.on("text-change", () => {
    setContent(quill.root.innerHTML);
  });

  // const content = quill?.root.innerHTML;
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
  const clearInput = () => {
    setTag([""]);
    setTitle("");
    setHeaderImage("");
    quill?.clipboard.dangerouslyPasteHTML("");
  };

  const saveToDraft = async () => {
    const bod = {
      title,
      image: headerImage,
      body: content,
      tags: tag,
      created_by: session,
    };
    const draftBod = {
      id: prevPost?.id,
      title,
      image: headerImage,
      body: content,
      tags: tag,
      created_by: session,
    };
    try {
      setDraftLoader(true);
      if (prevPost?.id && prevPost.created_by) {
        const { data } = await base.put(
          "/admin/edit_draft_post",
          JSON.stringify(draftBod)
        );
        notifications.show({
          color: "green",
          title: "Great 🎉🎉🎉🎉",
          message: "Draft Post updated successfully",
        });
      } else {
        const { data } = await base.post(
          "/admin/draft_post",
          JSON.stringify(bod)
        );
        notifications.show({
          color: "green",
          title: "Great 🎉🎉🎉🎉",
          message: "Draft Post saved successfully",
        });
      }
      setDraftLoader(false);
      clearInput();
    } catch (error) {
      notifications.show({
        color: "red",
        title: "Oh no! 😔😔😔",
        message: "Draft Post saved successfully",
      });
      setDraftLoader(false);
      clearInput();
    }
  };

  const post = async () => {
    const bod = {
      title,
      image: headerImage,
      body: content,
      tags: tag,
      posted_by: session,
      created_by: session,
      id: prevPost?.id,
      from: prevPost?.created_by ? "draft" : "new",
    };

    const dditBod = {
      id: prevPost?.id,
      title,
      image: headerImage,
      body: content,
      tags: tag,
      posted_by: session,
    };

    try {
      if (prevPost?.id && prevPost.posted_by) {
        const { data } = await base.put(
          "/admin/edit_post",
          JSON.stringify(dditBod)
        );

        notifications.show({
          color: "green",
          title: "Great 🎉🎉🎉🎉",
          message: "Post edited successfully",
        });
        clearInput();
      } else {
        const { data } = await base.post("/admin/post", JSON.stringify(bod));
        notifications.show({
          color: "green",
          title: "Great 🎉🎉🎉🎉",
          message: "Post added successfully",
        });
        clearInput();
      }
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    if (render.current !== null) return;
    quill?.clipboard.dangerouslyPasteHTML(prevPost?.body as string);
  }, 300);
  setTimeout(() => {
    if (render.current !== null) return;
    render.current = prevPost?.date as string;
  }, 700);

  return (
    <div className=" h-[100vh]">
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="text-6xl font-black border-solid border-gray-300 bg-black border w-[100%] my-5"
        placeholder="New Post Title here..."
      />
      <div className="mb-5">
        <TagsInput
          value={tag}
          style={{ backgroundColor: "black" }}
          label="Press Enter to submit a tag"
          mb="md"
          onChange={setTag}
          placeholder="Enter tag"
        />
      </div>
      <div style={{ height: 600, width: 900 }}>
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
        <div className=" flex mt-3 gap-3">
          <CustomBtn color="" onClick={post}>
            {" "}
            Publish 🎉{" "}
          </CustomBtn>
          <Button loading={draftLoader} onClick={saveToDraft}>
            {" "}
            save to Draft{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
export { CloudinaryScriptContext, CloudinaryScriptContext1 };
