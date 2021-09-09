import * as React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import media from '../../style/media';
import { useToasts } from 'react-toast-notifications';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const HashTagBlock = styled.div`
  margin: auto;
  margin-top: 60px;
  width: 90%;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 1.38;
  color: #ffffff;
  text-align: center;
  ${media.small} {
    font-size: 15px;
  }
`;

const HashBlock = styled.div`
  margin-top: 16px;
  display: flex;
`;

const TextBlock = styled.div`
  border-radius: 6px 0px 0px 6px;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  line-height: 1.38;
  text-align: left;
  padding: 18px 23px 15px 23px;
  ${media.small} {
    font-size: 15px;
  }
`;

const CoppyBlock = styled.div`
  width: 43%;
  border-radius: 0px 6px 6px 0px;
  background-color: #000000;
  font-size: 16px;
  line-height: 1.38;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  padding: 25px 22px 12px 22px;
  ${media.small} {
    font-size: 15px;
    padding: 25px 15px 12px 15px;
  }
`;

const Button = styled.div`
  height: 30px;
  margin: auto;
  margin-top: 50px;
  padding: 15px 20px;
  border-radius: 6px;
  background-color: #e9e9e9;
  font-size: 20px;
  text-align: center;
  color: #1a1d26;
  line-height: 2;
  font-weight: bold;
  cursor: pointer;
`;

function HashTag() {
  const hashText = '#내안에개발자 #개발자mbti #코딩mbti #코뮤니티 #코뮤 #mbti검사';
  const { addToast } = useToasts();

  return (
    <HashTagBlock>
      <Title>지금, 해시태그를 복사해 인스타에 공유해보세요.</Title>
      <HashBlock>
        <TextBlock>{hashText}</TextBlock>
        <CopyToClipboard text={hashText}>
          <CoppyBlock
            onClick={() =>
              addToast('해시태그 복사 완료!', {
                appearance: 'info',
                autoDismiss: true,
              })
            }
          >
            태그
            <br /> 복사하기
          </CoppyBlock>
        </CopyToClipboard>
      </HashBlock>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button>다시하기</Button>
      </Link>
    </HashTagBlock>
  );
}

export default HashTag;
