import * as React from 'react';
import { useQuery } from '@apollo/client';
import MainData from '../components/mainData';
import { GET_MOST_FEATURE, GET_LEAST_FEATURE, GET_TOTAL_USER } from '../../graphql/query';

function MainDataContainer() {
  const total = useQuery(GET_TOTAL_USER);
  const most = useQuery(GET_MOST_FEATURE);
  const least = useQuery(GET_LEAST_FEATURE);

  if (total.loading || most.loading || least.loading) return <span>loading....</span>;
  if (total.error || most.error || least.error) return <span>error</span>;

  return (
    <MainData
      totalUser={total.data.getTotalUser}
      mostFeatureNum={most.data.getMostFeature.userCount}
      mostFeature={most.data.getMostFeature.type}
      leastFeatureNum={least.data.getLeastFeature.userCount}
      leastFeature={least.data.getLeastFeature.type}
    />
  );
}

export default MainDataContainer;
