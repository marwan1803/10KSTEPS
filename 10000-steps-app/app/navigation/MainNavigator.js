import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ChooseActivityScreen from '../screens/ChooseActivityScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="ChooseActivity" component={ChooseActivityScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;