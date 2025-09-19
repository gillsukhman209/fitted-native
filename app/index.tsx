import React, { useState } from 'react';
import WelcomeScreen from './onboarding/welcome';
import GenderScreen from './onboarding/gender';

type OnboardingStep = 'welcome' | 'gender';

export default function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');

  const handleNextStep = (step: OnboardingStep) => {
    setCurrentStep(step);
  };

  switch (currentStep) {
    case 'welcome':
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
    case 'gender':
      return <GenderScreen onNext={() => console.log('Next step')} />;
    default:
      return <WelcomeScreen onNext={() => handleNextStep('gender')} />;
  }
}