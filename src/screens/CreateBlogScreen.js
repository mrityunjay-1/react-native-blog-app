import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';

const CreateBlogScreen = ({ navigation: { navigate } }) => {
    const { addBlogPostData } = useContext(BlogContext);

    const [blogTitle, setBlogTitle] = useState("");
    const [blogBody, setBlogBody] = useState("");

    return (
        <>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}> Create Blog </Text>

            <TextInput
                value={blogTitle}
                placeholder="title"
                onChangeText={(value) => { setBlogTitle(value); }} style={styles.textInput} />
            <ScrollView>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    numberOfLines={10}
                    editable
                    placeholder="content"
                    onChangeText={(value) => { setBlogBody(value); }} style={styles.textInput}
                    value={blogBody}
                />
            </ScrollView>

            <TouchableOpacity onPress={() => {
                addBlogPostData({ title: blogTitle, body: blogBody });
                // console.log(blogTitle, blogBody);
                alert("Blog Created");
                navigate("Index");
            }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18, textAlign: 'center', backgroundColor: 'magenta', margin: 10, padding: 10, borderRadius: 3 }}> create blog </Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 2,
        padding: 8
    }
})

export default CreateBlogScreen;