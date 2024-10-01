import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://assets.pinterest.com/ext/embed.html?id=622341242291693877" }} // Replace with the actual URL or local image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.editText}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="First Name"
          value="Aaron"
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value="Graham"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value="aarong@gmail.com"
          style={styles.input}
        />

        {/* Birth and Gender */}
        <TouchableOpacity style={styles.selectField}>
          <Text style={styles.selectText}>Birth</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectField}>
          <Text style={styles.selectText}>Gender</Text>
        </TouchableOpacity>

        {/* Change Password Button */}
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 18,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 5,
  },
  editText: {
    color: '#fff',
    fontSize: 12,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  selectField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  selectText: {
    color: '#555',
  },
  changePasswordButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  changePasswordText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
