import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Tab, Content, H3 } from 'native-base';

import ForecastCard from './ForecastCard';

export default class ForecastTab extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
          <Tab style={styles.forecastView} heading={this.props.heading} >
            <ImageBackground
				source={{uri:'https://www.paperstreet.com/blog/wp-content/uploads/2016/04/iStock_000080733521_Double-1024x683.jpg'}}
				style={{width:400,height:'100%'}}
            >
	            <Content>
	              <H3>South San Diego</H3>
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	              <ForecastCard
	              	item1={{ text: 'Very Good', icon: 'ios-thermometer-outline' }}
	              	item2={{ text: 'Head High', icon: 'ios-sunny' }}
	              	item3={{ text: 'Fair', icon: 'ios-partly-sunny' }}
	              	item4={{ text: 'Good', icon: 'ios-thunderstorm-outline' }}
	              />
	            </Content>
            </ImageBackground>
          </Tab>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  image: {
    height: 75,
    width: 145,
    alignSelf: 'center',
  },
  forecastView: {
    paddingTop: 10,
  },
});



