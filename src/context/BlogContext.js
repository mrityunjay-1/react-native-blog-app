import React, { useState, useReducer } from 'react';
import { Text, View } from 'react-native';

const BlogContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "addBlogData":
            return [...state, action.payload];
        case "deleteBlogData":
            return state.filter((blog) => blog.id !== action.payload);
        case "updateBlogData":
            return state.map((blog) => {
                // or i can use here ternary operator
                if (blog.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return blog;
                }
            })
        default:
            return state;
    }
}


export const BlogProvider = ({ children }) => {
    // instead of using useState I am going to use useRedcer hook
    // const [blogData, setBlogData] = useState([]);

    const [blogData, dispatch] = useReducer(reducer, []);


    // a callback function that sets the blog post
    const addBlogPostData = ({ title, body }) => {
        dispatch({ type: 'addBlogData', payload: { id: `${new Date().getTime() + 100}`, title, body } });
    }
    const deleteBlogPostData = ({ id }) => {
        dispatch({ type: "deleteBlogData", payload: id });
    }
    const updateBlogPostData = ({ id, title, body }) => {
        // console.log("Inside Function updateBlogPostData = ", { id, title, body });
        dispatch({ type: 'updateBlogData', payload: { id, title, body } });
    }

    return (
        <BlogContext.Provider value={{ data: blogData, addBlogPostData, deleteBlogPostData, updateBlogPostData }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;