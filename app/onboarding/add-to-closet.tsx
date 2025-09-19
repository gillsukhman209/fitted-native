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
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

interface AddToClosetScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function AddToClosetScreen({ onNext, onBack }: AddToClosetScreenProps) {
  const handleContinue = () => {
    console.log('Continue to rating');
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
          Add all to your closet
        </Animated.Text>

        {/* Clothing Frame Image */}
        <Animated.View
          entering={FadeInUp.delay(200).springify()}
          style={styles.imageContainer}
        >
          <Image
            source={require('../../assets/images/slide12.png')}
            style={styles.clothingImage}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          {/* Continue Button */}
          <Animated.View
            entering={FadeInUp.delay(300).springify()}
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
    marginBottom: theme.spacing.xl,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 'auto',
  },
  clothingImage: {
    width: '85%',
    height: '80%',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  buttonContainer: {
    width: '100%',
  },
});