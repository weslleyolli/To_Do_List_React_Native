import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1E1E1E"
    },
    containerHeader: {
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D0D0D",
        paddingHorizontal: 24
    },
    containerMain:{
        position: "relative",
        marginHorizontal: 24,
        
    }, 
    textInput: {
        width: "100%",
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
    }
})