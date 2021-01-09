import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';
import BlogScreen from './src/screens/BlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';

const navigation = createStackNavigator(
    {
        Index: IndexScreen,
        Blog: BlogScreen,
        CreateBlog: CreateBlogScreen,
        EditBlog: EditBlogScreen
    },
    {
        initialRouteName: "Index",
        defaultNavigationOptions: {
            title: "Blog App - Mrityunjay"
        }
    }
);

const App = createAppContainer(navigation);

// here Whatever the App JSX data that is become children for the BlogProvider Component
export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    );
}