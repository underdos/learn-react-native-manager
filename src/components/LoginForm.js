import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { 
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component{

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text)
    }

    onLoginPress(){
        console.log('loginPressed');
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    renderError() {
        if (this.props.error){
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.textErrorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return (<Spinner size="small" />);
        }

        return (
            <Button onPress={this.onLoginPress.bind(this)}>
                Login
            </Button>
        );
    }
    
    render () {
        return (
            <Card>
                <CardSection>
                    <Input  
                        label=""                       
                        placeholder="email"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>                   
                <CardSection>
                    <Input                         
                        lable=""
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textErrorStyle: {
        fontSize: 14,
        color: 'red',
        alignSelf: 'center'
    }
}
const mapStateToProps = state => {
    console.log(state);
    return { 
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);

