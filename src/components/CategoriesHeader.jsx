const CategoriesHeader = () => {
  return (
    <section className="bg-[#0f1419] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Gradient Outlined Text */}
        <div className="flex justify-center">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-wider select-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400"
            style={{
              WebkitTextStroke: "2px transparent",
              backgroundImage: "linear-gradient(to right, #22d3ee, #10b981, #a3e635)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            CATEGORIES
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHeader;
