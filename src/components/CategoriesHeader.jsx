const CategoriesHeader = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Outlined Text */}
        <div className="flex justify-center">
          <h2
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-wider select-none"
            style={{
              WebkitTextStroke: "2px #10b981",
              WebkitTextFillColor: "transparent",
              textStroke: "2px #10b981",
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
