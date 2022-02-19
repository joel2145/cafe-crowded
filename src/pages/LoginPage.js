import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    await auth.signInWithEmailAndPassword(email.value, password.value)
      .then(res => {
        navigate('/list')
      }).catch(error => {
        return null
      });
  }

  const moveToSignUp = () => {
    navigate("/sign_up")
  }

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          初めての方はこちら↓
        </div>
        <button type="button" onClick={() => moveToSignUp()}>
          新規登録
        </button>
      </form>
    </div>
  );
};
