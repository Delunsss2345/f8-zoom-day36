import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import PostLoading from "../../components/Loading/PostLoading";
import Pagination from "../../components/Pagination";
import Post from "../../components/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const idTimeOuT = setTimeout(() => {
      setLoading(true);
    }, 1000);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
      .then((res) => {
        const total = res.headers.get("x-total-count");
        return res.json().then((data) => ({ data, total }));
      })
      .then(({ data, total }) => {
        setPosts([...data]);
        setTotalPost(total);
        setSearchParams({ page: page });
      })
      .catch(() => {
        setPosts([]);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(idTimeOuT);
      });
  }, [page]);

  const handleChange = (num) => {
    setPage(num);
    setSearchParams({ page });
  };
  return (
    <div className="flex flex-col items-center gap-5 p-2">
      {posts.length === 0 || loading
        ? new Array(10).fill(0).map(() => <PostLoading />)
        : posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
      <Pagination
        handleChange={handleChange}
        itemsPerPage={20}
        length={totalPost}
        page={page}
      />
    </div>
  );
};

export default Posts;
