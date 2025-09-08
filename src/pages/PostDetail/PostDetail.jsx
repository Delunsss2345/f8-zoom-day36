import { useEffect, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading";
import CommentLoading from "../../components/Loading/CommentLoading";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        setLoading(true);

        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!postResponse.ok) {
          navigate("/posts", { replace: true });
          return;
        }

        const postData = await postResponse.json();

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const commentsData = await commentsResponse.json();
        setPost(postData);
        setComments(commentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPostAndComments();
    }
  }, [id, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/posts")}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-700 mb-6 transition-colors"
      >
        <HiOutlineArrowLeft className="w-5 h-5" />
        <span>Back to Posts</span>
      </button>

      <article className="bg-white rounded-lg shadow-md p-6 mb-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <HiOutlineUser className="w-4 h-4" />
            <span className="text-sm">User ID: {post.userId}</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
        </div>
      </article>

      <section className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Comments ({comments.length})
        </h2>

        {loading ? (
          new Array(3).fill(null).map(() => <CommentLoading />)
        ) : comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No comments yet.</p>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className=" border-gray-200 pb-6 border p-4 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {comment.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <HiOutlineMail className="w-4 h-4" />
                        <span>{comment.email}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {comment.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PostDetail;
