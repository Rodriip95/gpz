import React from "react";
import { Appbar, Menu } from 'react-native-paper';


function Header({ navigation, previous }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
  
    return (
      <Appbar.Header>
        <Appbar.Content title="Goopzer" />
        {previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }>
            <Menu.Item onPress={() => {console.log('')}} title="Config" />
            <Menu.Item onPress={() => {console.log('')}} title="FAQ" />
            <Menu.Item onPress={() => {console.log('')}} title="Salir" />
          </Menu>
        ) : null}
      </Appbar.Header>
    );
  }

  export default Header;