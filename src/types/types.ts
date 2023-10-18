export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostItemProps = TPost;

export type InfiniteScrollProps = {
  data: TPost[];
  renderItem: ({ userId, title, body, id }: PostItemProps) => JSX.Element;
};
