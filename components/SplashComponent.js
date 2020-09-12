import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Button
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


class SplashComponent extends Component  {
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    componentDidMount = async () => {
        await this.timeout(2000)
        .then(() => this.props.navigation.navigate('Swiper'));
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image source={require('./image/1.jpg')} style={styles.image} resizeMode="stretch" />
                    </View>
                </View>
            </View>
            
            
        );
    };
};
const { width, height } = Dimensions.get("screen");
const height_image = height * 0.6 * 0.9;
const width_image = height_image * 1.1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    image: {
        height: height_image,
        width: width_image,
    },
});

export default SplashComponent;
