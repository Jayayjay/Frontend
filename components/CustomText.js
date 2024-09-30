import { StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const CustomText = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'custom-font': require('../fonts/Inter-ExtraBold.ttf'),
            });

            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        // Optionally show a loading indicator while font is loading
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...props.style, fontFamily: 'custom-font' }}>
            {props.children}
        </Text>
    );
};

export default CustomText;

const styles = StyleSheet.create({});