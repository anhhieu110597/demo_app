import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,

} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from "react-native-swiper";


class SwiperComponent extends Component {
  login() {
    this.props.navigation.navigate('Login')
  }
  back() {
    this.props.navigation.navigate("Swiper")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => { this.back() }}>
            <Image source={require('./image/icon-back.png')} tintColor='#2F80ED' style={styles.img_back} />
          </TouchableOpacity>
        </View>

        <Swiper loop={false}>
          <View style={styles.slide}>
            <View style={styles.header}>
              <View style={styles.header}>
                <Image source={require('./image/6.png')} style={styles.image_swiper_1} resizeMode="stretch" />
              </View>
              <Image source={require('./image/2.png')} style={styles.image_1} resizeMode="stretch" />
            </View>

            <View style={styles.footer}>
              <Text style={[styles.title, { marginTop: 20 }]}>Ứng dụng quản lý bán hàng miễn phí</Text>
              <Text style={styles.text}>Dành riêng cho cửa hàng bán lẻ và shop online</Text>
            
            </View>
          </View>

          <View style={styles.slide}>
            <View style={styles.header}>
              <Image source={require('./image/6.png')} style={[styles.image_swiper_2]} resizeMode="stretch" />
              <Image source={require('./image/3.png')} style={styles.image_2} resizeMode="stretch" />
            </View>
            <View style={styles.footer}>
              <Text style={[styles.title, { marginTop: 20 }]}>Ứng dụng quản lý bán hàng miễn phí</Text>
              <Text style={styles.text}>Dành riêng cho cửa hàng bán lẻ và shop online</Text>
            </View>
          </View>
        </Swiper>

        <View style={{ backgroundColor: "white" }} >

          <TouchableOpacity style={[styles.button, { backgroundColor: "#2F80ED", borderColor: "#2F80ED", borderWidth: 1, borderRadius: 50, marginTop: 15 }]}>
            <Text style={{ color: "white" }}>Đăng kí miễn phí</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { this.login() }} style={[styles.button, { backgroundColor: "#E0E0E0", borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 50, marginTop: 15, marginBottom: 15 }]}>
            <Text style={{ color: "black" }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  };
};

const { width, height } = Dimensions.get("screen");
const height_image = height * 0.4 * 0.7;
const width_image = height_image * 1.0;
const width_button = width * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_button: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide: {
    flex: 1,
    backgroundColor: "white"

  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  image_1: {
    height: height_image,
    width: width_image,
  },
  image_2: {
    height: height_image,
    width: width_image,
    position: "absolute",
    top: 200,
  },
  image_splash: {
    width: 400,
    height: 400
  },
  image_swiper_1: {
    position: "relative",
    width: 400,
    height: 300,
    top: 60,
  },
  image_swiper_2: {
    width: 400,
    height: 300,
    position: "absolute",
    bottom: 125,

  },
  footer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000"

  },
  text: {
    color: "gray",
    marginTop: 5,
    textAlign: "center"
  },

  btnContainer: {
    backgroundColor: "#2F80ED",
    marginTop: 40
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center"

  },
  img_back: {
    marginTop: 15,
    marginLeft: 20,
    height: 25,
    width: 25,

  },

});

export default SwiperComponent;
