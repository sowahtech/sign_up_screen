import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'

class signUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_agn: ''
        }
    }

    render() {
        return (
            <ScrollView style = {styles.container}>
                <View>
                    <Text style={styles.signup_text}>Sign up</Text>
                </View>
                <View>
                    <TextInput
                        placeholder='Username'
                        autoCapitalize="none"
                        autoCorrect={false}
                        style = {styles.input}
                        value={this.state.username}
                        onChangeText = {(username)=>{
                            this.setState({username})
                        }}
                            
                        />

                    <TextInput
                        placeholder='Email'
                        autoCapitalize="none"
                        autoCorrect={false} 
                        style = {styles.input}
                        value={this.state.email}
                        onChangeText = {(email)=>{
                            this.setState({email})
                        }}
                        />

                    <TextInput
                        placeholder='Password'
                        autoCapitalize="none"
                        autoCorrect={false} 
                        secureTextEntry={true}
                        style = {styles.input}
                        value={this.state.password}
                        onChangeText = {(password)=>{
                            this.setState({password})
                        }}
                        />

                    <TextInput
                        placeholder= 'Password again'
                        autoCapitalize="none"
                        autoCorrect={false} 
                        secureTextEntry={true}
                        style = {styles.input}
                        value={this.state.password_agn}
                        onChangeText = {(password_agn)=>{
                            this.setState({password_agn})
                        }}
                        />
                </View>

                <View>
                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.questionContainer}>
                    <Text style={styles.haveAccount}>You already have account?</Text>
                    <Text style = {styles.login}>Login</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50    
    },
    
    signup_text: {
        color: '#9705C3',
        fontSize: 50,
        marginVertical: 40
    },

    input: {
        fontSize: 26,
        borderBottomWidth: 2,
        borderBottomColor: '#9705C3',
        marginVertical: 20, 
        paddingBottom: 5,
    }, 

    buttonContainer: {
        height: 40,
        backgroundColor:'#9705C3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    questionContainer : {
        flexDirection: 'row',
        justifyContent: "center",
        marginVertical: 30
    },

    haveAccount: {
        marginRight: 10,
        fontSize: 16
    },

    login: {
        fontSize: 16,
        color: '#9705C3'
    }

})

export default signUp;