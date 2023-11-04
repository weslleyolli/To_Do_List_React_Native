import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    containerTask:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#262626",
        paddingVertical: 12,
        paddingRight: 20,
        marginRight: 28,
        borderRadius: 8,
    },
    checkbox: {
        padding: 2,
        margin: 0,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#1E6F9F',
        borderRadius: 30,
    },
    textTask: {
        maxWidth: 200,
        fontSize: 14,
        color: "#F2F2F2"
    }
})