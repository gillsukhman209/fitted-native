import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { GoogleIcon } from '../../components/GoogleIcon';

export default function WelcomeScreen() {
  const handleAppleSignIn = () => {
    console.log('Continue with Apple');
  };

  const handleGoogleSignIn = () => {
    console.log('Continue with Google');
  };

  const handleOtherOptions = () => {
    console.log('Other options');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />


      {/* Content */}
      <View style={styles.content}>
        {/* Outfit Illustration - Using actual image */}
        <Animated.View
          entering={FadeInUp.delay(100).springify()}
          style={styles.outfitContainer}
        >
          <Image
            source={require('../../assets/images/outfit.png')}
            style={styles.outfitImage}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Title */}
        <Animated.Text
          entering={FadeInUp.delay(300).springify()}
          style={styles.title}
        >
          Style outfits{'\n'}from your closet
        </Animated.Text>

        {/* Buttons */}
        <Animated.View
          entering={FadeInUp.delay(400).springify()}
          style={styles.buttonContainer}
        >
          <Button
            title="Continue with Apple"
            onPress={handleAppleSignIn}
            variant="primary"
            icon={<Ionicons name="logo-apple" size={moderateScale(20)} color={theme.colors.button.primaryText} />}
          />

          <Button
            title="Continue with Google"
            onPress={handleGoogleSignIn}
            variant="primary"
            icon={<GoogleIcon size={18} />}
          />

          <Button
            title="Other options"
            onPress={handleOtherOptions}
            variant="text"
          />
        </Animated.View>

        {/* Footer */}
        <Animated.Text
          entering={FadeInUp.delay(500).springify()}
          style={styles.footer}
        >
          By continuing you agree to the{'\n'}
          <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfitContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
    marginTop: theme.spacing.xl,
  },
  outfitImage: {
    width: moderateScale(200),
    height: moderateScale(420),
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xxxl,
    lineHeight: moderateScale(34),
  },
  buttonContainer: {
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
  footer: {
    fontSize: moderateScale(12),
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: moderateScale(18),
  },
  link: {
    textDecorationLine: 'underline',
  },
});