import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderAttraction = ({ attraction }) => {
  if (attraction) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={attraction.image}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{attraction.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.location}>{attraction.location}</Text>
        <Text style={styles.description}>{attraction.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderAttraction;

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dfdddd67',
    paddingHorizontal: 4,
    borderRadius: 4
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: '#ec1d1d',
    textShadowRadius: 10
  },
  location: {
    margin: 4,
    textAlign: 'center'
  },
  description: {
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: 'center'
  }
});
