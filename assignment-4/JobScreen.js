
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import JobCard from './JobCard';

const JobScreen = () => {
  const featuredJobs = [
    { imageSource: require('./assets/fbbr.png'), title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { imageSource: require('./assets/gg.png'), title: 'Software Engineer', company: 'Google', salary: '$180,000', location: 'Accra, Ghana' },
  ];

  const popularJobs = [
    { imageSource: require('./assets/jricon.png'), title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { imageSource: require('./assets/pricon.png'), title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/fbpr.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/find.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/ig.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/fly.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/gg.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { imageSource: require('./assets/myicon.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Justine Addo</Text>
          <Text style={styles.userEmail}>justineaddo15@gmail.com</Text>
        </View>
        <Image source={require('./assets/myicon.png')} style={styles.profileImage} />
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
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobsContainer}>
        {featuredJobs.map((job, index) => (
          <JobCard
            key={index}
            imageSource={job.imageSource}
            title={job.title}
            company={job.company}
            salary={job.salary}
            location={job.location}
            isFeatured={true}
          />
        ))}
      </ScrollView>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      
      {popularJobs.map((job, index) => (
        <JobCard
          key={index}
          imageSource={job.imageSource}
          title={job.title}
          company={job.company}
          salary={job.salary}
          location={job.location}
          isFeatured={false}
        />
      ))}
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
});

export default JobScreen;
