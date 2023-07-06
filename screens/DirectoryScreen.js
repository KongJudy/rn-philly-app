import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { ATTRACTIONS } from '../shared/attractions';

const DirectoryScreen = ({ navigation }) => {
  const [attractions, setAttractions] = useState(ATTRACTIONS);

  const renderDirectoryItem = ({ item: attraction }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate('AttractionInfo', { attraction })}
      >
        <Avatar source={attraction.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{attraction.name}</ListItem.Title>
          <ListItem.Subtitle>{attraction.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={attractions}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
