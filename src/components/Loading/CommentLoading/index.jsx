import { HiOutlineMail } from "react-icons/hi";

const CommentLoading = () => {
  return (
    <div className="border-gray-200 pb-6 border p-4 rounded-lg animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />

        <div className="flex-1">
          <div className="mb-2 space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="flex items-center gap-1">
              <HiOutlineMail className="w-4 h-4 text-gray-400" />
              <div className="h-3 w-40 bg-gray-300 rounded" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-300 rounded" />
            <div className="h-3 w-5/6 bg-gray-300 rounded" />
            <div className="h-3 w-4/6 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentLoading;
