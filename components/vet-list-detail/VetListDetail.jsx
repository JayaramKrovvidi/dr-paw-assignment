import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Card } from '@rneui/themed';
import { Rating } from 'react-native-ratings';

import styles from './vetlistdetail.style';
import { COLORS } from '../../constants/theme';

const VetListDetail = ({ clinic }) => {

    return (
        <Card containerStyle={{ marginBottom: 16 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 100, height: 100, backgroundColor: COLORS.gray2, marginRight: 16 }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', flexWrap: 'wrap', maxWidth: '80%' }}>
                        {clinic.name}
                    </Text>
                    <Text style={{ flexWrap: 'wrap', maxWidth: '80%' }}>
                        {clinic.address}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Rating
                            fractions={2}
                            startingValue={clinic.rating.$numberDouble}
                            imageSize={30}
                            readonly={true}
                            style={styles.starRatingContainer}
                        />
                        <Text>({clinic.user_ratings_total.$numberInt} Ratings)</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => alert('Services Provided')}>
                        <Text style={{ color: COLORS.secondary }}>Services Provided</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Book an Appointment')}>
                        <Text style={{ color: COLORS.secondary }}>Book an Appointment</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL(`https://maps.google.com/?q=${clinic.name} ${clinic.address}`)} style={{ alignSelf: 'flex-end' }}>
                    <View style={{ backgroundColor: COLORS.secondary, padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: COLORS.white }}>Maps</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

export default VetListDetail;
