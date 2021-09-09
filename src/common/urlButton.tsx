import React from 'react';
import url from '../static/images/url.png';
import CopyToClipboard from 'react-copy-to-clipboard';

import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import 'react-toastify/dist/ReactToastify.css';

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
  outline: none;
  width: 58px;
  height: 58px;
  background-image: url(${props => props.src});
`;

interface UrlButtonProps {
  link: string;
}

function UrlButton({ link }: UrlButtonProps) {
  const urlLink = link;
  const { addToast } = useToasts();

  return (
    <CopyToClipboard text={urlLink}>
      <button
        style={buttonStyle}
        onClick={() =>
          addToast('코시전 URL 복사', {
            appearance: 'info',
            autoDismiss: true,
          })
        }
      >
        <IMAGE src={url} />
      </button>
    </CopyToClipboard>
  );
}
export default UrlButton;
