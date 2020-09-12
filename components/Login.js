import React from 'react';
import { Component } from 'react';
import { View, Image, Dimensions, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, ImageBackground, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-fontawesome";
class LoginComponent extends Component {
  back() {
    this.props.navigation.navigate('Swiper')
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => { this.back() }}>
          <Image source={require('./image/icon-back.png')} tintColor='#2F80ED' style={styles.img_back} />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View>
              <Image source={require('./image/1.jpg')} style={styles.image} resizeMode="stretch" />
            </View>
            <View style={{ position: "relative", bottom: 160 }}>
              {/* <View style = {styles.action}>
                <FontAwesome name="email-outline" 
                color= "#E0E0E0" size={20}
                />
                <TextInput placeholder="Số điện thoại" style = {styles.text}/>

                

              </View> */}
              <TextInput placeholder="Số điện thoại" style={styles.textInput} />
              <TextInput placeholder="Mật khẩu" style={styles.textInput}
                underlineColorAndroid="transparent"
                secureTextEntry={true} />

              <TouchableOpacity>
                <Text style={{ marginTop: -25, color: "#2F80ED", textAlign: "right", fontSize: 15 }}>Bạn quên mật khẩu ?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.back() }} style={[styles.button, { backgroundColor: "#2F80ED", borderColor: "#2F80ED", borderWidth: 1, borderRadius: 50, marginTop: 15 }]}>
                <Text style={{ color: "white" }}>Đăng nhập</Text>
              </TouchableOpacity>
              <View>
                <Text style={{ fontSize: 13, textAlign: "center", marginTop: 20 }}>--------------- HOẶC ĐĂNG NHẬP BẰNG ---------------</Text>
              </View>
              <View>
                {/* <TouchableOpacity>
                  <Image source={require('./image/google.jpg')} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./image/google.jpg')} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./image/google.jpg')} style={{ height: 40, width: 40 }} />
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    );
  };
};
const { width, height } = Dimensions.get("screen");
const height_image = height * 0.55 * 0.75;
const width_image = height_image * 1.0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    position: "relative",
    bottom: 40,
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2F80ED",
  },
  header_1: {
    marginTop: 0,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",

  },
  textInput: {
    height: 50,
    borderColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 18,

  },
  btnContainer: {
    backgroundColor: "#2F80ED",
    marginTop: 40,
  },

  img_back: {
    marginTop: 15,
    marginLeft: 20,
    height: 25,
    width: 25,

  },

  container_back: {
    flex: 1,
  },
  image: {
    height: height_image,
    width: width_image,

  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  action : {
    flexDirection : "row",
    marginTop :10,
    borderBottomWidth :1,
    paddingBottom : 5,
  },
  text:{
    flex:1,
    paddingLeft:10,

  },
});

export default LoginComponent;

