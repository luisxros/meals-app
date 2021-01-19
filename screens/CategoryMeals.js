import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/fake-data';



const CategoryMeals = props => {

    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affodability={itemData.item.affodability} image={itemData.item.imageUrl} onSelectMeal={() => {}} />;
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
           <FlatList 
           data={displayedMeals} 
           keyExtractor={(item, index) => item.id} 
           renderItem={renderMealItem} 
           style={{width: '100%'}}
           />
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