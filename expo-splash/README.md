# titis — Expo splash integration

Two pieces work together:

1. **`splash.png`** (1284×2778) — the static image Expo shows instantly on cold start. No animation possible here; this is what iOS/Android renders from native before JS is loaded.
2. **`AnimatedSplash.jsx`** — a React Native component you mount *on top of* your app while fonts/assets finish loading. Runs the bounce-in + wiggle animation. Fades out when your app is ready.

---

## 1. Static splash (`splash.png`)

Copy `splash.png` into your Expo project's `assets/` folder, then in **`app.json`**:

```json
{
  "expo": {
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#fff6ea"
    }
  }
}
```

`backgroundColor` matches the cream so any safe-area letterboxing blends in. Use `"cover"` (fills the screen, may crop edges slightly) or `"contain"` (fits inside, shows background bars) — cover usually looks best for this design.

If you want per-platform splash, use [`expo-splash-screen` config plugin](https://docs.expo.dev/versions/latest/sdk/splash-screen/) with separate images — but one PNG is enough for most cases.

---

## 2. Animated splash (`AnimatedSplash.jsx`)

Install dependencies:

```bash
npx expo install expo-splash-screen expo-font @expo-google-fonts/bagel-fat-one @expo-google-fonts/inter
```

Copy `AnimatedSplash.jsx` into your project (e.g. `components/AnimatedSplash.jsx`).

In **`App.jsx`** (or `App.tsx`):

```jsx
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, BagelFatOne_400Regular } from '@expo-google-fonts/bagel-fat-one';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import AnimatedSplash from './components/AnimatedSplash';
import YourActualApp from './YourActualApp';

// Keep the native splash up until we explicitly hide it.
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    BagelFatOne_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // ... load any other async resources (user, config, cached data)
        // await loadUserSession();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);

  // Once fonts + app are ready, hide the native splash so our animated
  // one can run. AnimatedSplash is already mounted behind the native splash.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && appReady) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, appReady]);

  if (!fontsLoaded) return null; // native splash still visible

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <YourActualApp />
      {splashVisible && (
        <AnimatedSplash
          visible={appReady}                          // flips → triggers fade-out
          onFinish={() => setSplashVisible(false)}    // unmount when faded
        />
      )}
    </View>
  );
}
```

### Flow

1. **Cold start** → iOS/Android shows `splash.png` natively (instant, no JS).
2. **JS boots** → `SplashScreen.preventAutoHideAsync()` keeps the native splash visible.
3. **Fonts load** → we hide the native splash. `AnimatedSplash` is already mounted underneath, so the user sees a seamless transition from static PNG → animated version.
4. **App ready** → `visible={false}` on AnimatedSplash triggers a 450ms fade-out, then `onFinish` unmounts it.

Because the static PNG and the animated component share the same layout (cream bg, logo at ~46% height, tagline below), the transition is invisible.

---

## Tuning

- **Entry timing**: edit the per-letter `delay` values in `LETTERS` array. Total duration ~1.4s.
- **Tagline delay**: hardcoded to 1100ms in the `Tagline` component — change if you want it earlier/later.
- **Wiggle**: remove the `loop()` call in `Letter`'s `useEffect` if you want letters to stay static after entry.
- **Gradient blobs**: static in RN for simplicity. If you want the drift animation, wrap each `<View>` in `Animated.View` and drive `translateX/Y` with `useNativeDriver: true` loops, or use [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/).

---

## Files in this folder

- `AnimatedSplash.jsx` — drop-in component
- `splash.png` (in project root) — the static splash (1284×2778)
- This README
