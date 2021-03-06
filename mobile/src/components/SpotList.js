import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }){
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tech }
            })
           //console.log(response.data);  
            setSpots(response.data);
        
        }

        loadSpots();
    }, []);

    return (
    <View style={styles.container} >
        <Text style={styles.title}>Empresas que usam {tech}</Text>

    </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    }
});