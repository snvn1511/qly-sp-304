import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import st from "./styles";


const EditProduct = (props)=>{
    const [tenSP, settenSP] = useState(props.route.params.item_sp.name);
    const [gia, setgia] = useState(props.route.params.item_sp.price);
    const SaveProduct=()=>{

        // tạo obj
        let obSP = {
            name: tenSP,
            price: gia
        }

        let _id = props.route.params.item_sp.id;
        // fetch:
        let url_api = "https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham/"+ _id;
       
        fetch(url_api, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify (obSP)
          })
          .then ((res)=>{
                if(res.status == 200)
                    alert('Sửa thành công');

          }).catch((err) =>{
            console.log(err);
          });


    }

    return (
        <View style={st.formAdd} >
            <Text>Thêm mới</Text>

            <TextInput placeholder="Tên SP"
                onChangeText={(txt) => { settenSP(txt) }} 
                value={tenSP}
                />
            <TextInput placeholder="Giá tiền"
                onChangeText={(txt) => { setgia(txt) }}
                value={gia}
            />
            <Button title="Save" onPress={SaveProduct} />
        </View>
    );
}

export default EditProduct;