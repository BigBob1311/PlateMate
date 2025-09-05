import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomRibbon from "./src/components/BottomRibbon";
import MenuScreen from "./src/screens/MenuScreen";
import SaveScreen from "./src/screens/SaveScreen";
import SocialScreen from "./src/screens/SocialScreen";
import DonationScreen from "./src/screens/DonationScreen";
import ReelsScreen from "./src/screens/ReelsScreen";

type RootStackParamList = {
  Menu: undefined;
  Save: undefined;
  Social: undefined;
  Donation: undefined;
  Reels: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();
const RIBBON_HEIGHT = 56;

const AppShell = () => {
  const insets = useSafeAreaInsets();
  const paddingBottom = RIBBON_HEIGHT + insets.bottom;

  const [currentRouteName, setCurrentRouteName] = React.useState<keyof RootStackParamList>("Menu");

  const handleStateChange = () => {
    if (navigationRef.isReady()) {
      const route = navigationRef.getCurrentRoute();
      if (route?.name) setCurrentRouteName(route.name as keyof RootStackParamList);
    }
  };

  const handlePressRoute = (route: keyof RootStackParamList) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(route);
    }
  };

  return (
    <View style={[styles.appContainer, { paddingBottom }]}>
      <NavigationContainer ref={navigationRef} onReady={handleStateChange} onStateChange={handleStateChange}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Save" component={SaveScreen} />
          <Stack.Screen name="Social" component={SocialScreen} />
          <Stack.Screen name="Donation" component={DonationScreen} />
          <Stack.Screen name="Reels" component={ReelsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <BottomRibbon activeRouteName={currentRouteName} onPressRoute={handlePressRoute} />
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppShell />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: "#FFFFFF" },
});
