import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1A1A1A",
    },
    containerHeader: {
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0D0D",
        paddingHorizontal: 24
    },
    containerForm:{
        width: "100%",
        position: "relative",
        marginHorizontal: 24,
        marginBottom: 70,
    }, 
    textInput: {
        width: "73%",
        position: "absolute",
        top: -25,
        height: 54,
        color: "#FFFFFF",
        backgroundColor: "#262626",
        padding: 16,
        borderRadius: 6,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    containerButtonAdd:{
        width: 54,
        height: 54,
        position: "absolute",
        top: -25,
        right: 50,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton:{
        color: "#FFFFFF",
        fontSize: 16,
    },
    containerSection:{
        marginHorizontal: 28,
        gap: 20,
    },
    containerData: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerProgress:{
        flexDirection: "row",
        gap: 15,
    },
    textCreate: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#4EA8DE"
    },
    textCompleted: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#8284FA"
    },
    textNumberProgress: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#FFF"
    },
    containerEmpty: {
        paddingVertical: 48,
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 16,
    },
    containerTextEmpty: {
        alignItems: "center",
    },
    textTitleEmpty: {
        color: "#808080",
        fontWeight: "bold",
        fontSize: 14,
    },
    textSubtitleEmpty: {
        color: "#808080",
        fontSize: 14,
    },
    textNumberProgressFocused: {
        width: 25,
        height: 19,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333",
        borderRadius: 100,
    }
})