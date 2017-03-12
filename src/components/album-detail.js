import React, { Component } from 'react';
import {Text, View} from 'react-native';

//subcomponents
import Card from './card';
import CardSection from './card-section'


const AlbumDetail = (props) =>{
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>

        </Card>
    )

};

export default AlbumDetail;