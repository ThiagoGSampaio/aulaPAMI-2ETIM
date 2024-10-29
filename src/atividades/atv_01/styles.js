import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 8,
    },

    titulo:{
        //fontSize: 20,
        fontSize: RFValue(22),
        fontWeight: 'bold',
        color: 'black',
        marginTop: 16,
    },

    texto:{
        //fontSize: 20,
        fontSize: RFValue(22),
        fontWeight: 'bold',
        color: 'red',
        marginTop: 16,
    },
});

export default styles