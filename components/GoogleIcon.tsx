import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { moderateScale } from '../constants/theme';

interface GoogleIconProps {
  size?: number;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({ size = 20 }) => {
  const scaledSize = moderateScale(size);

  return (
    <View style={[styles.container, { width: scaledSize, height: scaledSize }]}>
      <Image
        source={require('../assets/images/google.png')}
        style={{ width: scaledSize * 0.9, height: scaledSize * 0.9 }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});