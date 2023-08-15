import Seo from "@/components/seo";
import Link from "next/link";

//AOS 라이브러리 설치
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from 'react';

//이미지 파일 임포트
import Image from 'next/image';
import Main_01 from "@/public/contents/main_01.png"
import Content_01 from "@/public/contents/side_01.jpg"
import Content_02 from "@/public/contents/back_03.jpg"
import Item_01 from "@/public/contents/front_01.jpg"
import Item_02 from "@/public/contents/inside_02.jpeg"
import Item_03 from "@/public/contents/wheel_01.jpeg"


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });

    
  }, []);

  

    return (
      <div>
        <Seo title= "Home" />
        <div className="main-background">
          <div className="main-container">
            <div className="main-text">
              <div className="main-title">Drivers High !<br />with Mazda RX-7.</div>
              <div className="main-subtitle">1978년 부터 2003년까지 마쓰다가 선보인 최고의 스포츠카,<br />마지막 모델인 3세대 모델을 만나보세요.</div>
            </div>
            <div className="main-item">
              <Image src={Main_01} alt="RX-7" priority data-aos="fade-left"  data-aos-easing="ease-in-out" data-aos-once="true" />
            </div>
          </div>
        </div>

        <div className="contentbox-1">
          <div className="textbox-1" data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
            <div className="title-left">아름다운 곡선, 아름다운 성능.</div>
            <div className="subtitle-left">RX-7 3세대는 기존 2세대의 직선적인 디자인에서 탈피하여 곡선적인 디자인에 도전했습니다.<br/>그리고 놀라운 가속력과 고속주행 성능을 자랑합니다. 경량 바디와 밸런스드 핸들링은 주행의 쾌감을 높여주며, 독특한 엔진 사운드는 열정적인 운전자들에게 최고의 운전 경험을 선사합니다.</div>
          </div>
          <div className="imagebox-1">
            <Image src={Content_01} alt="RX-7" data-aos="fade" data-aos-easing="ease-in-out" data-aos-once="true" />
          </div>
        </div>

        <div className="contentbox-2">
          <div className="textbox-1" data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
            <div className="title-right">궁극적인 성능, 로터리 엔진</div>
            <div className="subtitle-right">마쓰다 RX-7은 로터리 엔진의 자랑스러운 결실입니다. 라이센스 구입 이후 지속적인 노력과 개발로, 제대로 된 엔진을 탑재한 여러 자동차를 선보였고,<br/> 그 중에서도 RX-7은 특별한 시작을 알립니다. 1.3L 시퀀셜 트윈터보 로터리 엔진은 이 제품의 핵심이 되었습니다. 섬세한 디자인과 뛰어난 성능이 어우러진 RX-7은 운전자들에게 놀라운 경험과 감동을 선사합니다.</div>
          </div>
          <div className="imagebox-1">
            <Image src={Content_02} alt="RX-7" data-aos="fade" data-aos-easing="ease-in-out" data-aos-once="true" />
          </div>
        </div>

        {/* 하단 바로가기 링크 */}

        <div className="contentbox-3">
          <Link href="/loremipsum"  className="box-item1">
            <div className="textbox-01">
              <div className="title">RX-7이 기억되는 이유</div>
              <div className="suvtitle">RX-7은 출시 이후부터 지금까지 사람들의 기억 속에 자리를 잡아왔습니다. <br/>이니셜 D, 분노의 질주, 퍼시픽 림 등 여러 매체에서 등장하는 RX-7의 모습을 확인해보세요.</div>
              <div className="learnmore">더 알아보기 &gt; </div>
            </div>
            <Image src={Item_01} alt="RX-7이 기억되는 이유" />
          </Link>
        </div>

        <div className="contentbox-4">
          <Link href="/loremipsum"  className="box-item2">
            <div className="textbox-01">
              <div className="title">엔진 기술의 핵심</div>
              <div className="suvtitle">RX-7의 엔진 기술에 대해 알아보세요.</div>
              <div className="learnmore">더 알아보기 &gt; </div>
            </div>
            <Image src={Item_02} alt="엔진 기술의 핵심" />
          </Link>
          <Link href="/loremipsum" className="box-item3">
            <div className="textbox-01">
              <div className="title">Mazda가 만든다는 것</div>
              <div className="suvtitle">기술혁신과 도전적인 회사의 만남.</div>
              <div className="learnmore">더 알아보기 &gt; </div>
            </div>
            <Image src={Item_03} alt="Mazda가 만든다는 것" />
          </Link>
        </div>
      </div>
    )
}

