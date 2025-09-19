import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { PillButton } from '../../components/PillButton';

type GenderOption = 'male' | 'female' | 'other' | null;

interface GenderScreenProps {
  onNext: () => void;
}

export default function GenderScreen({ onNext }: GenderScreenProps) {
  const [selectedGender, setSelectedGender] = useState<GenderOption>(null);

  const handleGenderSelect = (gender: GenderOption) => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {
    if (selectedGender) {
      console.log('Continue with gender:', selectedGender);
      onNext();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Animated.Text
          entering={FadeInUp.delay(100).springify()}
          style={styles.title}
        >
          Choose your Gender
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.subtitle}
        >
          This allow our stylist to make{'\n'}better recommendations.
        </Animated.Text>

        {/* Gender Options */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.optionsContainer}
        >
          <PillButton
            title="Male"
            selected={selectedGender === 'male'}
            onPress={() => handleGenderSelect('male')}
          />

          <PillButton
            title="Female"
            selected={selectedGender === 'female'}
            onPress={() => handleGenderSelect('female')}
          />

          <PillButton
            title="Other"
            selected={selectedGender === 'other'}
            onPress={() => handleGenderSelect('other')}
          />
        </Animated.View>

        {/* Footer and Continue Button Container */}
        <View style={styles.bottomContainer}>
          <Animated.Text
            entering={FadeInUp.delay(400).springify()}
            style={styles.footer}
          >
            By continuing you agree to the{'\n'}
            <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
          </Animated.Text>

          {/* Continue Button */}
          <Animated.View
            entering={FadeInUp.delay(500).springify()}
            style={styles.buttonContainer}
          >
            <Button
              title="Continue"
              onPress={handleContinue}
              variant="primary"
              disabled={!selectedGender}
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
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: moderateScale(24),
    marginBottom: theme.spacing.xxl,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 'auto',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  footer: {
    fontSize: moderateScale(12),
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: moderateScale(18),
    marginBottom: theme.spacing.lg,
  },
  link: {
    textDecorationLine: 'none',
  },
  buttonContainer: {
    width: '100%',
  },
});