import { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { styles } from "./styles";

export default function Task() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <View style={styles.containerTask}>
            <CheckBox
                checked={isChecked}
                onPress={toggleCheckBox}
                size={20}
                containerStyle={styles.checkbox}
                uncheckedColor="transparent"
                checkedIcon="check"
                checkedColor="#1E6F9F"
            />
            <Text numberOfLines={2}  style={styles.textTask}>{isChecked ? 'Selecionado' : 'Não selecionado'}</Text>
            <FontAwesomeIcon name="trash-o" size={20} color="#808080" />
        </View>
    )
}