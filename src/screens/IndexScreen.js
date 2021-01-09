import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import BlogContext from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { data, deleteBlogPostData } = useContext(BlogContext);
    // console.log(data);
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("Blog", { id: item.id }) }}>

                            <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text> {item.title} </Text>
                                <TouchableOpacity onPress={() => { deleteBlogPostData({ id: item.id }) }}>
                                    <MaterialIcons name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => { navigation.navigate("CreateBlog") }} >
                    <Ionicons name="create" size={24} color="black" />
                </TouchableOpacity>
            );
        }
    }
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})

export default IndexScreen;