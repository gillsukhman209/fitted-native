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

interface BuildingClosetScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BuildingClosetScreen({ onNext, onBack }: BuildingClosetScreenProps) {
  const handleContinue = () => {
    console.log('Building closet complete!');
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
          We're building{'\n'}your closet!
        </Animated.Text>

        {/* Building Frame Graphic */}
        <Animated.View
          entering={FadeInUp.delay(200).springify()}
          style={styles.graphicContainer}
        >
          <Image
            source={require('../../assets/images/building_closet_frame.png')}
            style={styles.buildingImage}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    lineHeight: moderateScale(34),
  },
  graphicContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buildingImage: {
    width: moderateScale(250),
    height: moderateScale(250),
  },
  bottomContainer: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
});