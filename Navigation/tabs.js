import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeSccreen';
import profileScreen from '../screens/profileScreen';
import transactionHistoryScreen from '../screens/transactionHistoryScreen';
import CryptoConverterScreen from '../screens/converterScreen';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style = {{
        top: -20,
        alignItems:'center',
        justifyContent: 'center',
        ...style.shadow
    }}
    onPress={onPress}
    >
        <View style = {{
           width:70,
           height:70,
           borderRadius:35,
           backgroundColor:'#111337' 
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    color:'#fff',
                    backgroundColor: '#fff',
                    height: 60,
                    borderRadius: 15,
                    ...style.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options= {{tabBarIcon:({focused}) => 
                    (
                        <View>
                            <Image
                                    source={require('../assets/images/homeicon.png')}
                                    resizeMode='contain'
                                    style ={{
                                        width: 35,
                                        height:35,
                                        
                                    }}
                                />
                        </View>
                    )
                    }}
            />
            <Tab.Screen name="Business" component={BusinessScreen} 
            options= {{tabBarIcon:({focused}) => 
            (
                <View>
                    <Image
                            source={require('../assets/images/businessicon.png')}
                            resizeMode='contain'
                            style ={{
                                width: 35,
                                height:35,
                                
                            }}
                        />
                </View>
            )
            }}/>
            <Tab.Screen name="Send" component={CryptoConverterScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/images/sendicon.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height:35,
                            tintColor:"#fff",

                        }}
                        />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
            }} 
            />
            <Tab.Screen name="Cards" component={transactionHistoryScreen}
                options= {{tabBarIcon:({focused}) => 
                    (
                        <View>
                            <Image
                                    source={require('../assets/images/shoppingicon.png')}
                                    resizeMode='contain'
                                    style ={{
                                        width: 35,
                                        height:35,
                                        
                                    }}
                                />
                        </View>
                    )
                    }}
            />
            <Tab.Screen name="Bookmark" component={profileScreen} 
                options= {{tabBarIcon:({focused}) => 
                    (
                        <View>
                            <Image
                                    source={require('../assets/images/educationicon.png')}
                                    resizeMode='contain'
                                    style ={{
                                        width: 35,
                                        height:35,
                                        
                                    }}
                                />
                        </View>
                    )
                    }}
            />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow:{
        shadowColor:"#7F5DF0",
        shadowOffset: {
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
})

export default Tabs;
