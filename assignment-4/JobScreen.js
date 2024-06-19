import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const JobScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Justine Addo</Text>
          <Text style={styles.userEmail}>justineaddo15@gmail.com</Text>
        </View>
        <Image 
    source={require('./assets/myicon.png')} 
    style={[styles.popularJobIcon, {width: 30, height: 30}]} 
  />
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          placeholderTextColor="#888"
        />
        <Icon name="options-outline" size={30} color="#888" style={styles.filterIcon} />
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity onPress={() => {  }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobsContainer}>
      <View style={styles.featuredJobCard}>
        <Image source={require('./assets/fbbr.png')} style={styles.featuredJobIcon} />
        <Text style={styles.featuredJobTitle}>Software Engineer</Text>
        <Text style={styles.featuredJobCompany}>Facebook</Text>
        <Text style={styles.featuredJobSalary}>$180,000</Text>
        <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
      </View>
      <View style={styles.featuredJobCard}>
        <Image source={require('./assets/gg.png')} style={styles.featuredJobIcon} />
        <Text style={styles.featuredJobTitle}>Software Engineer</Text>
        <Text style={styles.featuredJobCompany}>Google</Text>
        <Text style={styles.featuredJobSalary}>$180,000</Text>
        <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
      </View>
      </ScrollView>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => { /* Navigate to see all popular jobs */ }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.popularJobCard}>
  <Image 
    source={require('./assets/jricon.png')} 
    style={[styles.popularJobIcon, {width: 30, height: 30}]} 
  />
  <View>
    <Text style={styles.popularJobTitle}>Jr Executive</Text>
    <Text style={styles.popularJobCompany}>Burger King</Text>
  </View>
  <View style={styles.jobDetails}>
    <Text style={styles.popularJobSalary}>$96,000/y</Text>
    <Text style={styles.popularJobLocation}>Los Angeles, US</Text>
  </View>
</View>

      
<View style={styles.popularJobCard}>
  <Image 
    source={require('./assets/pricon.png')} 
    style={[styles.popularJobIcon, {width: 30, height: 30}]} 
  />
  <View>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.popularJobCompany}>Beats</Text>
        </View>
        <View style={styles.jobDetails}>
          <Text style={styles.popularJobSalary}>$84,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </View>
      
      <View style={styles.popularJobCard}>
  <Image 
    source={require('./assets/fbpr.png')} 
    style={[styles.popularJobIcon, {width: 30, height: 30}]} 
  />
  <View>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.popularJobCompany}>Facebook</Text>
        </View>
        <View style={styles.jobDetails}>
          <Text style={styles.popularJobSalary}>$86,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </View>
<View style={styles.popularJobCard}>
<Image 
  source={require('./assets/find.png')} 
  style={[styles.popularJobIcon, {width: 30, height: 30}]} 
/>
<View>
        <Text style={styles.popularJobTitle}>Product Manager</Text>
        <Text style={styles.popularJobCompany}>Facebook</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.popularJobSalary}>$86,000/y</Text>
        <Text style={styles.popularJobLocation}>Florida, US</Text>
      </View>
    </View>

    <View style={styles.popularJobCard}>
<Image 
  source={require('./assets/ig.png')} 
  style={[styles.popularJobIcon, {width: 30, height: 30}]} 
/>
<View>
        <Text style={styles.popularJobTitle}>Product Manager</Text>
        <Text style={styles.popularJobCompany}>Facebook</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.popularJobSalary}>$86,000/y</Text>
        <Text style={styles.popularJobLocation}>Florida, US</Text>
      </View>
    </View>

    <View style={styles.popularJobCard}>
<Image 
  source={require('./assets/fly.png')} 
  style={[styles.popularJobIcon, {width: 30, height: 30}]} 
/>
<View>
        <Text style={styles.popularJobTitle}>Product Manager</Text>
        <Text style={styles.popularJobCompany}>Facebook</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.popularJobSalary}>$86,000/y</Text>
        <Text style={styles.popularJobLocation}>Florida, US</Text>
      </View>
    </View>

    <View style={styles.popularJobCard}>
<Image 
  source={require('./assets/gg.png')} 
  style={[styles.popularJobIcon, {width: 30, height: 30}]} 
/>
<View>
        <Text style={styles.popularJobTitle}>Product Manager</Text>
        <Text style={styles.popularJobCompany}>Facebook</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.popularJobSalary}>$86,000/y</Text>
        <Text style={styles.popularJobLocation}>Florida, US</Text>
      </View>
    </View>

    <View style={styles.popularJobCard}>
<Image 
  source={require('./assets/myicon.png')} 
  style={[styles.popularJobIcon, {width: 30, height: 30}]} 
/>
<View>
        <Text style={styles.popularJobTitle}>Product Manager</Text>
        <Text style={styles.popularJobCompany}>Facebook</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.popularJobSalary}>$86,000/y</Text>
        <Text style={styles.popularJobLocation}>Florida, US</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#4A90E2',
  },
  featuredJobsContainer: {
    marginBottom: 20,
  },
  featuredJobCard: {
    width: 250,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
  },
  featuredJobIcon: {
    marginBottom: 10,
  },
  featuredJobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  featuredJobCompany: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  featuredJobSalary: {
    fontSize: 16,
    color: '#fff',
  },
  featuredJobLocation: {
    fontSize: 14,
    color: '#fff',
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  popularJobIcon: {
    marginRight: 10,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  popularJobCompany: {
    fontSize: 14,
    color: '#888',
  },
  jobDetails: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  popularJobSalary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  popularJobLocation: {
    fontSize: 12,
    color: '#888',
  },
});

export default JobScreen;

