import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Responsive scaling functions
export const scale = (size: number) => (screenWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (screenHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const theme = {
  colors: {
    primary: '#000000',
    background: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#999999',
    },
    button: {
      primary: '#000000',
      primaryText: '#FFFFFF',
      secondary: '#F5F5F5',
      secondaryText: '#000000',
      disabled: '#E0E0E0',
      disabledText: '#999999',
    },
    border: '#E0E0E0',
    accent: {
      pink: '#FF69B4',
      purple: '#E8D4FF',
    },
  },

  typography: {
    sizes: {
      xs: moderateScale(12),
      sm: moderateScale(14),
      base: moderateScale(16),
      lg: moderateScale(18),
      xl: moderateScale(24),
      xxl: moderateScale(28),
      xxxl: moderateScale(32),
    },
    weights: {
      regular: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },

  spacing: {
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(24),
    xxl: moderateScale(32),
    xxxl: moderateScale(48),
  },

  borderRadius: {
    sm: moderateScale(4),
    md: moderateScale(8),
    lg: moderateScale(12),
    xl: moderateScale(14),
    full: 9999,
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};

export type Theme = typeof theme;

// Legacy Colors for compatibility with existing code
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
  },
};