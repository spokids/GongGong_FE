import { Link } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin.svg';
import ButtonComponent from '../components/ButtonComponent';
import Input from '../components/InputComponents';
import loginMain from '../../assets/loginMain.svg';

const SigninPage = () => {
    return (
        <div className="flex flex-col items-center mt-[94px] space-y-6">
            {/* 이미지 겹치기 */}
            <div className="relative w-full" style={{ height: '300px' }}>
                <img 
                    src={loginMain} 
                    alt="Login Main" 
                    className="absolute top-0 left-0 object-cover w-full h-full" 
                />
                <img 
                    src={logoLogin} 
                    style={{ width: '180px', position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} 
                    alt="Login Logo" 
                />
            </div>

            {/* 입력 필드 */}
            <div
                className="flex flex-col w-[350px] gap-2"
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
                <text style={{display:'flex', color:'#484851', fontSize:'14px', letterSpacing:'-0.42px', textDecorationLine:'underline', marginTop:'-20px'}}>회원가입하기</text>
            </Link>
        </div>
    );
};

export default SigninPage;
