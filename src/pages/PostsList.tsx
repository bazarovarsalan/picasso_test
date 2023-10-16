import { useGetPostsQuery } from "../redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "../App.css";
import PostItem from "../components/PostItem";

const PostsList = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery(99);

  return (
    <>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : posts ? (
        <div className="posts-list">
          {posts.map((o) => (
            <PostItem
              key={o?.id}
              id={o.id}
              userId={o.userId}
              title={o.title}
              body={o.body}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default PostsList;
