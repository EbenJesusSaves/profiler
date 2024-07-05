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
  created_by?: string;
}

export interface GetPosts {
  data: Post;
}

export interface CommentType {
  body: string;
  post_id: number;
  commented_by: string;
}

export interface Article {
  body: string;
  date: string;
  id: number;
  image: string;
  tags: string[];
  title: string;
  posted_by: string;
}
