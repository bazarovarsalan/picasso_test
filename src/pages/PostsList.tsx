import { useGetPostsQuery } from "../redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "../App.css";
import PostItem from "../components/PostItem";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TPost } from "../types/types";

const PostsList = () => {
  const [startNum, setStartNum] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const { data: posts, isLoading, isError } = useGetPostsQuery(100);
  const [postsForRender, setPostsForRender] = useState<TPost[]>([]);

  useEffect(() => {
    posts && setPostsForRender(posts.slice(0, 10));
  }, [posts]);

  const loadMore = () => {
    if (postsForRender.length === posts?.length) setHasMore(false);
    setStartNum(startNum + 10);
    posts &&
      setPostsForRender((prev) => [
        ...prev,
        ...posts.slice(startNum, startNum + 10),
      ]);
  };

  return (
    <>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : posts ? (
        <div className="posts-list">
          {
            <InfiniteScroll
              dataLength={postsForRender.length}
              next={loadMore}
              hasMore={hasMore}
              loader={<h4> Загрузка...</h4>}
            >
              {postsForRender.map((o) => (
                <PostItem
                  key={o.id}
                  id={o.id}
                  userId={o.userId}
                  title={o.title}
                  body={o.body}
                />
              ))}
            </InfiniteScroll>
          }
        </div>
      ) : null}
    </>
  );
};

export default PostsList;
