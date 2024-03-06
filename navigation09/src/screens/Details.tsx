import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId} </Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()} // This will take you just one screen back
      />

      <Button
        title="Go back to first screen"
        // onPress={() => navigation.navigate('Home')}
        // onPress={() => navigation.pop(2)} // This will take you 2 screen back
        onPress={() => navigation.popToTop()} // This will take back at the top level and the values in the stack will be emptied out
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: 'black',
  },
});
