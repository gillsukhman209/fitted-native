import React, { useState } from 'react';
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
import { ClothingItem } from '../../components/ClothingItem';
import { BackButton } from '../../components/BackButton';

type BasicItem = 'white-tee' | 'black-hoodie' | 'white-sneakers' | 'jeans';

interface BasicsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BasicsScreen({ onNext, onBack }: BasicsScreenProps) {
  const [selectedItems, setSelectedItems] = useState<BasicItem[]>([]);

  const handleItemSelect = (item: BasicItem) => {
    setSelectedItems(prev => {
      if (prev.includes(item)) {
        return prev.filter(i => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleContinue = () => {
    console.log('Continue with basics:', selectedItems);
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
            Do you own any basics?
          </Animated.Text>

          {/* Items Grid */}
          <Animated.View
            entering={FadeInUp.delay(200).springify()}
            style={styles.itemsContainer}
          >
            {/* Row 1 */}
            <View style={styles.row}>
              <View style={styles.itemWrapper}>
                <ClothingItem
                  selected={selectedItems.includes('white-tee')}
                  onPress={() => handleItemSelect('white-tee')}
                >
                  <Image
                    source={require('../../assets/images/slideseven1.png')}
                    style={styles.clothingImage}
                    resizeMode="contain"
                  />
                </ClothingItem>
              </View>

              <View style={styles.itemWrapper}>
                <ClothingItem
                  selected={selectedItems.includes('black-hoodie')}
                  onPress={() => handleItemSelect('black-hoodie')}
                >
                  <Image
                    source={require('../../assets/images/slideseven2.png')}
                    style={styles.clothingImage}
                    resizeMode="contain"
                  />
                </ClothingItem>
              </View>
            </View>

            {/* Row 2 */}
            <View style={styles.row}>
              <View style={styles.itemWrapper}>
                <ClothingItem
                  selected={selectedItems.includes('white-sneakers')}
                  onPress={() => handleItemSelect('white-sneakers')}
                >
                  <Image
                    source={require('../../assets/images/slideseven3.png')}
                    style={styles.clothingImage}
                    resizeMode="contain"
                  />
                </ClothingItem>
              </View>

              <View style={styles.itemWrapper}>
                <ClothingItem
                  selected={selectedItems.includes('jeans')}
                  onPress={() => handleItemSelect('jeans')}
                >
                  <Image
                    source={require('../../assets/images/slideseven4.png')}
                    style={styles.clothingImage}
                    resizeMode="contain"
                  />
                </ClothingItem>
              </View>
            </View>
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
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  itemsContainer: {
    flex: 1,
    marginBottom: theme.spacing.xxl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
  },
  itemWrapper: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
  clothingImage: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  buttonContainer: {
    width: '100%',
  },
});