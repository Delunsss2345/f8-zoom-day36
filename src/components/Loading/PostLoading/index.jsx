const PostLoading = () => {
  return (
    <div className="flex flex-col p-2 gap-2 border border-slate-100 rounded-lg w-140">
      <div className="h-6 bg-slate-200 rounded w-3/4 animate-pulse"></div>

      <div className="h-4 bg-slate-200 rounded w-full line-clamp-1 animate-pulse"></div>

      <div className="flex items-center justify-between mt-2 animate-pulse">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="h-3 w-8 bg-slate-200 rounded"></div>
          <div className="h-3 w-1 bg-slate-200 rounded"></div>
          <div className="h-3 w-6 bg-slate-200 rounded"></div>
          <div className="h-3 w-1 bg-slate-200 rounded"></div>
          <div className="h-3 w-6 bg-slate-200 rounded"></div>
        </div>

        <div className="flex items-center gap-3 animate-pulse">
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PostLoading;
