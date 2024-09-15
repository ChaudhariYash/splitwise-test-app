import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from"./screen/Splash";
// import Welcome from './screen/welcome';



const Stack = createNativeStackNavigator();

  const App = () => {
    return(
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            {/* <Stack.Screen name="welcome" component={Welcome} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default App;