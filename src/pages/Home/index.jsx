const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          Human
          <br />
          stories & ideas
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A place to read, write, and deepen your understanding
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
          Start reading
        </button>
      </div>
    </div>
  );
};

export default Home;
