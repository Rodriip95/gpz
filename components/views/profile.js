import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Searchbar, Button, List, Avatar } from "react-native-paper";
import MapView from "react-native-maps";

const Profile = () => {
  const [search, setSearch] = React.useState("");
  const onChangeSearch = (texto) => setSearch(texto);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const photo = {
    uri:
      "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg",
  };
  const mapa = {
    uri:
      "https://images.adsttc.com/media/image_maps/5a95/5b03/f197/cc81/7a00/0cec/large/open-uri20180227-9235-1fshsb6.jpg?1519762714",
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.perfil}>
          <Avatar.Image size={120} source={photo} />
          <Text style={{ fontSize: 24, marginTop: 10 }}>Neymar, 26 años</Text>
        </View>
        <Searchbar
          style={{ margin: 20 }}
          placeholder="Buscar Articulos"
          onChangeText={(texto) => onChangeSearch(texto)}
          value={search}
        />
        <View style={styles.botonesContainer}>
          <Button
            style={styles.botones}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Ofertas
          </Button>
          <Button
            style={styles.botones}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Locales
          </Button>
        </View>
        <View>
          <MapView
          moveOnMarkerPress={false}
            initialRegion={{
              latitude: -34.56206865563597,
              longitude: -58.45639436056578,
              latitudeDelta: 0.0075,
              longitudeDelta: 0.0075,
            }}
            style={styles.map}
          />
        </View>
        <List.Section title="Destacados">
          <List.Accordion
            title="Locales"
            left={(props) => <List.Icon {...props} icon="store" />}
          >
            <List.Item
              style={{ marginLeft: 20 }}
              title="Deportivos"
              left={(props) => <List.Icon {...props} icon="football" />}
            />
            <List.Item
              style={{ marginLeft: 20 }}
              title="Moda"
              left={(props) => <List.Icon {...props} icon="shoe-heel" />}
            />
            <List.Item
              style={{ marginLeft: 20 }}
              title="Hogar"
              left={(props) => <List.Icon {...props} icon="hammer" />}
            />
          </List.Accordion>

          <List.Accordion
            title="Vendedores"
            left={(props) => <List.Icon {...props} icon="account-group" />}
          >
            <List.Item
              style={{ marginLeft: 20 }}
              title="Deportivos"
              left={(props) => <List.Icon {...props} icon="football" />}
            />
            <List.Item
              style={{ marginLeft: 20 }}
              title="Moda"
              left={(props) => <List.Icon {...props} icon="shoe-heel" />}
            />
            <List.Item
              style={{ marginLeft: 20 }}
              title="Hogar"
              left={(props) => <List.Icon {...props} icon="hammer" />}
            />
          </List.Accordion>
        </List.Section>
        <View style={{alignItems:"center"}}>
          <Button
            style={{margin: 20, width:400}}
            icon="gift"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Vender
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  perfil: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    padding:20,
    alignItems: "center",
    backgroundColor: "#99c1de",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  botonesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botones: {
    width: 200,
  },
  map: {
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: 200,
  },
});
