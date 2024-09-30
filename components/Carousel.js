import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, Dimensions } from "react-native";

const Carousel = () => {
    const screenwidth = Dimensions.get("window").width;
    const carouseldata = [
        { id: "01", image: require("../assets/images/carousel1.jpeg") },
        { id: "04", image: require("../assets/images/carousel4.jpeg") },
        { id: "05", image: require("../assets/images/carousel3.jpeg") },
    ];

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image 
                    source={item.image} 
                    style={{ height: 100, width: screenwidth, borderRadius:0 }} 
                />
            </View>
        );
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenwidth);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = currentIndex + 1 >= carouseldata.length ? 0 : currentIndex + 1;
            flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
            setCurrentIndex(nextIndex);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const renderDotIndicators = () => {
        return carouseldata.map((dot, index) => {
            return (
                <View 
                    key={index}
                    style={{
                        backgroundColor: currentIndex === index ? '#111337' : 'gray',
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        marginHorizontal: 6
                    }}
                />
            );
        });
    };

    return (
        <View>
            <FlatList 
                data={carouseldata} 
                keyExtractor={(item) => item.id}
                renderItem={renderItem} 
                horizontal={true} 
                pagingEnabled={true} 
                onScroll={handleScroll}
                ref={flatListRef}
                showsHorizontalScrollIndicator={false}
            />
            <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginTop: 5
                }}
            >
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({});
