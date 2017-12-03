import React, { Component } from 'react';
import { Picker, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { 
    Card, 
    CardSection, 
    Button, 
    Input, 
    Spinner 
} from './common';
import { 
    employeeUpdate,
    employeeCreate
} from '../actions';

class EmployeeForm extends Component{

    onButtonPressed(){
        ToastAndroid.show('Save Pressed.!', ToastAndroid.SHORT);
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label=""
                        placeholder="Name"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label=""
                        placeholder="Phone"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPressed.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

mapStateToProps = state => {
    console.log(state);
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift  }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeForm);