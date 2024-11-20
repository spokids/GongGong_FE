import { Link } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin.svg';
import ButtonComponent from '../components/ButtonComponent';
import Input from '../components/InputComponents';

const SigninPage = () => {
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
                style={{ marginTop: '70px'}}
            />

            <text style={{display:'flex', color:'#484851', fontSize:'14px', letterSpacing:'-0.42px', marginTop:'20px'}}>스포키즈가 처음이신가요?</text>
            <Link to="/signup">
                <text style={{display:'flex', color:'#484851', fontSize:'14px', letterSpacing:'-0.42px', textDecorationLine:'underline', marginTop:'0px'}}>회원가입하기</text>
            </Link>
        </div>
    );
};

export default SigninPage;
