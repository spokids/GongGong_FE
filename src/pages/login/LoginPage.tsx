import logoLogin from '../../assets/logoLogin.svg'
import Input from '../components/input';

const LoginPage = () => {
    return (
    <div className="flex flex-col items-center mt-[223px] space-y-6">
        <img src={logoLogin} style={{ width: '180px' }} alt="Login Logo" />
        <Input placeholder="아이디를 입력해주세요." className="mt-4" />
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
    </div>
    );
};

export default LoginPage;