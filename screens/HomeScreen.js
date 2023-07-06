import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ATTRACTIONS } from '../shared/attractions';
import { PROMOTIONS } from '../shared/promotions';

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.description}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [attractions, setAttractions] = useState(ATTRACTIONS);
  const [promotions, setPromotions] = useState(PROMOTIONS);

  const featAttraction = attractions.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featAttraction} />
      <FeaturedItem item={featPromotion} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: '#ec1d1d',
    textShadowRadius: 10
  },
  description: {
    margin: 20
  }
});
