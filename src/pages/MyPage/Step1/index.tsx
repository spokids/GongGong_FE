import { useState } from 'react';
import SaveProgramming from './Tab1';
import MyReview from './Tab2/MyReview';
import { useGetUser } from '@api/hooks/user/useGetUser';

const MyPage = () => {
    const [activeTab, setActiveTab] = useState<"SaveProgramming" | "reviews">("SaveProgramming");
    const { data: user } = useGetUser();

    return (
        <div className='mt-2'>
          {user&& (
            <>
             <h1 className="text-foundation-100 text-title1">{user.nickName}</h1>
             <div className='flex flex-row gap-4'>            
             <p className="text-primary-50 text-body9">{user.userInputId}</p>
                 <a href='/account-setting' className='underline text-primary-50 text-link'>계정설정</a>
             </div>
             </>
          )}

            <div className="flex mt-6 items-center justify-between w-full h-[31px] border-b p-6">
        <button
          className={`flex-1 text-center py-3 text-subtitle1 border-b-2 w-full ml-[-24px] ${
            activeTab === "SaveProgramming"
              ? "text-foundation-100 border-foundation-100"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setActiveTab("SaveProgramming")}
        >
          저장한 프로그램
        </button>

        <button
          className={`flex-1 text-center py-3 text-subtitle1 border-b-2 mr-[-24px] ${
            activeTab === "reviews"
              ? "text-foundation-100 border-primary-foundation-100"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          내가 남긴 후기 <span className="text-orange-400 text-body9">14개</span>
        </button>
      </div>

      <div className="w-full">
        {activeTab === "SaveProgramming" ? (
          <SaveProgramming/>
        ) : (
          <MyReview/>
        )}
      </div>
    </div>
    );
};

export default MyPage;