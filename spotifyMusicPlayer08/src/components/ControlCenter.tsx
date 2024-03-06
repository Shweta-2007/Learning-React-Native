import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {
  PlaybackState,
  State,
  usePlaybackState,
} from 'react-native-track-player';

export const ControlCenter = () => {
  const playerState = usePlaybackState();

  // next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: PlaybackState) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playback.state === State.Paused || playback.state === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Text style={{marginHorizontal: 16, fontSize: 20}}>⏮️</Text>
      </Pressable>
      <Pressable onPress={() => togglePlayback(playerState as PlaybackState)}>
        <Text style={{marginRight: 16, fontSize: 20}}>
          {playerState.state === State.Playing ? '⏸️' : '▶️'}
        </Text>
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Text style={{fontSize: 20}}>⏭️</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
});
