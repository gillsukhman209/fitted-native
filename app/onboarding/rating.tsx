import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { theme, moderateScale } from '../../constants/theme';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

interface RatingScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function RatingScreen({ onNext, onBack }: RatingScreenProps) {
  const handleContinue = () => {
    console.log('Onboarding complete!');
    onNext();
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
            Give us a rating
          </Animated.Text>

          {/* Rating Section */}
          <Animated.View
            entering={FadeInUp.delay(200).springify()}
            style={styles.ratingContainer}
          >
            <Image
              source={require('../../assets/images/review.png')}
              style={styles.reviewImage}
              resizeMode="contain"
            />
          </Animated.View>

          {/* Testimonial Text */}
          <Animated.Text
            entering={FadeInUp.delay(300).springify()}
            style={styles.testimonialText}
          >
            Fitted closet is loved by{'\n'}users all over the world.
          </Animated.Text>

          {/* User Avatars */}
          <Animated.View
            entering={FadeInUp.delay(350).springify()}
            style={styles.avatarsContainer}
          >
            <Image
              source={require('../../assets/images/faces.png')}
              style={styles.facesImage}
              resizeMode="contain"
            />
          </Animated.View>

          {/* User Count */}
          <Animated.Text
            entering={FadeInUp.delay(375).springify()}
            style={styles.userCount}
          >
            1M+ Fitted users love it!
          </Animated.Text>

          {/* Review Card */}
          <Animated.View
            entering={FadeInUp.delay(400).springify()}
            style={styles.reviewCard}
          >
            <View style={styles.reviewHeader}>
              <View style={styles.reviewAvatar} />
              <Text style={styles.reviewerName}>Sarah Blake</Text>
            </View>

            <View style={styles.reviewStars}>
              <Text style={styles.reviewStar}>★</Text>
              <Text style={styles.reviewStar}>★</Text>
              <Text style={styles.reviewStar}>★</Text>
              <Text style={styles.reviewStar}>★</Text>
              <Text style={styles.reviewStar}>★</Text>
            </View>

            <Text style={styles.reviewText}>
              I always get complements on{'\n'}my fits now, this app is{'\n'}amazing!
            </Text>
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
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  ratingContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  reviewImage: {
    width: moderateScale(280),
    height: moderateScale(80),
  },
  testimonialText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: theme.colors.text.primary,
    textAlign: 'center',
    lineHeight: moderateScale(26),
    marginBottom: theme.spacing.lg,
  },
  avatarsContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  facesImage: {
    width: moderateScale(200),
    height: moderateScale(60),
  },
  userCount: {
    fontSize: moderateScale(14),
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  reviewCard: {
    backgroundColor: '#E8E8E8',
    borderRadius: moderateScale(20),
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xxl,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  reviewAvatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#A0522D',
    marginRight: theme.spacing.md,
  },
  reviewerName: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  reviewStars: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  reviewStar: {
    fontSize: moderateScale(16),
    color: '#D4A574',
    marginRight: moderateScale(2),
  },
  reviewText: {
    fontSize: moderateScale(14),
    color: theme.colors.text.primary,
    lineHeight: moderateScale(20),
  },
  bottomContainer: {
    width: '100%',
    marginTop: theme.spacing.xl,
  },
  buttonContainer: {
    width: '100%',
  },
});