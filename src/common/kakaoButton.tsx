import React from 'react';
import kakao from '../static/images/kakao.png';
import styled from 'styled-components';

declare global {
  interface Window {
    Kakao: any;
  }
}

const buttonStyle = {
  background: 'none',
  height: '100%',
  border: '0px',
  outline: 0,
  cursor: 'pointer',
};

const IMAGE = styled.div<{
  src: string;
}>`
  background-position: center;
  background-size: cover;
  width: 58px;
  height: 58px;
  outline: none;
  background-image: url(${props => props.src});
`;

interface KaKaoButtonProps {
  description: string;
}

function KaKaoButton({ description }: KaKaoButtonProps) {
  const kakaoLink = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('62e4f8d89ea61cf8b9db288a6c7dc5fc');
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#custom-kakao-share-button',
        objectType: 'feed',
        content: {
          title: '나와 어울리는 개발자 유형은...',
          description: 'MBTI로 알아보는 개발자 유형\n내 안의 개발자를 찾아서...⭐',
          imageUrl:
            'http://codingtest-images.s3.ap-northeast-2.amazonaws.com/images/ogTag/ogTag.png',
          link: {
            mobileWebUrl: 'http://comu.codeuniv.kr',
            webUrl: 'http://comu.codeuniv.kr',
          },
        },
        social: {
          likeCount: 75,
          commentCount: 52,
          sharedCount: 324,
        },
        buttons: [
          {
            title: '지금 테스트 해보기!',
            link: {
              mobileWebUrl: 'http://comu.codeuniv.kr',
              webUrl: 'http://comu.codeuniv.kr',
            },
          },
        ],
      });
    }
  };

  return (
    <button style={buttonStyle} onClick={kakaoLink} id="custom-kakao-share-button">
      <IMAGE src={kakao} />
    </button>
  );
}

export default KaKaoButton;
