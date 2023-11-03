import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1E1E1E",
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
    containerData: {
        marginHorizontal: 28,
        flexDirection: "row",
        justifyContent: "space-between"
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
    }
})