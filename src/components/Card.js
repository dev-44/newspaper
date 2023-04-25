import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
//import Animated, {Layout, RollInLeft, RollOutRight} from 'react-native-reanimated'

const Card = ({ news }) => {

    const navigation = useNavigation();
    const { title, description, urlToImage, url } = news

    const onPress = () => {
        navigation.navigate('Details', { url })
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: urlToImage }}  style={styles.image} />

                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.bodyContainer}>
                        <Text style={styles.body}>{description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        //height: 120,
        borderRadius: 28,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        elevation: 8,
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOffset: { height: 6, width: 0},
        shadowOpacity: 0.1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 14,
    },
    container: {
        flexShrink: 1,
    },
    titleContainer: {
        flexShrink: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: "900",
        color: "#383838",
        marginBottom: 4,
        marginLeft: 10,
        flexShrink: 1,
    },
    bodyContainer: {
        flexShrink: 1,
    },
    body: {
        fontSize: 12,
        color: "#575757",
        //marginBottom: 8,
        marginLeft: 10,
        flexShrink: 1,
    },
})

export default Card
