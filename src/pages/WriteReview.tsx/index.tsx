import { PictureIcon } from "@assets/svg";

const WriteReview = () => {
    return (
        <div className='mt-3'>
            <div className='flex flex-row gap-2'>
                <h1 className='text-subtitle1'>후기글</h1>
                <span className='text-orange-400 text-caption4'>필수</span>
            </div>
            
            <textarea placeholder="이곳에 프로그램에 대한 의견을 작성해주세요" 
            className="gap-40 mt-[6px] h-[244px] w-full py-[11px] px-3 flex justify-center rounded-lg, font-regular focus:outline-none focus:outline-[1.5px] focus:bg-orange-50 focus:border-orange-200 placeholder:text-body-9 placeholder:text-primary-foundation-50 border-[1.5px] border-orange-100" />

            <div className='flex flex-row gap-2 mt-8'>
                <h1 className='text-subtitle1'>사진</h1>
                <span className='text-primary-foundation-50 text-caption4'>선택</span>
            </div>

            <div className='w-[100px] h-[100px] flex justify-center items-center border-[1.5px] rounded-lg bg-foundation-5'>
                <PictureIcon/>
            </div>
            
            <h3 className='text-primary-70 mt-[51px] text-caption3'>쾌적한 스포키즈를 위해 꼭 지켜주세요!</h3>
            <p className='text-primary-50 text-caption4'>욕설, 초상권 침해, 비방 및 허위 사실 등을 포함한 후기는 삭제 될 수 있으며
            가이드라인에 따라 이용 정지 등의 처분이 따를 수 있습니다.</p>
        </div>
    );
};

export default WriteReview;