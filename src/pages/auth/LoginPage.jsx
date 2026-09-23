import '../../components/auth/login/Login.css';
import LoginIllustration from '../../components/auth/login/LoginIllustration';
import LoginForm from '../../components/auth/login/LoginForm';

function LoginPage() {
  return (
    <div className="login-page">
      <LoginIllustration />
      <main className="login-form-side">
        <LoginForm />
      </main>
    </div>
  );
}

export default LoginPage;
