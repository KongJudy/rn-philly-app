import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: attraction }) => {
    return (
      <ListItem onPress={() => props.onPress(attraction.id)}>
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
      data={props.attractions}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
