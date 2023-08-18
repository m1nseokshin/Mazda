import Seo from "@/components/seo";
import Link from "next/link";
import Script from 'next/script'


//AOS 라이브러리 설치
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';

//이미지 파일 임포트
import Image from 'next/image';
import Support_01 from '@/public/contents/support_01.jpg';
import Support_02 from '@/public/contents/support_02.jpg';
import Support_03 from '@/public/contents/support_03.jpg';
import Support_04 from '@/public/contents/support_04.jpg';


const Support = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.61922034521712, 127.10393083271768),
          level: 4,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPositions = [
          new window.kakao.maps.LatLng(37.61922034521712, 127.10393083271768),
        ];

        for (const position of markerPositions) {
          addMarkerToMap(map, position);
        }
      });
    };

    const addMarkerToMap = (map, position) => {
      const marker = new window.kakao.maps.Marker({
        position: position,
      });

      marker.setMap(map);
    };

    // AOS 초기화
    AOS.init({
      duration: 1500,
    });

    // script를 document에 붙이기.
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(process.env.NEXT_PUBLIC_KAKAO_API_KEY_MAP)}&autoload=false`;
    mapScript.addEventListener('load', onLoadKakaoMap);
    document.head.appendChild(mapScript);
  }, []);

  return (
  <div>
    <Seo title= "Support" />
    <div className="support-center-title">
      <div className="title">고객 센터</div>
      <div className="subtitle">필요한 정보를 신속하게 찾을 수 있도록 Mazda 소유, 임대 및 서비스에 대한 유용한 정보를 드리겠습니다.</div>
    </div>
    <div className="support-container" data-aos="fade-up"  data-aos-easing="ease-in-out" data-aos-once="true">
      <Link href='/loremipsum' className="support-item">
        <Image src={Support_01} alt="GO TO 차량 점검 서비스" priority />
        <div className="support-text">
          <div className="title-left">차량 점검 서비스</div>
          <div className="subtitle-left">고객님이 보유하신 RX-7의 기술 점검을 받을 수 있습니다.</div>
        </div>
      </Link>
      <Link href='/loremipsum' className="support-item">
        <Image src={Support_02} alt="GO TO대면 상담 서비스" priority />
        <div className="support-text">
          <div className="title-left">대면 상담 서비스</div>
          <div className="subtitle-left">차량에 관한 궁금한 것들을 직원에게 물어보실 수 있습니다.</div>
        </div>
      </Link>
      <Link href='/loremipsum' className="support-item">
        <Image src={Support_03} alt="GO TO 차량 정보 및 프로모션" priority />
        <div className="support-text">
          <div className="title-left">차량 정보 및 프로모션</div>
          <div className="subtitle-left">RX-7 관련 정보와 특가 및 이벤트를 알려드립니다.</div>
        </div>
      </Link>
    </div>

      <div className="about-content-container" data-aos="fade"  data-aos-easing="ease-in-out" data-aos-once="true">
        <Link href='/loremipsum' className={`about-content-textbox ${isHovered ? 'hovered' : ''}`}onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
          <div className="title-left">Mazda 재무 보고서</div>
          <div className="subtitle-left">재무 보고서는 마쓰다의 연간 유카쇼켄 보고서의 주요 부분을 포함하고 있습니다. <br />재무 제표, 연결 재무제표 주석, 사업 위험, 사업 성과 분석, 재무 상태 및 현금 흐름 등을 다루고 있습니다.</div>
        </Link>
        <div className="about-content-image"><Image src={Support_04} alt="재무 보고서" priority />
        </div>
      </div>

      <div className="store-text">
        <div className="title">서비스 센터 찾기</div>
        <div className="subtitle">서비스 센터 방문 시 빠른 지원을 받을 수 있습니다.</div>
      </div>

      <div id="map"></div>

  </div>

  );
};

export default Support;
