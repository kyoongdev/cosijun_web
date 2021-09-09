import * as React from 'react';
import styled from 'styled-components';
import headerLogo from '../../static/images/headerLogo.png';

const ImageBlock = styled.div`
  padding-top: 80px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
`;

function HeaderImages() {
  return (
    <ImageBlock>
      <img src={headerLogo} alt="headerLogo"></img>
    </ImageBlock>
  );
}

export default HeaderImages;
