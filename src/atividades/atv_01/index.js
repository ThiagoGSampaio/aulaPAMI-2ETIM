import { View, Text } from 'react-native';

import styles from './styles';

export default function Atividade1 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Introdução React Native</Text>
            <Text style={styles.texto}>Aula 01 React Native</Text>
        </View>
    );
}