import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");

  const image = {
    uri:
      "https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.distributer}>
          <View style={{marginTop:50}}>
            <TextInput
              style={styles.inpt}
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              style={styles.inpt}
              label="Password"
              value={pass}
              onChangeText={(text) => setPass(text)}
              secureTextEntry={true}
            />
            <View style={styles.centrar}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Home")}
              style={styles.btn}
            >
              Login
            </Button>
          </View>
          </View>
          <View style={styles.centrar}>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.btn}
            >
              Register
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  distributer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  btn: {
    width: 280,
    margin: 15,
    marginTop: 0
  },
  centrar:{
    alignItems: "center", marginTop: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inpt: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
