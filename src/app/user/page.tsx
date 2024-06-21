import base from "@/axios/baseApi";
import React from "react";
interface DeletePost {
  id: string;
  created_by: string;
}
const page = () => {
  const deletePost = async (post: DeletePost) => {
    const { id, created_by } = post;
    try {
      await base.post("/admin/delete_post/", { created_by, id });
    } catch (error) {}
  };

  return <div>page</div>;
};

export default page;
