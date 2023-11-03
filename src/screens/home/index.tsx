import { styles } from "./styles";
import { Text, View, Image, TextInput } from "react-native";

import Logo from "../../../assets/Logo.png";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={Logo} />
            </View>
            <View style={styles.containerMain}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Add a new task..."
                    placeholderTextColor="#808080"
                />

            </View>
        </View>
    )
}