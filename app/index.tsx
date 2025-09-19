import React, { useState } from 'react';
import WelcomeScreen from './onboarding/welcome';
import GenderScreen from './onboarding/gender';
import StylePreferencesScreen from './onboarding/style-preferences';
import HeightWeightScreen from './onboarding/height-weight';

type OnboardingStep = 'welcome' | 'gender' | 'style-preferences' | 'height-weight';

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
      return <HeightWeightScreen onNext={() => console.log('Next step - continue to next screens')} onBack={handleBackStep} />;
    default:
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
  }
}