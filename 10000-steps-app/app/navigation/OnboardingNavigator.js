import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import LoginScreen from '../screens/LoginScreen';
import PersonalInformationScreen from '../screens/PersonalInformationScreen';
import LocationPermissionScreen from '../screens/LocationPermissionScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
      <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;