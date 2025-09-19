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
import { SearchInput } from '../../components/SearchInput';
import { BackButton } from '../../components/BackButton';

interface FavoriteShoesScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function FavoriteShoesScreen({ onNext, onBack }: FavoriteShoesScreenProps) {
  const [searchText, setSearchText] = useState('');

  const handleContinue = () => {
    console.log('Continue with favorite shoes:', searchText);
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
          What about your{'\n'}favorite pair of shoes?
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text
          entering={FadeInUp.delay(200).springify()}
          style={styles.subtitle}
        >
          So our stylist can make you your first outfit.
        </Animated.Text>

        {/* Search Input */}
        <Animated.View
          entering={FadeInUp.delay(300).springify()}
          style={styles.searchContainer}
        >
          <SearchInput
            placeholder="Converse All Star"
            value={searchText}
            onChangeText={setSearchText}
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
  searchContainer: {
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