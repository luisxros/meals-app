import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import CategoryGrid from '../components/CategoryGrid';
import {CATEGORIES} from '../data/fake-data';



const Categories = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGrid 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
            props.navigation.navigate({
            routeName: 'CategoryMeals', 
            params: {
            categoryId: itemData.item.id
            }
        });
    }}/>
    );
    };
    
    return (
       <FlatList 
       keyExtractor={(item, index) => item.id}
       data={CATEGORIES} 
       renderItem={renderGridItem} 
       numColumns={2} />
    );
};

Categories.navigationOptions = {
    headerTitle: 'Meal Catagories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Categories