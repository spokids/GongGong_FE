import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen pb-20 bg-gray-100">
      <div className="w-full h-[252px] p-4 text-white bg-orange-400">
        <p className="text-body9">안녕하세요, 닉네임님</p>
        <h1 className="mt-1 text-sm">우리 아이를 위한 <br/> 체육 활동을 찾아볼까요?</h1>
      </div>

      <main className="p-4">
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-bold">체육 프로그램 목록</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="아이에게 딱 맞는 프로그램 찾기"
              className="w-full p-2 border rounded-lg"
            />
          </div>

        </section>
      </main>
    </div>
  );
};

export default HomePage;
