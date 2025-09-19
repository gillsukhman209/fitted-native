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
import { BackButton } from '../../components/BackButton';

type StyleOption = 'clean' | 'plan-sometimes' | 'always-plan';

interface StylePreferencesScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StylePreferencesScreen({ onNext, onBack }: StylePreferencesScreenProps) {
  const [selectedOptions, setSelectedOptions] = useState<StyleOption[]>([]);

  const handleOptionSelect = (option: StyleOption) => {
    setSelectedOptions(prev => {
      if (prev.includes(option)) {
        return prev.filter(o => o !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      console.log('Continue with style preferences:', selectedOptions);
      onNext();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      {/* Back Button */}
      <BackButton onPress={onBack} />

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Animated.Text
          entering={FadeInUp.delay(100).springify()}
          style={styles.title}
        >
          How do you currently{'\n'}style yourself?
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.subtitle}
        >
          This allow our stylist to make{'\n'}better recommendations.
        </Animated.Text>

        {/* Style Options */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.optionsContainer}
        >
          <PillButton
            title="I just wear whatever is clean"
            selected={selectedOptions.includes('clean')}
            onPress={() => handleOptionSelect('clean')}
          />

          <PillButton
            title="I sometimes plan my outfits, but don't really have time"
            selected={selectedOptions.includes('plan-sometimes')}
            onPress={() => handleOptionSelect('plan-sometimes')}
          />

          <PillButton
            title="I always plan out my outfits"
            selected={selectedOptions.includes('always-plan')}
            onPress={() => handleOptionSelect('always-plan')}
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
              disabled={selectedOptions.length === 0}
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
    lineHeight: moderateScale(34),
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
  buttonContainer: {
    width: '100%',
  },
});