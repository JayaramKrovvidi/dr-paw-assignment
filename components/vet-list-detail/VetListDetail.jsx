import React from 'react';
import { View, Text } from 'react-native';

const VetListDetail = ({ clinic }) => {
    return (
        <View>
            <Text>Name: {clinic.name}</Text>
            <Text>Address: {clinic.address}</Text>
            <Text>Rating: {clinic.rating.$numberDouble}</Text>
            <Text>Total Ratings: {clinic.user_ratings_total.$numberInt}</Text>
        </View>
    );
};

export default VetListDetail;
