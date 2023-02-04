import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProduct from './comp/ListProduct';
import AddProduct from './comp/AddProduct';


const StackDemo = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName='ListProduct'>
        <StackDemo.Screen name='ListProduct' component={ListProduct} options={{ title: 'Danh sách SP' }} />
        <StackDemo.Screen name='AddProduct' component={AddProduct} options={{ title: 'Thêm SP' }} />
        <StackDemo.Screen name='EditProduct' component={EditProduct} options={{ title: 'Sửa SP' }} />
        
      </StackDemo.Navigator>
    </NavigationContainer>
  );
}
export default App;