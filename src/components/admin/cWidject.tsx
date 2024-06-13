import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

declare global {
  interface Window {
    cloudinary: any; // Use specific type if available
  }
}
interface CloundinaryConf {
  uwConfig: {};
  setImageLink: Dispatch<SetStateAction<string>>;
}

type CloudinaryError = {
  message: string;
} | null;

interface IUploadResult {
  event: string;
  info: {
    id: string;
    batchId: string;
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    asset_folder: string;
    display_name: string;
    original_filename: string;
    original_extension: string;
    path: string;
    thumbnail_url: string;
  };
}

function CloudinaryUploadWidget({ uwConfig, setImageLink }: CloundinaryConf) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = window?.cloudinary.createUploadWidget(
        uwConfig,
        (error: CloudinaryError, result: IUploadResult) => {
          if (!error && result && result.event === "success") {
            setImageLink(result.info.url);
          }
        }
      );
      const openWidgetWrapper = (() => {
        const widget = myWidget;
        return () => widget.open();
      })();
      const openWidgetWrapper1 = (() => {
        const widget = myWidget;
        return () => widget.open();
      })();
      const uploadWidgetElement = document.getElementById("upload_widget");

      const uploadWidgetElement1 = document.getElementById("upload_widget1");
      uploadWidgetElement1?.removeEventListener("click", openWidgetWrapper);
      uploadWidgetElement?.removeEventListener("click", openWidgetWrapper1);

      uploadWidgetElement?.addEventListener("click", openWidgetWrapper, {
        once: true,
      });
      uploadWidgetElement1?.removeEventListener("click", openWidgetWrapper1);
      uploadWidgetElement1?.addEventListener("click", openWidgetWrapper1, {
        once: true,
      });
    }
  };

  return { initializeCloudinaryWidget, loaded };
}

export default CloudinaryUploadWidget;
