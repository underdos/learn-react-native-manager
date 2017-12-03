import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
    
    componentWillMount(){
        this.props.employeeFetch();
    }

    render() {
        return (
            <List>
                <ListItem
                    key={1}
                    title="Kusnadi"
                />
            </List>
        );
    }
}

export default connect(null, { employeeFetch })(EmployeeList);


// <View>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//                 <Text>EmployeeList</Text>
//             </View>