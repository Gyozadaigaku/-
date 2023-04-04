export const SoundSection = () => {
  return (
    <div className="w-full text-gray-900 bg-gray-100 h-screen sound_section">
      <div className="max-w-[980px] mx-auto">
        <div className="w-full flex items-center flex-col max-w-[490px] py-[200px] opacity-0 sound_section_content">
          <h2 className="text-gray-900 text-base font-normal mb-0">
            New Sound System
          </h2>
          <p className="inline-block text-transparent mt-4 text-5xl font-semibold mb-4 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Feel the base.
          </p>
          <span className="text-xl font-normal">
            From $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
          <ul className="flex justify-center mt-6 items-center ml-0 mr-0 pl-0 list-none">
            <li>
              <button className="bg-blue-600 text-white cursor-pointer inline-block text-center whitespace-no-wrap text-base font-normal min-w-[28px] py-2 px-4 rounded-full">
                Buy
              </button>
            </li>
            <li>
              <a className="no-underline text-blue-500 text-xl font-normal cursor-pointer mx-[14px]">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
