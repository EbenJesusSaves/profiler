// "use client";

// import { useState } from "react";
// import CloudinaryUploadWidget from "./cWidject";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

// export const ImageString = () => {
//   const [publicId, setPublicId] = useState<string>();
//   // Replace with your own cloud name

//   // Replace with your own upload preset
//   const [uploadPreset] = useState("halumx55");
//   const cloudName = "djzn1iixv";
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "djzn1iixv",
//     },
//   });

//   const [uwConfig] = useState({
//     cloudName,
//     uploadPreset,
//   });
//   const myImage = cld.image(publicId);
//   console.log(myImage);
//   return (
//     <div className="App">
//       <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />

//       <div style={{ width: "800px" }}>
//         <AdvancedImage
//           style={{ maxWidth: "100%" }}
//           cldImg={myImage}
//           plugins={[responsive(), placeholder()]}
//         />
//       </div>
//     </div>
//   );
// };
