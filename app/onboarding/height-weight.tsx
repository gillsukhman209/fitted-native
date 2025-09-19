import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { BackButton } from '../../components/BackButton';

interface HeightWeightScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function HeightWeightScreen({ onNext, onBack }: HeightWeightScreenProps) {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [selectedHeight, setSelectedHeight] = useState<string>('5 ft');
  const [selectedWeight, setSelectedWeight] = useState<string>('120 lb');

  const heightOptions = {
    imperial: ['3 ft', '4 ft', '5 ft', '6 ft', '7 ft', '8 ft'],
    metric: ['90 cm', '120 cm', '150 cm', '180 cm', '210 cm', '240 cm'],
  };

  const weightOptions = {
    imperial: ['100 lb', '118 lb', '119 lb', '120 lb', '121 lb', '122 lb', '123 lb'],
    metric: ['45 kg', '53 kg', '54 kg', '55 kg', '56 kg', '57 kg', '58 kg'],
  };

  const handleUnitToggle = (option: 'left' | 'right') => {
    const newUnit = option === 'left' ? 'imperial' : 'metric';
    setUnit(newUnit);
    // Reset selections when switching units
    setSelectedHeight(heightOptions[newUnit][2]); // Default to middle option
    setSelectedWeight(weightOptions[newUnit][3]); // Default to middle option
  };

  const handleContinue = () => {
    console.log('Continue with:', { unit, height: selectedHeight, weight: selectedWeight });
    onNext();
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
          Height & Weight
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.subtitle}
        >
          This allow our stylist to make{'\n'}better recommendations.
        </Animated.Text>

        {/* Unit Toggle */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.toggleContainer}
        >
          <ToggleSwitch
            leftLabel="Imperial"
            rightLabel="Metric"
            selectedOption={unit === 'imperial' ? 'left' : 'right'}
            onToggle={handleUnitToggle}
          />
        </Animated.View>

        {/* Pickers Container */}
        <Animated.View
          entering={FadeInUp.delay(400).springify()}
          style={styles.pickersContainer}
        >
          {/* Height Section */}
          <View style={styles.pickerSection}>
            <Text style={styles.pickerLabel}>Height</Text>
            <ScrollView
              style={styles.picker}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.pickerContent}
            >
              {heightOptions[unit].map((height) => (
                <TouchableOpacity
                  key={height}
                  style={[
                    styles.pickerOption,
                    selectedHeight === height && styles.selectedPickerOption,
                  ]}
                  onPress={() => setSelectedHeight(height)}
                >
                  <Text
                    style={[
                      styles.pickerOptionText,
                      selectedHeight === height && styles.selectedPickerOptionText,
                    ]}
                  >
                    {height}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Weight Section */}
          <View style={styles.pickerSection}>
            <Text style={styles.pickerLabel}>Weight</Text>
            <ScrollView
              style={styles.picker}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.pickerContent}
            >
              {weightOptions[unit].map((weight) => (
                <TouchableOpacity
                  key={weight}
                  style={[
                    styles.pickerOption,
                    selectedWeight === weight && styles.selectedPickerOption,
                  ]}
                  onPress={() => setSelectedWeight(weight)}
                >
                  <Text
                    style={[
                      styles.pickerOptionText,
                      selectedWeight === weight && styles.selectedPickerOptionText,
                    ]}
                  >
                    {weight}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Animated.View>

        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          {/* Continue Button */}
          <Animated.View
            entering={FadeInUp.delay(500).springify()}
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
    marginBottom: theme.spacing.xl,
  },
  toggleContainer: {
    width: moderateScale(200),
    marginBottom: theme.spacing.xl,
  },
  pickersContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 'auto',
    paddingVertical: theme.spacing.lg,
  },
  pickerSection: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
  pickerLabel: {
    fontSize: theme.typography.sizes.base,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  picker: {
    maxHeight: moderateScale(200),
    backgroundColor: theme.colors.button.secondary,
    borderRadius: theme.borderRadius.lg,
  },
  pickerContent: {
    paddingVertical: theme.spacing.sm,
  },
  pickerOption: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
  },
  selectedPickerOption: {
    backgroundColor: '#f0f0f0',
  },
  pickerOptionText: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.secondary,
  },
  selectedPickerOptionText: {
    color: theme.colors.text.secondary,
    fontWeight: theme.typography.weights.semibold,
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  buttonContainer: {
    width: '100%',
  },
});