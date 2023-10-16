import { useParams } from "react-router-dom";
import { useGetPostDetailsQuery } from "../redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import PostItemDetails from "../components/PostItemDetails";

const PostDetails = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostDetailsQuery(id?.substring(1));

  return (
    <>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : post ? (
        <div className="posts-list">
          <PostItemDetails
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        </div>
      ) : null}
    </>
  );
};

export default PostDetails;
