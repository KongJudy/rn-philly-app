import { useState } from 'react';
import { View } from 'react-native';

import { ATTRACTIONS } from '../shared/attractions';
import DirectoryInfoScreen from './DirectoryInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const MainComponent = () => {
  const [attractions, setAttractions] = useState(ATTRACTIONS);
  const [selectedAttractionId, setSelectedAttractionId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        attractions={attractions}
        onPress={(attractionId) => setSelectedAttractionId(attractionId)}
      />
      <DirectoryInfoScreen
        attraction={
          attractions.filter(
            (attraction) => attraction.id === selectedAttractionId
          )[0]
        }
      />
    </View>
  );
};
export default MainComponent;
