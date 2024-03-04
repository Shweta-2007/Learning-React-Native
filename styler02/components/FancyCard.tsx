import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the south bank
            of the Yamuna river in the Indian city of Agra. It was commissioned
            in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his
            favourite wife, Mumtaz Mahal.
          </Text>
          <Text style={styles.cardFooter}>15 minutes away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
  },
  card: {
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: 'white',
  },
  cardElevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: 365,
    height: 320,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  cardLabel: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 6,
    color: 'black',
  },
  cardFooter: {color: 'black', fontWeight: 'bold'},
});
