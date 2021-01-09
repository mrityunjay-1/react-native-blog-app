import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';

const BlogScreen = ({ navigation }) => {
    //  console.log(navigation);
    const id = navigation.getParam("id");


    const data = useContext(BlogContext);
    // console.log(data.data);

    const RightBlog = data.data.find((blog) => {
        return blog.id === id;
    })

    // console.log(RightBlog);

    return (
        <View>
            <Text> Title Name: {RightBlog.title} </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Title Body:  </Text>
            <Text> {RightBlog.body} </Text>
        </View>
    );
}

BlogScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => { navigation.navigate('EditBlog', { id: navigation.getParam("id") }) }}>
                    <Text> Edit </Text>
                </TouchableOpacity>
            );
        }
    }
}


export default BlogScreen;