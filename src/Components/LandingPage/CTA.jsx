const CTA = () => {
  return (
    <section className="min-h-100 flex justify-center items-center px-6 ">
      <div
        className="relative overflow-hidden rounded-3xl max-w-7xl w-full min-h-65
        bg-indigo-900 p-10 text-white"
      >
        {/* Dot Pattern */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[22px_22px]"
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="lg:w-7/12 flex flex-col gap-4">
            <h1 className="font-extrabold text-4xl lg:text-5xl">
              Ready to Ace Your Semester?
            </h1>

            <p className="text-lg text-indigo-100 max-w-xl">
              Access the most comprehensive library of PYQs and smart solutions
              for your university today.
            </p>
          </div>

          {/* Buttons */}
          <div className="lg:w-5/12 flex gap-4 flex-wrap justify-center lg:justify-end">
            <button
              type="button"
              className="bg-white px-7 cursor-pointer py-4 rounded-xl text-black font-semibold
              shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>

            <button
              type="button"
              className="bg-indigo-700 cursor-pointer px-7 py-4 rounded-xl text-white font-semibold
              shadow-md hover:bg-indigo-800 hover:scale-105 transition-all duration-300"
            >
              Browse PYQ Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
