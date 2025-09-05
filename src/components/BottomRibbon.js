import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainScreenIcons } from '../Assets';

const RIBBON_HEIGHT = 56;
const ICON_SIZE = 36;
const ICON_COLOR = '#333333';
const ICON_COLOR_ACTIVE = '#111111';

const routeNames = ['Menu', 'Save', 'Social', 'Donation', 'Reels'];

const BottomRibbon = ({ activeRouteName, onPressRoute }) => {
  const insets = useSafeAreaInsets();
  const height = RIBBON_HEIGHT + insets.bottom;

  return (
    <View style={[styles.container, { height, paddingBottom: insets.bottom }]}>
      {mainScreenIcons.map((Icon, index) => {
        const route = routeNames[index];
        const isActive = activeRouteName === route;
        return (
          <Pressable
            key={route}
            onPress={() => onPressRoute(route)}
            android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.iconButtonPressed,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={`${route} tab`}
          >
            {({ pressed }) => (
              <Icon
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={isActive || pressed ? ICON_COLOR_ACTIVE : ICON_COLOR}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconButton: {
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  iconButtonPressed: {
    transform: [{ scale: 0.94 }],
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
});

export default BottomRibbon; 