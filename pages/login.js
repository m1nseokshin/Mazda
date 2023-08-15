import { useState, useEffect } from 'react';
import styles from "@/styles/login.module.css"
import Image from 'next/image';
import Kakaologin from '@/public/image/kakao_login.png';
import Link from 'next/link';
import Seo from "@/components/seo";

const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      // Kakao SDK 초기화
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      
      // Kakao 로그인 버튼 생성
      window.Kakao.Auth.createLoginButton({
        container: '.kakaologinbtn',
        success: async function(authObj) {
          // 엑세스 토큰 받아오기
          const accessToken = authObj.access_token;
  
          // 사용자 정보 가져오기
          const response = await fetch(`https://kapi.kakao.com/v2/user/me`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          if (response.ok) {
            const userData = await response.json();
            console.log(userData);
          } else {
            console.error('사용자 정보를 가져오는데 실패했습니다.');
          }
        },
        fail: function(err) {
          // 로그인 실패 시 처리
          console.error(err);
        },
      });
    };
    document.head.appendChild(script);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 로그인 요청을 처리하는 코드
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };
  //버튼 누르면 계정 창으로 변경
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLoginClick = () => {
  setIsLoggedIn(!isLoggedIn);
};


  return (
    <div className={styles.loginpage}>
      <Seo title= "Login" />
      <h1 className={styles.loginmaintext}>로그인</h1>
      <form onSubmit={handleLogin} className={styles.loginmain}>
        <input className={styles.email} type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.password} type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        {email && password ? (
          <Link href='/'><button className={styles.loginbtn} type="submit">로그인</button></Link>
        ) : (
          <button className={styles.loginbtn} onClick={handleLoginClick} type="button" disabled>{isLoggedIn ? 'Logout' : 'Login'}</button>
        )}
        <Image className='kakaologinbtn' src={Kakaologin}  alt='Login With Kakao'/>
      </form>
    </div>
  );
};

export default Login;