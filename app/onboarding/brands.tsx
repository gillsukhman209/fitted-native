import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { PillButton } from '../../components/PillButton';
import { BackButton } from '../../components/BackButton';

type BrandOption = 'zara' | 'hm' | 'nike' | 'shein' | 'adidas' | 'oldnavy' | 'americaneagle' | 'vintage';

interface BrandsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BrandsScreen({ onNext, onBack }: BrandsScreenProps) {
  const [selectedBrands, setSelectedBrands] = useState<BrandOption[]>([]);

  const handleBrandSelect = (brand: BrandOption) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handleContinue = () => {
    if (selectedBrands.length > 0) {
      console.log('Continue with brands:', selectedBrands);
      onNext();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      {/* Back Button */}
      <BackButton onPress={onBack} />

      {/* Content */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
        {/* Title */}
        <Animated.Text
          entering={FadeInUp.delay(100).springify()}
          style={styles.title}
        >
          What brands do you{'\n'}shop at most?
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.subtitle}
        >
          This allow our stylist to make{'\n'}better recommendations.
        </Animated.Text>

        {/* Brand Options */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.optionsContainer}
        >
          <PillButton
            title="Zara"
            selected={selectedBrands.includes('zara')}
            onPress={() => handleBrandSelect('zara')}
          />

          <PillButton
            title="H&M"
            selected={selectedBrands.includes('hm')}
            onPress={() => handleBrandSelect('hm')}
          />

          <PillButton
            title="Nike"
            selected={selectedBrands.includes('nike')}
            onPress={() => handleBrandSelect('nike')}
          />

          <PillButton
            title="SHEIN"
            selected={selectedBrands.includes('shein')}
            onPress={() => handleBrandSelect('shein')}
          />

          <PillButton
            title="adidas"
            selected={selectedBrands.includes('adidas')}
            onPress={() => handleBrandSelect('adidas')}
          />

          <PillButton
            title="Old Navy"
            selected={selectedBrands.includes('oldnavy')}
            onPress={() => handleBrandSelect('oldnavy')}
          />

          <PillButton
            title="American Eagle"
            selected={selectedBrands.includes('americaneagle')}
            onPress={() => handleBrandSelect('americaneagle')}
          />

          <PillButton
            title="Vintage/Thrifting"
            selected={selectedBrands.includes('vintage')}
            onPress={() => handleBrandSelect('vintage')}
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
              disabled={selectedBrands.length === 0}
            />
          </Animated.View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.xl,
    minHeight: '100%',
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