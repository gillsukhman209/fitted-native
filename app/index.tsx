import React, { useState } from 'react';
import WelcomeScreen from './onboarding/welcome';
import GenderScreen from './onboarding/gender';
import StylePreferencesScreen from './onboarding/style-preferences';
import HeightWeightScreen from './onboarding/height-weight';
import ClosetIntroScreen from './onboarding/closet-intro';
import BrandsScreen from './onboarding/brands';
import BasicsScreen from './onboarding/basics';
import ItemLookupScreen from './onboarding/item-lookup';
import FavoriteShoesScreen from './onboarding/favorite-shoes';
import FavoriteHoodieScreen from './onboarding/favorite-hoodie';
import TakeSelfieScreen from './onboarding/take-selfie';
import AddToClosetScreen from './onboarding/add-to-closet';
import RatingScreen from './onboarding/rating';

type OnboardingStep = 'welcome' | 'gender' | 'style-preferences' | 'height-weight' | 'closet-intro' | 'brands' | 'basics' | 'item-lookup' | 'favorite-shoes' | 'favorite-hoodie' | 'take-selfie' | 'add-to-closet' | 'rating';

export default function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');

  const handleNextStep = (step: OnboardingStep) => {
    setCurrentStep(step);
  };

  const handleBackStep = () => {
    switch (currentStep) {
      case 'gender':
        setCurrentStep('welcome');
        break;
      case 'style-preferences':
        setCurrentStep('gender');
        break;
      case 'height-weight':
        setCurrentStep('style-preferences');
        break;
      case 'closet-intro':
        setCurrentStep('height-weight');
        break;
      case 'brands':
        setCurrentStep('closet-intro');
        break;
      case 'basics':
        setCurrentStep('brands');
        break;
      case 'item-lookup':
        setCurrentStep('basics');
        break;
      case 'favorite-shoes':
        setCurrentStep('item-lookup');
        break;
      case 'favorite-hoodie':
        setCurrentStep('favorite-shoes');
        break;
      case 'take-selfie':
        setCurrentStep('favorite-hoodie');
        break;
      case 'add-to-closet':
        setCurrentStep('take-selfie');
        break;
      case 'rating':
        setCurrentStep('add-to-closet');
        break;
      default:
        break;
    }
  };

  switch (currentStep) {
    case 'welcome':
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
    case 'gender':
      return <GenderScreen onNext={() => handleNextStep('style-preferences')} onBack={handleBackStep} />;
    case 'style-preferences':
      return <StylePreferencesScreen onNext={() => handleNextStep('height-weight')} onBack={handleBackStep} />;
    case 'height-weight':
      return <HeightWeightScreen onNext={() => handleNextStep('closet-intro')} onBack={handleBackStep} />;
    case 'closet-intro':
      return <ClosetIntroScreen onNext={() => handleNextStep('brands')} onBack={handleBackStep} />;
    case 'brands':
      return <BrandsScreen onNext={() => handleNextStep('basics')} onBack={handleBackStep} />;
    case 'basics':
      return <BasicsScreen onNext={() => handleNextStep('item-lookup')} onBack={handleBackStep} />;
    case 'item-lookup':
      return <ItemLookupScreen onNext={() => handleNextStep('favorite-shoes')} onBack={handleBackStep} />;
    case 'favorite-shoes':
      return <FavoriteShoesScreen onNext={() => handleNextStep('favorite-hoodie')} onBack={handleBackStep} />;
    case 'favorite-hoodie':
      return <FavoriteHoodieScreen onNext={() => handleNextStep('take-selfie')} onBack={handleBackStep} />;
    case 'take-selfie':
      return <TakeSelfieScreen onNext={() => handleNextStep('add-to-closet')} onBack={handleBackStep} />;
    case 'add-to-closet':
      return <AddToClosetScreen onNext={() => handleNextStep('rating')} onBack={handleBackStep} />;
    case 'rating':
      return <RatingScreen onNext={() => console.log('Onboarding complete!')} onBack={handleBackStep} />;
    default:
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
  }
}