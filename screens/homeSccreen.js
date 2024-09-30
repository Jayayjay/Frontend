import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Tabs from '../Navigation/tabs'
import CustomText from '../components/CustomText'
import Carousel from '../components/Carousel'

const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor='#111337'/>
      <View>
        <View style={styles.profile}>
          <View style={styles.userProfile}>
            <TouchableOpacity>
              <Image
                style={{
                  height: 70,
                  width: 70,
                }}
                source={require('../assets/images/profileicon.png')}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 0, paddingTop:20}}>
              <CustomText style={{fontSize:19}}>
                Hi, John Doe
              </CustomText>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.userSettings}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginRight:15,
                }}
                source={require('../assets/images/settings.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

          <View style={styles.balanceContainer}>
            
          {/* <View style = {styles.profileContainer}>
                <Image style={styles.profileicon} source={require('../assets/images/profileicon.png')}
                />
                <View style={styles.salutation}>
                  <Text style={styles.greeting}>
                    Good Day
                  </Text>
                  <Text style={styles.profilename}>
                    SAM SMITH
                  </Text>
              </View>
              <View style={styles.settings}>
                  <Image style={styles.settings} source = {require('../assets/images/settingsicon.png')}/>
              </View>
        </View> */}
          <Text style={styles.balanceText}>Balance:</Text>
          <Text style={styles.balanceAmount}>₦ 500,000.00</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                style = {{
                  height:30,
                  width:30,
                }}
                source={require('../assets/images/add.png')}
              />
               
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
            <Image
                style = {{
                  height:30,
                  width:30,
                }}
                source={require('../assets/images/exchange.png')}
              />
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
            <Image
                style = {{
                  height:30,
                  width:30,
                }}
                source={require('../assets/images/send.png')}
              />
              
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.carousel}>
            <Carousel/>
        </View>
        <ScrollView style={styles.quickAccessContainer}>
          <CustomText style={styles.quickAccessTitle}>Quick Access:</CustomText>
          <View style={styles.quickAccessGrid}>
              <TouchableOpacity style={styles.quickAccessButton}>
                <Image style={styles.icons} source={require('../assets/images/phoneicon.png')}/>
                  <Text style={styles.buttonText}>Airtime</Text>
              </TouchableOpacity>
            <View >
                <TouchableOpacity style={styles.quickAccessButton}>
                  <Image style={styles.icons} source={require('../assets/images/dataicon.png')}/>
                    <Text style={styles.buttonText}>Data </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Image style={styles.icons} source={require('../assets/images/cableicon.png')}/>
              <Text style={styles.buttonText}>Cable TV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessButton}>
            <Image style={styles.icons} source={require('../assets/images/electricityicon.png')}/>
              <Text style={styles.buttonText}>Electricity</Text>
            </TouchableOpacity>
          </View>
        
        </ScrollView>
      </View>
      <View style={styles.transaction}>
      <ScrollView style={styles.transactionContainer}>
        <CustomText style={styles.transactionTitle}>Transaction</CustomText>
        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>Received from John</Text>
          <Text style={styles.transactionAmount}>+ 2,000.00</Text>
        </View>
        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>Sent to John</Text>
          <Text style={{
            fontSize:12,
            color:'#e32f45'
          }}>- 2,000.00</Text>
        </View>
      </ScrollView>
      
      </View>   
  </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    flexDirection: 'row',         // Align items in a row
    justifyContent: 'space-between', // Space between the user profile and settings icon
    alignItems: 'center',         // Align items vertically in the center                  // Add some padding if needed
  },
  userProfile: {
    flexDirection: 'row',         // Align image and text in a row
    alignItems: 'center',         // Center items vertically
  },
  userSettings: {
    paddingTop:2
  },
  balanceContainer: {
    backgroundColor: '#111337',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius:20,
    margin:10,
    marginTop: 1
  },
  balanceText: {
    color: '#fff',
    fontSize: 18,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    borderRadius:15,
  },
  actionButtons: {
    flexDirection: 'row',
    marginVertical: 0,
    
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize:10
  },
  quickAccessContainer: {
    margin: 20,
  },
  quickAccessTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor:'#11133A3D',
    padding :10,
    borderRadius:20,
  },
  quickAccessButton: {
    backgroundColor: '#111337',
    height:81,
    width:81,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'flex-start',
   
  },
  transaction:{
    padding:20,
    color:'#000'
  },
  transactionContainer: {
    margin: 5,
    marginTop: 0,
  },
  transactionTitle: {
    fontSize: 14,
    marginBottom: 10,
    
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: .8,
    
    borderBottomColor: '#dcdcdc',
    borderRadius:15,
    color:"#000"
  },
  transactionText: {
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 12,
    color: 'green',
  },
  carousel:{
    padding:10
  },
  icons :{
    height: 30,
    width:30
  }

})