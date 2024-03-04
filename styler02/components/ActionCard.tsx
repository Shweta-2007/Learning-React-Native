import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingConatiner}>
          <Text style={styles.headerText}>
            What's new in Javascript 22 - ES22
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/03/73/43/10/240_F_373431011_8qOm8LYkDezW0H4xflXbU5RV8i7DOgiM.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.Text}>
            The JavaScript family is ever-evolving and has launched new
            JavaScript features in June 2022. The ES2022 is the 13th edition of
            features after it was initially launched in 1997. The ES2022
            features that reach stage 4 verification are added to the JavaScript
            family. Reaching stage 4 means that TC-39 has approved the features,
            cleared the testing stage, and has at least passed two
            implementations.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.turing.com/kb/latest-javascript-features-in-es2022',
              )
            }>
            <Text style={[styles.Text, styles.socialLink]}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.turing.com/kb/latest-javascript-features-in-es2022',
              )
            }>
            <Text style={[styles.Text, styles.socialLink]}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {color: 'white'},
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 360,
    height: 360,
    marginVertical: 12,
    borderRadius: 6,
  },
  elevatedCard: {
    backgroundColor: '#3C887E',

    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'white',
    shadowOpacity: 0.4,
  },
  headingConatiner: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  socialLink: {
    backgroundColor: '#D0DB97',
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 8,
  },
  body: {
    marginHorizontal: 8,
  },
});
