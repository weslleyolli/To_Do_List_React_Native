import { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { styles } from "./styles";

type Props = {
    textTask: string;
    onRemove: () => void;
}

export default function Task({ textTask, onRemove }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };
    // {isChecked ? 'Selecionado' : 'Não selecionado'}
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
            <Text numberOfLines={2} style={styles.textTask}>
                {textTask}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <FontAwesomeIcon name="trash-o" size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}