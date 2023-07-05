import { useState } from 'react';
import { ATTRACTIONS } from '../shared/attractions';
import DirectoryScreen from './DirectoryScreen';

const MainComponent = () => {
  const [attractions, setAttractions] = useState(ATTRACTIONS);

  return <DirectoryScreen attractions={attractions} />;
};
export default MainComponent;
