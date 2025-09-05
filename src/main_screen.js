import React from 'react';
import { View, StyleSheet } from 'react-native';
import { mainScreenIcons } from './Assets';

const ICON_SIZE = 24;
const ICON_COLOR = '#333333';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomRibbon}>
        {mainScreenIcons.map((Icon, index) => (
          <Icon key={index} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bottomRibbon: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default MainScreen; 