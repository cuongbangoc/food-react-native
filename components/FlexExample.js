import React, {Component} from "react";
import {View, Text, TextInput} from 'react-native';

export default class FlexExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: ""
        };
    }
    render(){
        return (
            <View>

                <TextInput style={{margin: 10, padding: 10, borderColor: "gray", borderWidth: 1, height: 40, width: 300}}
                    keyboardType="email-address"
                    placeholder= "Enter your email"
                    onChangeText={
                        (email)=> {
                            this.setState(prevState => {
                                return {email: email};
                            });
                        }
                    }
                >
                </TextInput>
                <Text style={{margin: 10}}>{this.state.email}</Text>
                <Text style={{ margin: 10 }}>asfasdf</Text>
            </View>
        );
    }
}