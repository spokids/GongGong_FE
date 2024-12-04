import { useState } from "react";
import { PictureIcon } from "@assets/svg";
import React from "react";

const Review = () => {
    const [imgCnt, setImgCnt] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [text, setText] = useState<string>(""); 
    const [isWriting, setIsWriting] = useState(false);
    const maxLength = 500;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleFocus = () => {
        setIsWriting(true); 
    };

    const handleBlur = () => {
        setIsWriting(false);
    };
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
            setImgCnt(1);
        }
    };

    return (
        <div className='mt-3'>
            <div className='flex flex-row items-center gap-2'>
                <h1 className='text-subtitle1'>후기글</h1>
                <span className='text-orange-400 text-caption4'>필수</span>
            </div>
            
            <div className="relative mt-2">
                <textarea 
                    placeholder="이곳에 프로그램에 대한 의견을 작성해주세요" 
                    className="gap-40 mt-[6px] h-[244px] w-full py-[11px] px-3 flex justify-center rounded-lg font-regular focus:outline-none focus:outline-[1.5px] focus:bg-orange-50 focus:border-orange-200 placeholder:text-body-9 placeholder:text-primary-foundation-50 border-[1.5px] border-orange-100"
                    style={{resize: 'none'}} 
                    value={text} 
                    onChange={handleChange} 
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                />
                <div className='absolute bottom-2 right-3 text-caption4'>
                    <span className={isWriting ? 'text-orange-400' : ''}>
                        {text.length}
                    </span>
                    <span> / {maxLength}</span>
                </div>
            </div>

            <div className='flex flex-row items-center gap-2 mt-8'>
                <h1 className='text-subtitle1'>사진</h1>
                <span className='text-primary-foundation-50 text-caption4'>선택</span>
            </div>

            <div className="flex flex-row gap-2 mt-2">
                {selectedImage ? (
                    <>
                    <div className="w-[100px] h-[100px] mt-2 flex justify-center items-center rounded-lg bg-primary-5">
                        <PictureIcon style={{ fill: "#D1D1D3" }} />
                     </div>
                    <div className="w-[100px] h-[100px] mt-2 flex justify-center items-center border-[1.5px] rounded-lg overflow-hidden">
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Uploaded"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    </>
                ) : (
                    <button
                    onClick={triggerFileInput}
                    className="w-[100px] h-[100px] mt-2 flex justify-center items-center border-[2px] rounded-lg bg-primary-5 border-primary-10"
                    >
                    <PictureIcon/>
                    </button>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </div>

            <div className='mt-1 text-caption4 text-primary-40 ml-[39px]'>
                <span className={imgCnt ? 'text-primary-60' : ''}>
                    {imgCnt}
                </span>
                <span> / 1 </span>
            </div>


            <h3 className='text-primary-70 mt-[51px] text-caption3'>쾌적한 스포키즈를 위해 꼭 지켜주세요!</h3>
            <p className='text-primary-50 text-caption4'>
                욕설, 초상권 침해, 비방 및 허위 사실 등을 포함한 후기는 삭제 될 수 있으며
                가이드라인에 따라 이용 정지 등의 처분이 따를 수 있습니다.
            </p>
        </div>
    );
};

export default Review;
