import React, { useEffect } from 'react';
import Seo from '@/components/seo';

//AOS 라이브러리 설치
import AOS from 'aos';
import 'aos/dist/aos.css';

//이미지 파일 임포트
import Image from 'next/image';
import Loremipsum from '@/public/contents/Privacypolicy_01.jpeg';

export default function LoremIpsum() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <Seo title="Lorem Ipsum" />
      <Image src={Loremipsum} alt="Lorem Ipsum" className="loremipsum-img" />
      <div className='lorem-text'>
        <div className="title">Lorem Ipsum</div>
        <div className="subtitle-left">
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
Proin tristique dolor eu lorem feugiat venenatis.<br />
Nulla pulvinar dui a enim consectetur dignissim.<br />
Pellentesque viverra neque non rutrum ornare.<br />
Duis et dolor tempor, auctor metus ac, commodo massa.<br />
Nullam iaculis mauris id ipsum finibus, et lobortis nisl mattis.<br />
Mauris suscipit tortor eu mollis molestie.<br />
Vivamus et orci condimentum, aliquam sapien vitae, lacinia sem.<br />
Donec sed risus mollis, blandit nunc vitae, venenatis diam.<br />
Nam tincidunt purus non diam auctor, vitae facilisis turpis volutpat.<br />
Integer et est quis turpis lacinia egestas aliquam et erat.<br />
Sed consequat enim vitae dignissim sagittis.<br />
Duis a justo in lorem sagittis vehicula.<br />
Ut dapibus turpis non ex pretium, non condimentum mauris suscipit.<br />
Mauris sit amet sapien vitae justo tristique hendrerit ac nec tortor.<br />
Aenean ut odio sed orci vulputate dictum euismod vel lacus.<br />
Nulla consequat turpis pellentesque metus viverra, mollis elementum leo dapibus.<br />
Donec venenatis enim at scelerisque rhoncus.<br />
Nullam ut sapien pharetra, cursus nunc euismod, lacinia leo.<br />
Praesent iaculis enim et lacinia egestas.<br />
Donec eu lectus non ante dapibus semper non vitae neque.<br />
Suspendisse vehicula mauris vitae enim dapibus, non gravida ante pharetra.<br />
Aenean a sem non augue pulvinar viverra sed vel dui.<br />
Praesent eleifend eros eu libero commodo hendrerit.<br />
In dignissim dolor id placerat malesuada.<br />
Mauris et diam gravida felis facilisis rhoncus eu a sapien.<br />
Proin bibendum massa sed auctor sodales.<br />
Nunc vitae velit rutrum, molestie nisi luctus, venenatis erat.<br />
Aliquam vitae tortor quis sem tempus pharetra eget a justo.<br />
Cras vel massa sed magna dignissim laoreet.<br />
Donec et orci eget elit gravida consequat.<br />
Donec non augue ut est scelerisque hendrerit eget quis libero.<br />
Curabitur iaculis mauris non lorem venenatis, ac facilisis ante placerat.<br />
Nam interdum mi in congue hendrerit.<br />
In maximus turpis in risus eleifend, a bibendum neque scelerisque.<br />
Suspendisse sit amet turpis at purus suscipit congue in sit amet diam.<br />
Sed auctor neque in accumsan semper.<br />
Quisque tincidunt lacus ac dui pellentesque vestibulum.<br />
Donec iaculis dui non gravida elementum.<br />
Nunc vel nisi in diam commodo hendrerit.<br />
In eu odio ullamcorper erat aliquam lacinia.<br />
Sed tempus nulla ac convallis rhoncus.<br />
Sed vel dui eu lectus porta volutpat ac ac sem.<br />
Vivamus euismod orci et turpis pharetra bibendum.<br />
Pellentesque aliquet est porttitor libero pretium volutpat.<br />
Vestibulum tempor nisi non tellus pellentesque, at viverra magna pretium.<br />
Phasellus a urna in turpis lobortis sodales ut eu justo.<br />
Integer elementum eros eu mi aliquam, ut condimentum elit rhoncus.<br />
Maecenas venenatis odio eget euismod auctor.<br />
Cras cursus nisi scelerisque, aliquet elit pulvinar, semper nunc.<br />
Pellentesque varius mauris vitae est accumsan, ut vestibulum magna pulvinar.<br />
Donec fermentum urna eget nisl sagittis, nec imperdiet arcu laoreet.<br />
In eget odio ac sem porta feugiat volutpat non quam.<br />
Fusce tincidunt arcu non ex pharetra, ac malesuada neque euismod.<br />
Fusce nec purus vitae turpis facilisis ultrices laoreet eget neque.<br />
Mauris a mauris ut neque rhoncus sagittis eu et sapien.<br />
Sed eu velit in augue sollicitudin imperdiet.<br />
Phasellus iaculis nibh quis nibh efficitur venenatis.<br />
Integer gravida enim ac metus fermentum ultrices.<br />
Vestibulum sagittis lacus a felis mattis facilisis.<br />
Vivamus quis leo a purus tempus suscipit.<br />
Pellentesque finibus libero non mauris molestie sollicitudin et sit amet justo.<br />
Integer sit amet nisi sed lectus elementum blandit.<br />
Aliquam tempor ante vel orci sodales elementum.<br />
Morbi varius metus vitae tortor ultricies accumsan.<br />
Proin tincidunt enim condimentum ante sodales, at consectetur nulla blandit.<br />
Cras sodales leo vel enim pellentesque, sed dapibus turpis condimentum.<br />
Nam interdum mauris nec lacus varius, in euismod erat fringilla.<br />
Duis volutpat velit vitae diam sollicitudin eleifend.<br />
Nulla eu velit non tellus malesuada consequat.<br />
Pellentesque ullamcorper diam eget lectus hendrerit interdum sit amet vitae orci.<br />
Praesent non ipsum eget dolor sagittis imperdiet id non enim.<br />
Suspendisse auctor libero eget dui vehicula, sit amet vestibulum purus lobortis.<br />
Quisque faucibus sapien sed quam scelerisque cursus.<br />
Pellentesque vehicula arcu eu eros eleifend, vitae scelerisque urna pharetra.<br />
In ac lorem vel velit rutrum finibus non vitae velit.<br />
Mauris dignissim tellus nec tortor interdum, ac pretium nisl scelerisque.<br />
Sed ultricies massa a volutpat commodo.<br />
Integer eu felis at turpis molestie congue.<br />
Suspendisse a quam auctor, tincidunt quam et, congue tortor.<br />
Aenean eget est ut orci faucibus dignissim ac condimentum tortor.<br />
Nam in lectus non lectus semper dictum.<br />
©2023 MAZDA OPERATIONS. ALL RIGHTS RESERVED. Location: 3-1 Shinchi, Fuchū, Hiroshima, Japan
      </div>
    </div>
  );
}
