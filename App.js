import React, { useState } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/home";
import Login from "./components/login";
import HeaderComponents from "./components/header";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#11698e",
  },
};

const Stack = createStackNavigator();

function MyStack() {
  const [inicio , setInicio] = useState(false)
  function handlerIn(){
    setInicio(false)
  }
  return (
    <Stack.Navigator screenOptions={{
      header: (props) => <HeaderComponents {...props} />
    }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <MyStack>
          {login ? <Home /> : <Login />}
        </MyStack>
      </PaperProvider>
    </NavigationContainer>
  );
}
