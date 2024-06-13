import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#d1e4e0c0',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemToBuy: {
        color: '#1f5146',
        fontSize: 24,
        textDecorationLine: 'none'
    },
    itemBought: {
        color: '#1f5146',
        fontSize: 24,
        textDecorationLine: 'line-through'
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },
});