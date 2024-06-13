"use client";
import RichTextEditor from "@/components/admin/quill";
import { Text, Timeline } from "@mantine/core";
import { IconHome, IconTags, IconTournament } from "@tabler/icons-react";

// import { auth } from "../../auth/auth";
// import { redirect } from "next/navigation";

const page = async () => {
  // const session = await auth();
  // if (!session) return redirect("/api/auth/signin");

  return (
    <div className="  flex flex-col mx-60 ">
      <div className="flex  justify-around flex-wrap">
        <RichTextEditor />
        <div className="mt-10  w-1/6">
          <div className="font-black text-2xl mb-2">Tips:</div>

          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconHome size={12} />}
              title="Writing a Great Post Title"
            >
              <Text c="dimmed" size="sm">
                Think of your post title as a super short (but compelling!)
                description — like an overview of the actual post in one short
                sentence.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconTags size={12} />}
              title="Tagging Guidelines"
            >
              <Text c="dimmed" size="sm">
                Tags help people find your post - think of them as the topics or
                categories that best describe your post.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Editor Basics"
              bullet={<IconTournament size={12} />}
              lineVariant="dashed"
            >
              <Text c="dimmed" size="sm">
                Use Markdown to write and format posts. Commonly used syntax
                Embed rich content such as Tweets, YouTube videos, etc. Use the
                complete URL:
              </Text>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
};
export default page;
