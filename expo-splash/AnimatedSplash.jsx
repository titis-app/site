// AnimatedSplash.jsx — React Native animated splash for titis (Expo).
//
// Shown on top of the app during the hand-off moment between expo-splash-screen
// (static PNG) and the app being ready. Replicates the bounce-in + wiggle
// treatment from the web splash.html mockup.
//
// Usage:
//   1. Install: npx expo install @expo-google-fonts/bagel-fat-one expo-font expo-splash-screen
//   2. In App.jsx, preventAutoHideAsync + loadAsync fonts, then render
//      <AnimatedSplash visible={!ready} onFinish={() => setShown(false)} />
//      on top of your app tree. See README-splash.md for a full example.

import React, { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, Animated, Easing, Dimensions, useWindowDimensions,
} from 'react-native';

const COLORS = {
  coral:  '#f2805c',
  yellow: '#f5c24a',
  green:  '#7fbf7a',
  blue:   '#5aa0e6',
  lilac:  '#b98be0',
  cream:  '#fff6ea',
  ink:    '#2a2320',
};

// Per-letter data — tilt (deg), final bob (fraction of em), entry delay (ms).
// Matches the 06d web logo's geometry exactly.
const LETTERS = [
  { ch: 't', color: COLORS.coral,  tilt: -8, bob: 0.000,  delay: 180 },
  { ch: 'i', color: COLORS.yellow, tilt:  6, bob: -0.034, delay: 280 },
  { ch: 't', color: COLORS.green,  tilt: -5, bob: 0.017,  delay: 380 },
  { ch: 'i', color: COLORS.blue,   tilt:  7, bob: -0.025, delay: 520 },
  { ch: 's', color: COLORS.lilac,  tilt: -6, bob: 0.008,  delay: 620 },
];

// Single letter — drives its own entry + infinite wiggle animation.
function Letter({ data, fontSize, lineIndex }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-fontSize * 0.4)).current;
  const scale = useRef(new Animated.Value(0.55)).current;
  const rotate = useRef(new Animated.Value(data.tilt * 0.3)).current;

  useEffect(() => {
    // Entry: bounce in with overshoot.
    Animated.sequence([
      Animated.delay(data.delay),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1, duration: 400, useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: fontSize * data.bob,
          tension: 120, friction: 7, useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          tension: 140, friction: 6, useNativeDriver: true,
        }),
        Animated.spring(rotate, {
          toValue: data.tilt,
          tension: 120, friction: 7, useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // After entry, run an infinite subtle wiggle.
      const loop = () => {
        Animated.sequence([
          Animated.timing(rotate, {
            toValue: data.tilt + 1.5, duration: 1800,
            easing: Easing.inOut(Easing.sin), useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: data.tilt, duration: 1800,
            easing: Easing.inOut(Easing.sin), useNativeDriver: true,
          }),
        ]).start(() => loop());
      };
      loop();
    });
  }, []);

  const rotateStr = rotate.interpolate({
    inputRange: [-90, 90],
    outputRange: ['-90deg', '90deg'],
  });

  return (
    <Animated.Text
      style={[
        styles.letter,
        {
          fontSize,
          lineHeight: fontSize * 0.9,
          color: data.color,
          opacity,
          transform: [
            { translateY },
            { scale },
            { rotate: rotateStr },
          ],
        },
      ]}
    >
      {data.ch}
    </Animated.Text>
  );
}

export default function AnimatedSplash({ visible = true, onFinish }) {
  const { width, height } = useWindowDimensions();
  const rootOpacity = useRef(new Animated.Value(1)).current;

  // Fade the whole splash out when parent flips visible → false.
  useEffect(() => {
    if (!visible) {
      Animated.timing(rootOpacity, {
        toValue: 0, duration: 450, useNativeDriver: true,
      }).start(() => onFinish && onFinish());
    }
  }, [visible]);

  // Font size derived from viewport — matches the web splash's min(34vw, 46vh).
  const fontSize = Math.min(width * 0.34, height * 0.46);
  const taglineSize = Math.max(20, Math.min(34, width * 0.036));

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={[StyleSheet.absoluteFill, { opacity: rootOpacity, backgroundColor: COLORS.cream }]}
    >
      {/* Soft gradient blobs — four absolute-positioned tinted ellipses.
          Static here (no drift) for simplicity; the entry animation carries
          the energy. Add react-native-reanimated loops if you want drift. */}
      <View style={[styles.blob, { backgroundColor: COLORS.coral,  top: -width * 0.35, left: -width * 0.3, width: width * 1.1, height: width * 1.1, opacity: 0.22 }]} />
      <View style={[styles.blob, { backgroundColor: COLORS.blue,   top: -width * 0.2,  right: -width * 0.3, width: width * 1.0, height: width * 1.0, opacity: 0.18 }]} />
      <View style={[styles.blob, { backgroundColor: COLORS.yellow, bottom: -width * 0.4, left: -width * 0.25, width: width * 1.2, height: width * 1.2, opacity: 0.20 }]} />
      <View style={[styles.blob, { backgroundColor: COLORS.lilac,  bottom: -width * 0.25, right: -width * 0.2, width: width * 0.95, height: width * 0.95, opacity: 0.18 }]} />

      <View style={styles.content}>
        {/* Line 1: t i t */}
        <View style={styles.row}>
          {LETTERS.slice(0, 3).map((L, i) => (
            <Letter key={`r1-${i}`} data={L} fontSize={fontSize} lineIndex={0} />
          ))}
        </View>
        {/* Line 2: i s */}
        <View style={[styles.row, { marginTop: -fontSize * 0.12 }]}>
          {LETTERS.slice(3, 5).map((L, i) => (
            <Letter key={`r2-${i}`} data={L} fontSize={fontSize} lineIndex={1} />
          ))}
        </View>

        {/* Tagline */}
        <Tagline size={taglineSize} />
      </View>
    </Animated.View>
  );
}

function Tagline({ size }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1100),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0.75, duration: 500, useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, duration: 500, easing: Easing.out(Easing.cubic), useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.Text
      style={[
        styles.tagline,
        { fontSize: size, opacity, transform: [{ translateY }] },
      ]}
    >
      Baby log tracker
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontFamily: 'BagelFatOne_400Regular',
    // tight tracking — mirrors the web CSS letter-spacing
    letterSpacing: -2,
  },
  tagline: {
    marginTop: 60,
    fontFamily: 'Inter_500Medium',
    color: COLORS.ink,
    letterSpacing: 0.3,
  },
  blob: {
    position: 'absolute',
    borderRadius: 9999,
  },
});
