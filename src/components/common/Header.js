// Import libraries for making Component
import React from 'react'
import { Text, View } from 'react-native'

// Make a Component
const Header = (props) => {
    const { viewStyle, textStyle } = styles
    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.7
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold"
    }
}

// Make a Component available to other parts of the App
export { Header }