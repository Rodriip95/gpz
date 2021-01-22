import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Chip,
} from "react-native-paper";

const Alert = () => {
  const [visible, setVisible] = React.useState(false);
  const [sale, setSale] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 40,
    borderRadius: 10,
    alignItems: "center",
  };

  const sale10 = () => {
    setSale("10");
  };
  const sale30 = () => {
    setSale("30");
  };
  const sale50 = () => {
    setSale("50");
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={{ fontSize: 20 }}>Alertas para Ofertas de:</Text>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => {
              hideModal();
              sale10();
            }}
            icon="plus"
          >
            10%
          </Button>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => {
              hideModal();
              sale30();
            }}
            icon="plus"
          >
            30%
          </Button>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => {
              hideModal();
              sale50();
            }}
            icon="plus"
          >
            50%
          </Button>
        </Modal>
      </Portal>
      <View style={styles.container}>
        <Button style={{marginBottom:20}} onPress={showModal} icon="filter">
          Descuentos
        </Button>
        {sale.length > 0 && (
          <Chip
            icon="close"
            onPress={() => setSale("")}
          >
            {sale}%
          </Chip>
        )}
      </View>
    </Provider>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
});
