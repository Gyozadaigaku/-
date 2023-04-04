export const DisplaySection = () => {
  return (
    <div className="ml-auto mr-auto w-full box-border flex items-center flex-col pt-16 relative max-w-5xl z-10 min-h-[831px] h-[calc(100vh - 4rem)]">
      <h2 className="text-gray-600 text-base font-normal">New</h2>
      <p className="inline-block text-transparent mt-4 text-5xl font-semibold mb-4 pt-[0.5px] bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        Brilliant.
      </p>
      <span className="text-xl font-normal">
        A display that’s up to 2x brighter in the sun.
      </span>
      <button className="bg-blue-600 text-white cursor-pointer inline-block text-center whitespace-no-wrap text-base font-normal min-w-[28px] py-2 px-4 rounded-full m-[15px]">
        Try me!
      </button>
      <button className="bg-white text-black text-xs cursor-pointer fixed rounded-full border-none py-[10px] px-[30px] transition-all duration-700 ease-in bottom-[10px] right-[10px]">
        TOP
      </button>
    </div>
  );
};
