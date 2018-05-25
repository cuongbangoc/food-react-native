import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, onButtonPress  } from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
            <TextInput style={styles.input}
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                placeholder='Email or Mobile Num'
                placeholderTextColor='rgba(225,225,225,0.7)' />

            <TextInput style={styles.input}
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                placeholder='Password'
                placeholderTextColor='rgba(225,225,225,0.7)'
                secureTextEntry />

            <TouchableOpacity style={styles.buttonContainer}
                onPress={onButtonPress}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    formContainer: {
        margin: 10,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});

export default LoginForm;
