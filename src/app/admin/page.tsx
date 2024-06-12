import RichTextEditor from "@/components/admin/quill";
import { LabelInputContainer } from "@/components/home/Forms";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import React from "react";

const page = () => {
  return (
    <div className="  flex flex-col items-center">
      <div>
        <div className="">Title: </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full Name</Label>
            <Input id="firstname" placeholder="Full Name" type="text" />
          </LabelInputContainer>
        </div>
      </div>
      <RichTextEditor />
    </div>
  );
};
export default page;
