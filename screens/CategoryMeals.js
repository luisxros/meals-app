import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/fake-data';



const CategoryMeals = props => {

    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>);
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
           <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
        </View>
    );
};

CategoryMeals.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCatagory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCatagory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMeals