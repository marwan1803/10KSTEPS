import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import MainNavigator from './navigation/MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // For now, we'll just show the onboarding flow.
  // In the future, we'll add logic to show the main app if the user is logged in.
  const userIsOnboarded = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userIsOnboarded ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;