import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const colors = {
    blu: '#016FF5',
    green: '#26C26A'
}
export default function App() {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={[colors.blu, colors.green]}
                style={styles.background}
            >
                <TouchableOpacity onPress={() => {
                }}>
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
                        style={styles.instagramButton}
                    >
                        <Text style={{color: 'white'}}>
                            SALDO
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['red', 'yellow', 'green']}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={styles.signUpButton}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    instagramButton: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
        position: 'relative',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpButton: {
        margin: 1,
        width: 200,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
