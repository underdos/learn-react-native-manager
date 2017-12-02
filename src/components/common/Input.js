import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle} >
            {/* <Text style={labelStyle}>
                {label}
            </Text> */}
            <TextInput                
                style={inputStyle}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText} 
                underlineColorAndroid="transparent"               
            />
        </View>
    );
}

 const styles = {
     labelStyle: {
         fontSize: 18,
         paddingLeft: 20,
         flex:1
     },
     inputStyle: {
         color: '#000',
         paddingLeft: 5,
         paddingRight: 5,
         fontSize: 18,
         color: '#6591f8',
         lineHeight: 23,
         flex:1 
     },
     containerStyle: {
         height: 40,
         flex:1,
         flexDirection: 'row',
         alignItems: 'center'
     }
 }

export { Input };
