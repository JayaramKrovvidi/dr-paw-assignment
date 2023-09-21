import { Stack, useRouter } from 'expo-router';
import HomeComponent from '../components/home';
import { COLORS, SIZES } from "../constants";
import { View, SafeAreaView, ScrollView } from 'react-native';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
            }} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <HomeComponent />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;