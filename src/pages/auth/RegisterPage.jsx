import '../../components/auth/register/Register.css';
import RegisterIllustration from '../../components/auth/register/RegisterIllustration';
import RegisterForm from '../../components/auth/register/RegisterForm';

function RegisterPage() {
  return (
    <div className="register-page">
      <RegisterIllustration />
      <main className="register-form-side">
        <RegisterForm />
      </main>
    </div>
  );
}

export default RegisterPage;
