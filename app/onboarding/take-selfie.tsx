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
import { BackButton } from '../../components/BackButton';

interface TakeSelfieScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function TakeSelfieScreen({ onNext, onBack }: TakeSelfieScreenProps) {
  const handleContinue = () => {
    console.log('Continue to add to closet');
    onNext();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      {/* Back Button */}
      <BackButton onPress={onBack} />

      {/* Content */}
      <View style={styles.content}>
        {/* Camera Icon */}
        <Animated.View
          entering={FadeInUp.delay(100).springify()}
          style={styles.cameraIconContainer}
        >
          <View style={styles.cameraIcon}>
            <Ionicons
              name="camera"
              size={moderateScale(24)}
              color={theme.colors.button.primaryText}
            />
          </View>
        </Animated.View>

        {/* Title */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.title}
        >
          Take a selfie
        </Animated.Text>

        {/* Girl Image */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.imageContainer}
        >
          <Image
            source={require('../../assets/images/slide11.png')}
            style={styles.girlImage}
            resizeMode="cover"
          />
        </Animated.View>

        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          {/* Continue Button */}
          <Animated.View
            entering={FadeInUp.delay(400).springify()}
            style={styles.buttonContainer}
          >
            <Button
              title="Continue"
              onPress={handleContinue}
              variant="primary"
            />
          </Animated.View>
        </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xl,
  },
  cameraIconContainer: {
    marginBottom: theme.spacing.lg,
  },
  cameraIcon: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 'auto',
  },
  girlImage: {
    width: '85%',
    height: '90%',
    borderRadius: moderateScale(20),
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  buttonContainer: {
    width: '100%',
  },
});