import { createDrawerNavigator } from '@react-navigation/drawer';
import HelloWave from "./HelloWave"
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HelloWave} />
      {/*<Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Refer Friends" component={ReferFriendsScreen} />
       <Drawer.Screen name="Language" component={LanguageScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      <Drawer.Screen name="Rate us" component={RateUsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Hospitals" component={HospitalsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} /> */}
    </Drawer.Navigator>
  );
}