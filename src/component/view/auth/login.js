import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import { TextInputView, styles, Heading } from './styles';

const login = () => {
  const onChange = (type, value) => {
    console.log(type, value)
  }
  return (
    <View style={styles.containerFluid}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.imageStyle}
              source={require('../../../assets/img/preview.png')}
            />
          </View>
          <View >
            <Heading>Login</Heading>

          </View>

          <View style={styles.formContainer}>
            <TextInputView
              label='Email'
              type="text"
              underline={true}
              placeholder="Username"
              inputColor="rebeccapurple"
              onChangeText={(value) => onChange('username', value)}
            />

            <TextInputView
              underline={true}
              defaultValue=""
              placeholder="Password"
              label="label"
              type="password"
              secureTextEntry={true}
              inputColor="rebeccapurple"
              onChangeText={(value) => onChange('password', value)}
            />
            <View style={styles.forgotButtonConatiner}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotButtonStyle}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButtonContainer}>
              <Text style={styles.buttonStyle}> Login</Text>
            </TouchableOpacity>
            

          </View>
          <View style={styles.signUpContainer}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.textColor}>Don't have an account?
              <Text style={styles.signUpButtonTextStyle}> SignUp!</Text>
                </Text>
              </TouchableOpacity>
            </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default login;


