import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { theme, moderateScale } from '../constants/theme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface PillButtonProps {
  title: string;
  onPress: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export const PillButton: React.FC<PillButtonProps> = ({
  title,
  onPress,
  selected = false,
  disabled = false,
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

  const buttonStyles = [
    styles.base,
    selected ? styles.selected : styles.unselected,
    disabled && styles.disabled,
  ];

  const textStyles = [
    styles.text,
    selected ? styles.selectedText : styles.unselectedText,
    disabled && styles.disabledText,
  ];

  return (
    <AnimatedTouchable
      style={[buttonStyles, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>{title}</Text>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
    marginVertical: theme.spacing.sm,
    width: '100%',
  },
  selected: {
    backgroundColor: theme.colors.primary,
  },
  unselected: {
    backgroundColor: theme.colors.button.secondary,
  },
  disabled: {
    backgroundColor: theme.colors.button.disabled,
  },
  text: {
    fontSize: theme.typography.sizes.base,
    fontWeight: theme.typography.weights.semibold,
  },
  selectedText: {
    color: theme.colors.button.primaryText,
  },
  unselectedText: {
    color: theme.colors.button.secondaryText,
  },
  disabledText: {
    color: theme.colors.button.disabledText,
  },
});