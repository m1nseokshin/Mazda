import '@/styles/globals.css'
import Navbar from "./navbar"
import Footerbar from "./footerbar"
export default function App({ Component, pageProps }) {

  function App({ Component, pageProps }) {

    function kakaoInit() {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      console.log(window.Kakao.isInitialized());
      // 이후의 코드를 여기에 추가하십시오.
    }
  
    // 페이지가 로드되면 kakaoInit 함수 실행
    window.addEventListener('load', kakaoInit);
  }
  

  return(
    <>
      <Navbar />
      <Component {...pageProps}/>
      <Footerbar />
    </>
  )
}