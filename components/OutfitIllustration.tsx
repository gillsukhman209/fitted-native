import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
} from 'react-native-reanimated';
import { theme, moderateScale } from '../constants/theme';

export const OutfitIllustration: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Sunglasses */}
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        style={styles.sunglasses}
      >
        <View style={styles.sunglassesFrame}>
          <View style={styles.lens} />
          <View style={styles.lensBridge} />
          <View style={styles.lens} />
        </View>
      </Animated.View>

      {/* Sweater */}
      <Animated.View
        entering={FadeInDown.delay(200).springify()}
        style={styles.sweater}
      >
        <View style={styles.sweaterNeck} />
        <View style={styles.sweaterBody} />
        <View style={styles.sweaterSleeves}>
          <View style={styles.sleeve} />
          <View style={styles.sleeve} />
        </View>
      </Animated.View>

      {/* Pants */}
      <Animated.View
        entering={FadeInUp.delay(300).springify()}
        style={styles.pants}
      >
        <View style={styles.pantsTop} />
        <View style={styles.pantsLegs}>
          <View style={styles.leg} />
          <View style={styles.leg} />
        </View>
      </Animated.View>

      {/* Shoes */}
      <Animated.View
        entering={FadeInUp.delay(400).springify()}
        style={styles.shoes}
      >
        <View style={styles.shoe} />
        <View style={styles.shoe} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  sunglasses: {
    marginBottom: theme.spacing.lg,
  },
  sunglassesFrame: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lens: {
    width: moderateScale(32),
    height: moderateScale(24),
    backgroundColor: theme.colors.primary,
    borderRadius: moderateScale(8),
    opacity: 0.9,
  },
  lensBridge: {
    width: moderateScale(16),
    height: moderateScale(2),
    backgroundColor: theme.colors.primary,
  },
  sweater: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sweaterNeck: {
    width: moderateScale(40),
    height: moderateScale(8),
    backgroundColor: '#D3D3D3',
    borderRadius: moderateScale(4),
    marginBottom: -2,
  },
  sweaterBody: {
    width: moderateScale(80),
    height: moderateScale(90),
    backgroundColor: '#D3D3D3',
    borderRadius: moderateScale(8),
  },
  sweaterSleeves: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(120),
    top: moderateScale(16),
  },
  sleeve: {
    width: moderateScale(20),
    height: moderateScale(60),
    backgroundColor: '#D3D3D3',
    borderRadius: moderateScale(4),
  },
  pants: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  pantsTop: {
    width: moderateScale(80),
    height: moderateScale(20),
    backgroundColor: theme.colors.primary,
    borderRadius: moderateScale(4),
    marginBottom: -2,
  },
  pantsLegs: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leg: {
    width: moderateScale(35),
    height: moderateScale(80),
    backgroundColor: theme.colors.primary,
    borderRadius: moderateScale(4),
    marginHorizontal: moderateScale(2),
  },
  shoes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shoe: {
    width: moderateScale(35),
    height: moderateScale(20),
    backgroundColor: theme.colors.primary,
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(4),
  },
});