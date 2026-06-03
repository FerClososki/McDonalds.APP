import {
    View, Text, Image, StyleSheet, TouchableOpacity,
    SafeAreaView, StatusBar,
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.SafeArea}></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeArea: {

    },
    container: {

    },
    header: {

    },
    logo: {},
    brandName: {},
    welcomeSecion: {},
    title: {},
    subtitle: {},
    cardsRow: {},
    card: {},
    iconCircle: {},
    cardLabelPill: {},
    cardLabel: {},
})