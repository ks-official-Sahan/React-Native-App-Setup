import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // useFont is a hook. useFonts(map: string | Record<string, FontSource>): [boolean, Error | null]
  const [fontsLoaded, error] = useFonts({
    // "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // useEffect allows us to perform some actions while the page, or the screen, is loading.
  /*
    useEffect hook: provide a callback function and the dependency array. 
    And the dependency array, meaning recall this function whenever dependency change. 
  */
  useEffect(() => {
    // if error occurred on font loading
    if (error) console.log(error);
    if (error) throw error;

    // when completely loaded hide native splash screen immediately
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // if something else happens show nothing
  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default RootLayout;
