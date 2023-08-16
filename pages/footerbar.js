import Link from "next/link";
import styles from "@/styles/footerbar.module.css"
import React, { useEffect, useState } from 'react';

//이미지 파일 임포트
import Image from "next/image"
import Logo from "/public/image/logo.png"
import Sns_01 from "/public/image/facebook_b.svg"
import Sns_02 from "/public/image/youtube_b.svg"
import Sns_03 from "/public/image/instagram_b.svg"

export default function Footerbar(){

    useEffect(() => {
        const handleScroll = () => {
          const problemElement = document.querySelector('.problemcontainer');
          const footerElement = document.querySelector('.footercontainer');
          const footertextElement = document.querySelector('.footertext')
    
          if (problemElement && footerElement) {
            const rect = problemElement.getBoundingClientRect();
            const isVisible = rect.bottom < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
              footerElement.classList.add('active');
              footertextElement.classList.add('active');
            } else {
              footerElement.classList.remove('active');
              footertextElement.classList.remove('active');
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div>
            <div className={styles.whitebar}></div>
            <div className="problemcontainer">
                <div className={styles.problemitem}>
                    <div className={styles.text_01}>문제가 있으신가요?</div>
                    <div className={styles.text_02}>고객 센터로 전화 또는 이메일 문의를 주실 경우 문제를 도와드리겠습니다.</div>
                    <div className={styles.text_02}>E-mail:  abcd@example.com<br/>Tel: 1234-5678</div>
                    <Link href="/support" className={styles.text_03}>자주 받는 질문 &gt;</Link>
                </div>
            </div>

            <div className="footercontainer">
                <div className={styles.footeritem}>
                    <Image src={Logo} alt="mazda"/>
                    <div className={styles.copyright}>
                    ©2023 MAZDA OPERATIONS. ALL RIGHTS RESERVED. <br/>Location: 3-1 Shinchi, Fuchū, Hiroshima, Japan
                    </div>
                </div>
                <div className={styles.footeritem}>
                    <div className={styles.footertitle}>ABOUT MAZDA</div>
                    <Link href="/loremipsum" className={styles.footersubtitle}>Terms And Conditions</Link>
                    <Link href="/loremipsum" className={styles.footersubtitle}>Privacy Policy</Link>
                    <Link href="/loremipsum" className={styles.footersubtitle}>Cookie Preferences</Link>
                </div>
                <div className={styles.footeritem}>
                    <div className={styles.footertitle}>MENU</div>
                    <Link href="/" className={styles.footersubtitle}>Home</Link>
                    <Link href="/about" className={styles.footersubtitle}>About</Link>
                    <Link href="/innovation" className={styles.footersubtitle}>Information</Link>
                    <Link href="/support" className={styles.footersubtitle}>Support</Link>
                </div>
                <div className={styles.footeritem2}>
                    <Link href='https://www.facebook.com/MazdaUSA' className={styles.hyperlinkimg}><Image src={Sns_01} alt="facebook"/></Link>
                    <Link href='https://www.youtube.com/user/mazdausa' className={styles.hyperlinkimg}><Image src={Sns_02} alt="youtube"/></Link>
                    <Link href='https://www.instagram.com/mazda_jp/' className={styles.hyperlinkimg}><Image src={Sns_03} alt="instagram"/></Link>
                </div>
            </div>

            <div className="footertext">
                해당 사이트는 개인 포트폴리오 용도로 만들어졌습니다.<br/> 대부분의 이미지와 콘텐츠는 Mazda Official Site에서 가져왔으며, 상업적으로 사용할 의도가 전혀 없음을 알립니다.
              </div>
        </div>
    )
    
}