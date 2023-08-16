import Seo from "@/components/seo";
import Link from "next/link";

//AOS 라이브러리 설치
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';

//이미지 파일 임포트
import Image from 'next/image';
import News_01 from '@/public/contents/innovation_02.jpeg';
import Innovation_01 from '@/public/contents/innovation_01.mp4';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Innovation = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  const breakpoints = {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };

  return (
    <div>
      <Seo title= "Innovation" />
      <div className="innovation-main-container">
      <video loop={true} autoPlay={true} muted playsInline className="innovation-main-video" src={Innovation_01}></video>

        <div className="innovation-main-text">
          <div className="title">기술 혁신</div>
          <div className="subtitle">신체적으로나 정신적으로 사람들을 활성화시키는 차량을 만드는 것은 마쓰다의 중요한 임무입니다. <br/>이는 우리가 사람들에 대한 이해를 계속 하는 이유이며, 인간 중심 철학에 의해 추진됩니다. 자동차 산업의 패러다임 변화에 발맞추어,<br/> 우리는 일상에 더 많은 즐거움을 제공하기 위하여, RX-7에 탑재된 기술 비전을 소개합니다.</div>
        </div>
      </div>

      <Swiper data-aos="fade"  data-aos-easing="ease-in-out" data-aos-once="true"
        breakpoints={breakpoints}

        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="innovation-swiper-text"><div className="title">가장 크고 강력한 성능을 선보이다</div><div className="subtitle">마쯔다 RX-7은 길이4,285mm, 폭 1,760mm, 신장 1,230mm 라는 기존 제품보다 큰 크기를 가진 2도어의 스포츠카입니다.  Hitachi와 협업한 트윈 터보 차징 시스템을 도입하여 가속 동안 4,000 rpm에서 rpm 범위의 상반부에 활성화되어 레드 라인까지 10 psi를 유지하는 기능을 도입했습니다.</div></div></SwiperSlide>
        <SwiperSlide><div className="innovation-swiper-text"><div className="title">로터리 엔진이 탑재되는 과정</div><div className="subtitle">마츠다는 1959년, 로터리엔진의 라이센스를 구입합니다. 이후 로터리엔진의 단점과 내구성을 보완하여, RX-7의 1세대에 장착하였습니다. 이후 1.3L 시퀀셜 트윈터보 로터리 형식의 엔진을 개발하여 3세대에 탑재하여 출시되었고, 이 엔진은 마쓰다 RX-7 구동의 핵심 기술이 되었습니다.</div></div></SwiperSlide>
        <SwiperSlide><div className="innovation-swiper-text"><div className="title">마쓰다의 철학이 들어간 Type RS</div><div className="subtitle">RX-7의 마지막 시리즈, 하이 엔드  Type RS 에는 Bilstein 서스펜션과 17 인치 휠이 표준 장비로 장착되었으며 무게는 1,280kg (2,822lb)으로 줄었습니다. 덜 제한적인 머플러를 추가하여 전력이 증가했습니다. 더 효율적인 터보 차저, 연마 가능한 컴프레서 씰, 6500 rpm에서 280 PS (206 kW; 276 hp) 및 최대 한계에 따라 5000 rpm에서 314 N⋅m (232 lb⋅ft)의 토크를 특징으로합니다.</div></div></SwiperSlide>
        <SwiperSlide><div className="innovation-swiper-text"><div className="title">주행 안전성을 위한 마쓰다의 노력</div><div className="subtitle">주행 안전성을 강조한 기술 개발을 통해 운전자와 승객의 안전을 최우선으로 두고 있습니다. 최첨단 운전 보조 시스템과 고급 브레이크 제어 기술을 통해 사고 예방과 충돌 경감을 실현하고 있습니다. 또한, 차체 설계와 에어백 시스템을 최적화하여 충격을 흡수하고 보호하는 탁월한 구조를 구현했습니다.</div></div></SwiperSlide>
        <SwiperSlide><div className="innovation-swiper-text"><div className="title">코너링 능력과 공기역학적 디자인을 선보이다</div><div className="subtitle">뛰어난 코너링 능력으로 스포츠카 역사에 독특한 흔적을 남겼습니다. 후륜구동 시스템과 경량 차체 디자인은 고속 진입 및 탈출을 자유롭게 해주며, 카브레이크와 커뮤니케이션한 서스펜션 조정은 정확한 핸들링과 민첩한 조향감을 제공합니다. 공기역학적인 디자인은 고속 주행 중에도 안정성을 유지하며, 디테일한 주행 경험을 제공합니다.</div></div></SwiperSlide>
      </Swiper>

      <div className="title" data-aos="fade"  data-aos-easing="ease-in-out" data-aos-once="true">기술 뉴스</div>
      <Link href="https://www.racingsportscars.com/results/Daytona-1982-01-31.html" className="innovation-news-container">
        <Image src={News_01} alt="RX-7" data-aos="fade"  data-aos-easing="ease-in-out" data-aos-once="true" />
        <div className="innovation-main-text">
          <div className="title">IMSA-Rolex 24 Hours of Daytona<br/>92, 93 MSA GTO GTU 클래스 우승!</div>
          <div className="subtitle">세상에서 가장 빠른 차라는 타이틀을 쥐기 위하여, <br/>자사의 RX-7은 국제 모터스포츠 협회(IMSA)에서 주최하는 경기에 참가하여 당당히 우승을 해냈습니다.</div>
          <div className="learnmore">결과 보기 &gt; </div>
        </div>
      </Link>
    </div>
  );
};

export default Innovation;
