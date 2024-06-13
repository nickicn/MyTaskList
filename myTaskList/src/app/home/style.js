import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aed8cfc0',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1f5146',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#aed8cfc0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    inputContainer: {
        backgroundColor: '#aed8cf',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    iconContainer: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: '#aed8cf',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});