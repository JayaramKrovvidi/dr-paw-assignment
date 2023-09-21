import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import styles from "./home.style";
import { SIZES } from "../../constants";

const pages = [{ name: "List View", path: "/list-view" }, { name: "Map View", path: "/map-view" }]

const HomeComponent = () => {

    const router = useRouter();

    return (
        <View style={styles.tabsContainer}>
            <FlatList horizontal={true} data={pages}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.tab}
                        onPress={() => router.push(item.path)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ columnGap: SIZES.small }}
            />
        </View>
    );
}

export default HomeComponent;