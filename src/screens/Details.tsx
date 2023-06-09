import React, { useState, useMemo } from 'react'
import { View, StyleSheet, Text, Image, Linking } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { RootState } from '../app/store'


type MyStackParamList = {
    Details: { url: string };
  };

const Details: React.FC = (): JSX.Element => {

    const route = useRoute<RouteProp<MyStackParamList, 'Details'>>();

    const [article, setArticle] = useState({
        title: '',
        description: '',
        urlToImage: '',
        content: '',
        source: ''
    })

    const { news } = useSelector((state: RootState) => state.news);
    const { url } = route.params

    const findMatch = () => {
        let match = news.find(item => item.url === url)

        if (match && match.source) {
            const { title, description, urlToImage, content, source } = match;
            const { name } = source;
            setArticle({ title, description, urlToImage, content, source: name });
          }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => findMatch(),[url])
 
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: article.urlToImage}}  style={styles.image} />
                <Text style={styles.title}>{article.title}</Text>
            </View>

            <View style={styles.text}>
                <Text style={styles.description}>{article.description}</Text>
                <Text style={styles.content}>{article.content}</Text>

            </View>

            <View style={styles.footer}>
                <Text style={styles.source}>{article.source}</Text>
                <Text 
                    style={styles.link} 
                    onPress={() => Linking.openURL(url)}
                >
                    {url}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 28,
        padding: 16,
        marginHorizontal: 15,
        marginVertical: 30,
        backgroundColor: 'white',
        elevation: 8,
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOffset: { height: 6, width: 0},
        shadowOpacity: 0.1, 
    },
    header: {
        flexDirection: 'row',
        flexShrink: 1,
    },
    image: {
        width: 120,
        height: 120,
        marginTop: 20,
        borderRadius: 14,
    },
    title: {
        fontSize: 16,
        fontWeight: "900",
        marginTop: 20,
        marginBottom: 4,
        marginLeft: 15,
        color: '#000',
        flexShrink: 1,
        textAlign: 'justify'
    },
    text: {
        flexShrink: 1,
        marginTop: 15,
    },
    description: {
        fontSize: 14,
        color: "#575757",
        fontStyle: 'italic',
        textAlign: 'justify'
    },
    content: {
        fontSize: 13,
        color: "#575757",
        marginTop: 10,
        textAlign: 'justify'
    },
    footer: {
        flexShrink: 1,
        marginTop: 15,
    },
    source: {
        fontSize: 11,
        color: "#575757",
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    link: {
        color: 'blue',
        fontSize: 10
    }
})

export default Details
