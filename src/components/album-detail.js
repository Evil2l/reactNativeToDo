import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from 'react-native';

//subcomponents
import Card from './card';
import CardSection from './card-section'
import Button from './button'


// const AlbumDetail = (props) =>{
const AlbumDetail = ({album}) =>{
    const {title, url, artist, thumbnail_image, image} = album;
    const {thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        albumImageStyle
    } = styles;

    return (
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{artist}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={albumImageStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )

};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;