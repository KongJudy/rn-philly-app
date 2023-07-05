import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = ({ attractions }) => {
  const renderDirectoryItem = ({ item: attractions }) => {
    return (
      <ListItem>
        <Avatar source={attractions.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{attractions.name}</ListItem.Title>
          <ListItem.Subtitle>{attractions.description}</ListItem.Subtitle>
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
