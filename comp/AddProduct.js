import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import st from "./styles";


const AddProduct = ()=>{
    const [tenSP, settenSP] = useState('');
    const [gia, setgia] = useState(0);
    const SaveProduct=()=>{
        // tạo obj
        let obSP = {
            name: tenSP,
            price: gia
        }
        // fetch:
        let url_api = "https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham";
       
        fetch(url_api, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify (obSP)
          })
          .then ((res)=>{
                if(res.status == 201)
                    alert('Thêm thành công');

          }).catch((err) =>{
            console.log(err);
          });


    }

    return (
        <View style={st.formAdd} >
            <Text>Thêm mới</Text>

            <TextInput placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }} />
            <TextInput placeholder="Giá tiền"
                onChangeText={(txt) => { setgia(txt) }}
            />
            <Button title="Save" onPress={SaveProduct} />
        </View>
    );
}

export default AddProduct;