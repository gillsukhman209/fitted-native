import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { theme, moderateScale } from '../constants/theme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  selectedOption: 'left' | 'right';
  onToggle: (option: 'left' | 'right') => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  leftLabel,
  rightLabel,
  selectedOption,
  onToggle,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, {
      damping: 15,
      stiffness: 400,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 400,
    });
  };

  return (
    <AnimatedTouchable
      style={[styles.container, animatedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <TouchableOpacity
        style={[
          styles.option,
          styles.leftOption,
          selectedOption === 'left' && styles.selectedOption,
        ]}
        onPress={() => onToggle('left')}
      >
        <Text
          style={[
            styles.label,
            selectedOption === 'left' ? styles.selectedLabel : styles.unselectedLabel,
          ]}
        >
          {leftLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          styles.rightOption,
          selectedOption === 'right' && styles.selectedOption,
        ]}
        onPress={() => onToggle('right')}
      >
        <Text
          style={[
            styles.label,
            selectedOption === 'right' ? styles.selectedLabel : styles.unselectedLabel,
          ]}
        >
          {rightLabel}
        </Text>
      </TouchableOpacity>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.button.secondary,
    borderRadius: moderateScale(25),
    padding: moderateScale(4),
    height: moderateScale(50),
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(21),
  },
  leftOption: {
    marginRight: moderateScale(2),
  },
  rightOption: {
    marginLeft: moderateScale(2),
  },
  selectedOption: {
    backgroundColor: theme.colors.primary,
  },
  label: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.medium,
  },
  selectedLabel: {
    color: theme.colors.button.primaryText,
  },
  unselectedLabel: {
    color: theme.colors.text.secondary,
  },
});