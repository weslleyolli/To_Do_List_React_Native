import { styles } from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
                    <AntDesignIcon name="pluscircleo" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerSection}>
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
                <View style={styles.containerEmpty}>
                    <FontAwesomeIcon name="list-ul" size={56} color="#808080" />
                    <View style={styles.containerTextEmpty}>
                        <Text style={styles.textTitleEmpty}>You don't have tasks registered yet</Text>
                        <Text style={styles.textSubtitleEmpty}>Create tasks and organize your to-do items</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}