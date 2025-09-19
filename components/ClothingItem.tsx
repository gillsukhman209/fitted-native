import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { theme, moderateScale } from '../constants/theme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface ClothingItemProps {
  children: React.ReactNode;
  selected: boolean;
  onPress: () => void;
}

export const ClothingItem: React.FC<ClothingItemProps> = ({
  children,
  selected,
  onPress,
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
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      {/* Clothing Item Content */}
      <View style={styles.itemContent}>
        {children}
      </View>

      {/* Plus/Check Button */}
      <View style={[styles.button, selected && styles.selectedButton]}>
        <Ionicons
          name={selected ? "checkmark" : "add"}
          size={moderateScale(18)}
          color={selected ? theme.colors.button.primaryText : theme.colors.text.secondary}
        />
      </View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  itemContent: {
    backgroundColor: theme.colors.button.secondary,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: moderateScale(100),
  },
  button: {
    position: 'absolute',
    top: moderateScale(8),
    right: moderateScale(8),
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    backgroundColor: theme.colors.button.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selectedButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});