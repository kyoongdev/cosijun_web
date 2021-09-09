import * as React from 'react';
import styled from 'styled-components';
import KaKaoButton from '../../common/kakaoButton';
import UrlButton from '../../common/urlButton';

const LinkButtonsBlock = styled.div`
  margin: auto;
  display: flex;
  width: 90%;
  margin-top: 46px;
`;
const Buttons = styled.div`
  margin: auto;
`;

interface LinkButtonsProps {
  link: string;
  description: string;
}

function LinkButtons({ link, description }: LinkButtonsProps) {
  return (
    <LinkButtonsBlock>
      <Buttons>
        <UrlButton link={link} />
        <KaKaoButton description={description} />
      </Buttons>
    </LinkButtonsBlock>
  );
}

export default LinkButtons;
