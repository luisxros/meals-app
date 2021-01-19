import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/fake-data';



const CategoryMeals = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCatagory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen} >
            <Text>Category Meals Screen!</Text>
            <Text>{selectedCatagory.title}</Text>
            <Button title="Go to Details" onPress={() => {props.navigation.navigate({routeName: 'MealDetail'
            });
        }}/>
        <Button title="Go Back" onPress={() => {
            props.navigation.pop();
        }}/>
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