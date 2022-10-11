import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './src/navigation/InitialStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}

export default App