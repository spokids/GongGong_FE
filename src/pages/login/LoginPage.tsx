import logoLogin from '../../assets/logoLogin.svg';
import ButtonComponent from '../components/ButtonComponent';
import Input from '../components/InputComponents';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center mt-56 space-y-6">
            {/* 로고 */}
            <img src={logoLogin} style={{ width: '180px' }} alt="Login Logo" />

            {/* 입력 필드 */}
            <div
                className="flex flex-col gap-2 w-[350px]"
                style={{ marginTop: '120px' }}
                >
                <Input placeholder="아이디를 입력해주세요." />
                <Input type="password" placeholder="비밀번호를 입력해주세요." />
            </div>


            {/* 버튼 */}
            <ButtonComponent
                className="flex bg-[#FF8C2E] text-white"
                text="로그인하기"
                style={{ marginTop: '70px'}} // style 객체 형태로 수정
            />
        </div>
    );
};

export default LoginPage;
