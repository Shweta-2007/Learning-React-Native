import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {setupPlayer, addTrack} from '../musicPlayerServices';
import {add} from 'react-native-track-player/lib/trackPlayer';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <MusicPlayer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
