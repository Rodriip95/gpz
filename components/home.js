import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Alerts from './views/alerts';
import Buys from './views/buy';
import Profile from "./views/profile";

const PerfilView = () => <Profile/>;

const AlertView = () => <Alerts/>;

const BuyView = () => <Buys/>;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'perfil', title: 'Perfil', icon: 'account' },
    { key: 'alert', title: 'Alertas', icon: 'bell' },
    { key: 'buy', title: 'Compras', icon: 'basket' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    perfil: PerfilView,
    alert: AlertView,
    buy: BuyView,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
