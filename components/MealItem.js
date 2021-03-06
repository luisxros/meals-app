import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
            
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affodability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    }
});

export default MealItem;