import * as React from 'react';
import styled from 'styled-components';
import banner from '../../static/images/banner.png';

const PromotionBoxBlock = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 60px;
  cursor: pointer;
  .banner {
    width: 100%;
  }
`;

function btnClick(link: string) {
  window.open(link);
}

function PromotionBox() {
  return (
    <PromotionBoxBlock onClick={() => btnClick('https://cafe.naver.com/codeuniv/8099')}>
      <img className="banner" src={banner} alt="banner" />
    </PromotionBoxBlock>
  );
}

export default PromotionBox;
