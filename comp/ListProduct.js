import { View, Text, Button } from "react-native";

import st from "./styles";


const ListProduct = (props)=>{
    return (
        <View style={st.khungDSSP} >
            <Text>Danh sách SP</Text>
            <Button title="Thêm SP" 
            onPress={() => { props.navigation.navigate('AddProduct') }}
            />
        </View>
    );
}

export default ListProduct;