import React from 'react';
import {Text, View, AppRegistry} from 'react-native';

//components
import Header from './src/components/header';
import AlbumList from './src/components/album-list'

 const App = () => (
     <View style={{flex: 1}}>
       <Header headerTittle={"Albums"}/>
       <AlbumList/>
     </View>


);

AppRegistry.registerComponent('toDo', ()=> App);