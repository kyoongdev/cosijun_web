import * as React from 'react';
import styled from 'styled-components';
import * as data from '../../results.json';

const ResultImageBlock = styled.div<{
  src: string;
}>`
  background-image: url(${props => props.src});
  background-repeat: none;
  background-size: cover;
  width: 90%;
  margin: auto;
  margin-top: 20px;

  .result {
    width: 100%;
  }
`;

interface ResultImageProps {
  index: number;
}

function ResultImage({ index }: ResultImageProps) {
  const image: string = data.results[index].image;
  return (
    <ResultImageBlock src="">
      <img className="result" src={image} alt=""></img>
    </ResultImageBlock>
  );
}

export default ResultImage;
