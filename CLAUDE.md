# Onboarding Flow Development Guidelines

## Code Quality Standards

### Architecture Principles
- **Component Composition**: Build small, reusable components that do one thing well
- **Separation of Concerns**: Keep business logic, presentation, and data management separate
- **DRY (Don't Repeat Yourself)**: Extract common patterns into reusable utilities
- **SOLID Principles**: Follow Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion

### React Native Best Practices

#### Performance Optimization
- Use `React.memo` for expensive components
- Implement `useMemo` and `useCallback` for expensive computations
- Optimize images with proper formats and lazy loading
- Minimize re-renders through proper state management
- Use FlatList/VirtualizedList for long lists
- Implement proper loading states and skeleton screens

#### Animation & Gestures
- Use `react-native-reanimated` for smooth 60fps animations
- Implement gesture handlers with `react-native-gesture-handler`
- Create fluid transitions between screens
- Add micro-interactions for better UX
- Use shared element transitions where appropriate

#### Styling Architecture
- Create a comprehensive theme system with:
  - Color palette (primary, secondary, neutral, semantic colors)
  - Typography scale (fonts, sizes, weights, line heights)
  - Spacing system (consistent padding/margins)
  - Border radius tokens
  - Shadow/elevation system
- Use StyleSheet.create for performance
- Implement responsive design with proper scaling
- Support both iOS and Android platform-specific styles

#### Responsive Design Strategy
- **Screen Size Support**: iPhone SE (375x667) to iPad Pro (1024x1366)
- **Use Dimensions API**: Calculate based on screen width/height
- **Responsive Units**: Create scaling functions for fonts, spacing, and components
- **Flexbox Layouts**: Use flex properties for fluid layouts
- **Safe Area Handling**: Account for notches, home indicators, status bars
- **Orientation Support**: Handle portrait and landscape modes
- **Dynamic Scaling**:
  ```javascript
  // Example scaling utility
  const { width, height } = Dimensions.get('window');
  const guidelineBaseWidth = 375; // iPhone 11 Pro
  const scale = (size) => (width / guidelineBaseWidth) * size;
  const verticalScale = (size) => (height / 812) * size;
  const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
  ```
- **Breakpoints**: Define small (< 400), medium (400-768), large (> 768)
- **Test Devices**: iPhone SE, iPhone 14 Pro, iPhone 15 Pro Max, iPad, Android phones/tablets

### Code Organization

#### File Structure
```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic components
│   ├── onboarding/      # Onboarding-specific components
│   └── animations/      # Animation components
├── screens/             # Screen components
│   └── onboarding/      # Onboarding screens
├── navigation/          # Navigation configuration
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── constants/          # App constants
├── theme/              # Theme configuration
├── assets/             # Images, fonts, etc.
└── types/              # TypeScript definitions
```

#### Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Add JSDoc comments for complex logic
- Keep components under 200 lines
- Extract complex logic into custom hooks

### TypeScript Standards
- Define interfaces for all props
- Use proper type inference
- Avoid `any` type
- Create type guards for runtime checks
- Use enums for constant values
- Implement proper generic types where needed

### State Management
- Use React Context for global state
- Implement proper loading/error states
- Use local state for UI-only concerns
- Consider Zustand or Redux Toolkit for complex state
- Implement proper data persistence where needed

### Testing Strategy
- Write unit tests for utilities
- Implement component testing with React Native Testing Library
- Add integration tests for critical flows
- Test on both iOS and Android
- Check different screen sizes
- Validate accessibility

### Accessibility
- Add proper accessibility labels
- Implement screen reader support
- Ensure sufficient color contrast
- Support dynamic font scaling
- Add proper focus management
- Test with VoiceOver (iOS) and TalkBack (Android)

### Error Handling
- Implement error boundaries
- Add proper try-catch blocks
- Create user-friendly error messages
- Log errors for debugging
- Implement fallback UI components

### Security Considerations
- Sanitize user inputs
- Use secure storage for sensitive data
- Implement proper authentication flows
- Validate data on client and server
- Follow OWASP mobile security guidelines

## Onboarding Flow Design Specifications

### Visual Design System
- **Background**: Pure white (#FFFFFF)
- **Primary Text**: Black (#000000)
- **Secondary Text**: Gray (#666666)
- **Button Background**: Black (#000000) with white text
- **Selected State**: Black fill
- **Unselected State**: Light gray (#F5F5F5)
- **Border Radius**: 12-14px for buttons, 8px for cards
- **Typography**:
  - Headers: Bold, ~24-28px
  - Body: Regular, ~14-16px
  - Small text: ~12px
- **Spacing**: Consistent 16-24px padding

### Screen Flow Details

#### Screen 1: Welcome/Sign In
- **Outfit illustration**: Sunglasses, sweater, pants, shoes
- **Title**: "Style outfits from your closet"
- **Actions**:
  - Continue with Apple (black button)
  - Continue with Google (black button)
  - Other options (text button)
- **Footer**: Terms of Service and Privacy Policy links

#### Screen 2: Gender Selection
- **Title**: "Choose your Gender"
- **Subtitle**: "This allow our stylist to make better ecommendations."
- **Options**:
  - Male (pill button)
  - Female (pill button, selected state black)
  - Other (pill button)
- **Footer**: Terms and Privacy Policy agreement text
- **Continue button**: Gray when unselected

#### Screen 3: Style Preferences
- **Title**: "How do you currently style yourself?"
- **Subtitle**: "This allow our stylist to make better recommendations."
- **Options** (multi-select):
  - "I just wear whatever is clean"
  - "I sometimes plan my outfits, but don't really have time" (selected)
  - "I always plan out my outfits"
- **Continue button**: Active when selection made

#### Screen 4: Height & Weight
- **Title**: "Height & Weight"
- **Subtitle**: "This allow our stylist to make better recommendations."
- **Toggle**: Imperial / Metric
- **Height Input**:
  - Feet selector (3-8 ft)
  - Inches selector (0-11 in)
- **Weight Input**:
  - Pounds selector (100-300+ lb)
- **Visual indicators**: Pink selection highlight

#### Screen 5: Closet Building Intro
- **Title**: "Let's build your closet"
- **Visual**: Same outfit illustration as Screen 1
- **Minimal design with focus on illustration**

#### Screen 6: Brand Selection
- **Title**: "What brands do you shop at most?"
- **Subtitle**: "This allow our stylist to make better recommendations."
- **Brand List** (scrollable):
  - Zara
  - H&M
  - Nike
  - SHEIN
  - adidas
  - Old Navy
  - American Eagle (selected)
  - Vintage/Thrifting
  - (More brands below)

#### Screen 7: Wardrobe Basics
- **Title**: "Do you own any basics?"
- **Subtitle**: "So our stylist can make you your first outfit."
- **Search bar**: "Converse All Star"
- **Grid Layout** (2x2):
  - White t-shirt (with + icon)
  - Black hoodie (with + icon)
  - White sneakers (with + icon)
  - Blue jeans (with + icon)
- **Continue button**

#### Screen 8: Item Discovery (Empty)
- **Title**: "Look up an item you know you own"
- **Subtitle**: "So our stylist can make you your first outfit."
- **Search bar**: "Converse All Star"
- **Empty state with Continue button**

#### Screen 9: Shoe Selection
- **Title**: "What about your favorite pair of shoes?"
- **Subtitle**: "So our stylist can make you your first outfit."
- **Search bar**: "Converse All Star"
- **Empty state with Continue button**

#### Screen 10: Hoodie Selection
- **Title**: "What about your favorite hoodie?"
- **Subtitle**: "So our stylist can make you your first outfit."
- **Search bar**: "Converse All Star"
- **Continue button**

#### Screen 11: Photo Capture
- **Title**: "Take a selfie"
- **Camera icon indicator** (pink badge)
- **Photo preview area**
- **Continue button**

#### Screen 12: Add to Closet
- **Title**: "Add all to your closet"
- **Visual**: Outfit layout
  - Beige handbag
  - Black skirt
  - Black and white sneakers
- **Continue button**

#### Screen 13: App Rating
- **Title**: "Give us a rating"
- **Rating**: 4.8 stars with "100K+ App Ratings"
- **Subtitle**: "Fitted closet is loved by users all over the world."
- **User avatars**: 3 profile photos with "1M+ Fitted users love it!"
- **Testimonial card**:
  - User avatar
  - 5 star rating
  - Quote: "I always get complements on my fits now, this app is amazing!"
- **Continue button**

#### Screen 14: Building Closet (Loading)
- **Title**: "We're building your closet!"
- **Visual**: Animated hand/high-five illustration in purple circle
- **Continue button** (disabled/gray)

### Animation & Interaction Patterns
- **Page Transitions**: Smooth horizontal slide (left to right progression)
- **Button States**:
  - Default: Gray/inactive
  - Active: Black background
  - Pressed: Scale down slightly (0.95)
- **Selection Feedback**: Immediate color change to black
- **Multi-select**: Checkboxes or toggle states
- **Scroll**: Smooth momentum scrolling for lists
- **Loading**: Animated illustration on final screen

### Component Requirements
1. **StatusBar**: Consistent iOS style (time, battery, signal)
2. **Progress Indicator**: Step counter at top ("Start" label)
3. **Navigation**: Back button (hamburger menu style)
4. **Input Components**:
   - Pill selection buttons
   - Search bars
   - Picker/scroll selectors
   - Grid item cards
5. **Typography Hierarchy**: Consistent across all screens
6. **Safe Area**: Proper handling for notches and home indicators

## Onboarding Implementation Checklist

### Phase 1: Setup & Architecture
- [ ] Initialize React Native project with TypeScript
- [ ] Set up navigation (React Navigation)
- [ ] Configure animation libraries
- [ ] Create theme system
- [ ] Set up component library structure

### Phase 2: Core Components
- [ ] Build reusable button components
- [ ] Create input field components
- [ ] Implement card components
- [ ] Build progress indicators
- [ ] Create modal/bottom sheet components

### Phase 3: Onboarding Screens
- [ ] Welcome screen with animations
- [ ] User information collection screens
- [ ] Permission request screens
- [ ] Tutorial/feature showcase screens
- [ ] Completion/success screen

### Phase 4: Animations & Transitions
- [ ] Page transition animations
- [ ] Micro-interactions on buttons
- [ ] Progress animations
- [ ] Parallax effects if needed
- [ ] Gesture-based navigation

### Phase 5: Polish & Optimization
- [ ] Performance profiling
- [ ] Memory leak detection
- [ ] Bundle size optimization
- [ ] Image optimization
- [ ] Code splitting where applicable

### Phase 6: Testing & QA
- [ ] Unit test coverage
- [ ] Integration testing
- [ ] Manual testing on devices
- [ ] Accessibility testing
- [ ] Performance benchmarking

## Commands

### Development
```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format

# Run tests
npm test
```

### Build
```bash
# iOS production build
npm run build:ios

# Android production build
npm run build:android
```

## Code Review Checklist
- [ ] Code follows style guidelines
- [ ] TypeScript types are properly defined
- [ ] No console.logs in production code
- [ ] Proper error handling implemented
- [ ] Performance optimizations applied
- [ ] Accessibility requirements met
- [ ] Cross-platform compatibility verified
- [ ] Documentation is complete
- [ ] Tests are passing
- [ ] No security vulnerabilities

## Key Libraries to Consider
- `react-native-reanimated`: Smooth animations
- `react-native-gesture-handler`: Touch gestures
- `react-native-safe-area-context`: Safe area handling
- `react-native-svg`: SVG support
- `react-native-linear-gradient`: Gradient backgrounds
- `react-native-fast-image`: Optimized image loading
- `react-navigation`: Navigation
- `react-hook-form`: Form management
- `zod`: Schema validation

## Performance Metrics to Track
- Time to Interactive (TTI) < 2s
- Frame rate: consistent 60fps
- Memory usage: < 150MB
- Bundle size: < 10MB
- Crash-free rate: > 99.9%
- Screen load time: < 500ms