import {
  HiOutlineBookmark,
  HiOutlineChatAlt,
  HiOutlineHeart,
  HiOutlineShare,
} from "react-icons/hi";
import { Link } from "react-router";

const Post = ({ title, body, id }) => {
  return (
    <Link to={`/posts/${id}`}>
      <div className="flex flex-col p-2 gap-2 border-1 border-slate-100 rounded-lg w-140">
        <h2 className="font-bold text-2xl">
          {title[0].toUpperCase() + title.slice(1)}
        </h2>
        <p className="font-light text-slate-500 text-sm line-clamp-1">{body}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>Jul 30</span>
            <span>•</span>
            <span>1.9K</span>
            <span>•</span>
            <span>110</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
              <HiOutlineHeart className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <HiOutlineChatAlt className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-yellow-500 transition-colors">
              <HiOutlineBookmark className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-green-500 transition-colors">
              <HiOutlineShare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
