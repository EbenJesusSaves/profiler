export interface Post {
  comments_body: string;
  id: number;
  title: string;
  body: string;
  date: string;
  tags: string[];
  image: string;
  comments: { body: string; post_id: number; commented_by: string }[];
  posted_by: string;
}

export interface GetPosts {
  data: Post;
}

export interface CommentType {
  body: string;
  post_id: number;
  commented_by: string;
}
