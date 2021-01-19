import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Colors from '../constants/Colors';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categories
},
    CategoryMeals: {
        screen: CategoryMeals,
    },
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
}
);

export default createAppContainer(MealsNavigator);