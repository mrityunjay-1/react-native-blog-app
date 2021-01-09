import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import BlogContext from '../context/BlogContext';

const EditBlogScreen = ({ navigation }) => {
    // states
    const [BlogTitle, setBlogTitle] = useState("");
    const [BlogBody, setBlogBody] = useState("");

    const id = navigation.getParam("id");

    const { data, updateBlogPostData } = useContext(BlogContext);
    // console.log(data);

    let BlogData = data.find((blog) => {
        // console.log(blog);
        return blog.id === id;
    });

    React.useEffect(() => {
        setBlogTitle(BlogData.title);
        setBlogBody(BlogData.body);
    }, [])

    return (
        <View>
            <TextInput onChangeText={(val) => setBlogTitle(val)} value={BlogTitle} />
            <TextInput onChangeText={(val) => setBlogBody(val)} value={BlogBody} />
            <Button title="update_data"
                onPress={() => {
                    updateBlogPostData({ id, title: BlogTitle, body: BlogBody });
                    navigation.navigate('Index');
                }
                } />
        </View>
    );
}

export default EditBlogScreen;