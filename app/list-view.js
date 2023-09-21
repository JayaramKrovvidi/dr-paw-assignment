import React from 'react';
import { View, Text, FlatList } from 'react-native';
import vetData from '../assets/vet-data.json';
import VetListDetail from '../components/vet-list-detail/VetListDetail';

const ListView = () => {
    return (
        <View>
            <FlatList
                data={vetData.documents}
                keyExtractor={(item) => item._id.$oid}
                renderItem={({ item }) => (
                    <VetListDetail clinic={item} />
                )}
            />
        </View>
    );
};

export default ListView;
