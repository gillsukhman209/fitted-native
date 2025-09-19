import React, { useState } from 'react';
import WelcomeScreen from './onboarding/welcome';
import GenderScreen from './onboarding/gender';
import StylePreferencesScreen from './onboarding/style-preferences';
import HeightWeightScreen from './onboarding/height-weight';
import ClosetIntroScreen from './onboarding/closet-intro';
import BrandsScreen from './onboarding/brands';
import BasicsScreen from './onboarding/basics';

type OnboardingStep = 'welcome' | 'gender' | 'style-preferences' | 'height-weight' | 'closet-intro' | 'brands' | 'basics';

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
      return <BasicsScreen onNext={() => console.log('Onboarding complete!')} onBack={handleBackStep} />;
    default:
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
  }
}