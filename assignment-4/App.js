import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import JobScreen from './JobScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name, email) => {
    setUser({ name, email });
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <Drawer.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Drawer.Screen>
        ) : (
          <Drawer.Screen name="Job">
            {(props) => <JobScreen {...props} name={user.name} email={user.email} />}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
