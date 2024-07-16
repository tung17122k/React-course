import React from "react";

const cardTailwind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"
          className="block w-full h-full object-cover rounded-lg"
        ></img>
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-18px*2)]">
        <div className="flex justify-between mb-8">
          <div className="flex items-center gap-x-3">
            <img
              src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            ></img>
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Cosmic Perspective</h3>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-primary-gradient">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default cardTailwind;
