import styled from 'styled-components/native';
import Text from '../../widget/text';
import { StyleSheet } from "react-native";

export const TextView = styled(Text)`


`;

export const TextInputView = styled.TextInput`
    padding: 8px;
    margin:8px 0px;
    background-color: #fff;
    border-radius: 4px;
    border-color:#b9b3b3eb;
    border-style: solid

`;




export const Heading = styled.Text`
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: inherit;
    font-weight: 500;
    color: #fff;
`;
export const Span = styled.Text`
  color:rgb(255, 255, 255);
  margin: 0 0 10px;
  font-size: 14px;
  padding-left:15px;
  padding-right:15px;
`;





export const styles = StyleSheet.create({
    containerFluid: {
        flex: 1,
        backgroundColor: '#289fe6'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 15
    },
    logoContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    imageStyle: {
        width: 400,
        height: 200,
        resizeMode: 'center'
    },
    formContainer: {
        flex: 8,
    },
    forgotButtonConatiner: {
        alignItems: 'flex-end',
        flex: 0.4,
        paddingBottom:10,
    },
    forgotButtonStyle: {
        color: '#ffff'
    },

    loginButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonStyle:{
        fontWeight: "bold",
         fontSize: 18, 
         color: "#289fe6"

    },

    signUpContainer:{
        flex: 0.2, 
        paddingVertical:20,
        alignItems: 'center', 
        justifyContent: 'flex-end' 
    },
    signUpButtonTextStyle:{
        fontWeight: "bold",
         fontSize: 16 
    },

    textColor:{
        color: '#fff'
    }


})

