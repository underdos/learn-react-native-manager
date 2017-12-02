import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene 
                    on
                    key="login" 
                    component={LoginForm} 
                    title="Please Login" 
                />
            </Scene>
            <Scene key="main" initial>
                <Scene 
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees" 
                    rightTitle="Add"
                    onRight={() => Actions.employeeForm()}    
                />
                <Scene 
                    key="employeeForm" 
                    component={EmployeeForm} 
                    title="Employees" 
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent;