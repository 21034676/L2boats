import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For boat icon

// Boat Component
const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.boatContainer}>
            {/* Boat Image */}
            <Image source={picture} style={styles.boatImage} />

            {/* Boat Details Section */}
            <View style={styles.boatDetails}>
                <Icon name="ship" size={30} color="#0077B6" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
                <Text style={styles.boatDescription}>{description}</Text>
            </View>
        </View>
    );
};

// Styling for the Boat component
const styles = StyleSheet.create({
    boatContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    boatImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
        resizeMode: 'cover',
    },
    boatDetails: {
        alignItems: 'center',
    },
    boatName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 5,
    },
    boatDescription: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
        paddingHorizontal: 10,
    },
    icon: {
        marginBottom: 10,
    },
});

export default Boat;
