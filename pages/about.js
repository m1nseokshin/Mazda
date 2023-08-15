import Seo from "@/components/seo";
import Link from "next/link";

//AOS 라이브러리 설치
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from 'react';

//이미지 파일 임포트
import Image from 'next/image';
import Main from '@/public/contents/About_01.jpeg';
import Con_01 from '@/public/contents/About_02.jpeg';
import Con_02 from '@/public/contents/About_03.jpeg';

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });

    
  }, []);

    return (
      <div>
        <Seo title= "About" />
        <div className="about-main-container">
          <Image className="about-main-img" src={Main} alt="Mazda" />
          <div className="about-main-text">About Mazda</div>
        </div>

        <div className="title">마쓰다는 노력합니다.</div>
        <div className="subtitle">회사 설립 이후 103년의 역사를 돌아보며, 우리는 다양한 기술과 지혜와 열정을 활용하여 사람들에게 영감을 주고,<br/> 움직이는 삶을 풍요롭게 하는 감동적인 경험을 만들어 냈습니다.<br/> 사람들이 마음의 평화를 가지고 안전하고 자유롭게 이동할 수 있는 사회를 달성하는 것을 목표로 가족과 친구들과 기쁨을 나누는 것에 공헌했습니다.</div>

        <div className="about-content-container">
          <div className="about-content-textbox">
            <div className="title-left">마쓰다는 리스킬링 추진 선언 제도를 체택합니다.</div>
            <div className="subtitle-left">마쓰다는 가장 중요한 자산인 직원이 자율적이고 활약하는 것을 뒷받침할 수 있는 인적 자본에 대한 투자 강화를 추진하고 있습니다. <br />디지털화가 본격화되는  가운데, 이를 지지하는 직원의 리스킬링을 향한 지원도 확충합니다.</div>
          </div>
          <div className="about-content-image"><Image src={Con_01} alt="리스킬링 추진 선언 제도" /></div>
        </div>

        <div className="about-content-container2">
          <div className="about-content-textbox">
            <div className="title-left">마쓰다는 제조과정에서 발생하는 탄소 발생을 줄입니다.</div>
            <div className="subtitle-left">마쓰다는 자동차가 운전할 때뿐만 아니라 자동차가 만들어지고 사용이 끝날 때까지 자동차가 배출하는 배출에 대한 책임을 집니다. <br />자동차의 전체 수명 동안 이산화탄소 배출량을 줄이기 위해 마쓰다는 자동차 제조, 배송, 사용 및 재활용의 환경적 부담을 줄일 수 있는 영역을 정확히 파악할 수 있는 라이프 사이클 평가를 사용합니다.</div>
          </div>
          <div className="about-content-image"><Image src={Con_02} alt="리스킬링 추진 선언 제도" /></div>
        </div>

      </div>
    )
}