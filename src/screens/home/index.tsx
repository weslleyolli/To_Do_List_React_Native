import { styles } from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import Logo from "../../../assets/Logo.png";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={Logo} />
            </View>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Add a new task..."
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.containerButtonAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerData}>
                <View style={styles.containerProgress}>
                    <Text style={styles.textCreate}>Create</Text>
                    <Text style={styles.textNumberProgress}>0</Text>
                </View>
                <View style={styles.containerProgress}>
                    <Text style={styles.textCompleted}>Completed</Text>
                    <Text style={styles.textNumberProgress}>0</Text>
                </View>
            </View>
        </View>
    )
}