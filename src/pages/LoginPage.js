import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  // const { user } = useAuthContext();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { email, password } = event.target.elements;
  //   auth.signInWithEmailAndPassword(email.value, password.value);
  //   // console.log(email, password)
  //   navigate('/list')
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    await auth.signInWithEmailAndPassword(email.value, password.value)
      .then(res => {
        // console.log('これは非同期処理成功時のメッセージです')
        navigate('/list')
      }).catch(error => {
        // console.error('これは非同期処理失敗時のメッセージです。', error)
        return null
      });
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
          ユーザ登録は<Link to={'/sign_up'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};
