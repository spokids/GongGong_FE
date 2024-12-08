import useDeleteUser from "@api/hooks/auth/useDeleteUser";

const AccountSetting = () => {
    const { mutate } = useDeleteUser();

    const handleClick = () => {
        mutate();
    }
    return (
        <div className="mt-4 ">
            <h1 className="text-foundation-100 text-body6">로그아웃</h1>
            <button 
            type="button" 
            className="mt-4 text-primary-foundation-50 text-body7" 
            onClick={handleClick}>
                회원 탈퇴
            </button>
        </div>
    );
};

export default AccountSetting;