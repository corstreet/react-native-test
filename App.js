import React from 'react';
import { ActivityIndicator, ScrollView, View, Image, DatePickerIOS, Modal } from 'react-native';
import { Container,
         Header,
         Footer,
         FooterTab,
         Tab,
         Tabs,
         TabHeading,
         Content,
         H3,
         Card,
         CardItem,
         Body,
         Text,
         Left,
         Right,
         Button,
         Icon,
         Title } from 'native-base';

//COMPONENTS
import CurrentTab from './Components/CurrentTab';
import ReportsTab from './Components/ReportsTab';
import ForecastTab from './Components/ForecastTab';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate : new Date(),
      modalVisible: false
    }

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  openModal(){
    this.setState({modalVisible: true});
  }

  closeModal(){
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>OB</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-star' />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <CurrentTab heading="Current" />
          <ReportsTab heading="Reports" />
          <ForecastTab heading="Forecast" />
        </Tabs>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}





//FIRST TIME
// <ScrollView>
//   <View style={styles.container}>
//     <Image
//       style={styles.image}
//       source={{uri: 'https://s3.amazonaws.com/freebiesupply/large/2x/philadelphia-eagles-logo-font.png'}}
//     />
//     <Text style={styles.text} >2018 NFL Champions!</Text>
//     <Text style={styles.text} >When will everyone jump on the bandwagon?</Text>
//     <DatePickerIOS
//       date={this.state.chosenDate}
//       onDateChange={this.setDate}
//     />
//     <Text style={styles.text} >Shake your phone to open the developer menu.</Text>
//   </View>
//   <View style={[styles.container, styles.newView]}>
//     <Text style={styles.text} >New View Container</Text>
//     <Button onPress={() => this.openModal()} title="open modal" />
//   </View>
//   <View style={styles.container} >
//     <ActivityIndicator size="large" color="#0000ff" />
//   </View>
//   <Modal
//     visible={this.state.modalVisible}
//     animationType={'slide'}
//     onRequestClose={() => this.closeModal()}
//   >
//     <View style={styles.container}>
//       <Button onPress={() => this.closeModal()} title="close modal" />
//     </View>
//   </Modal>
// </ScrollView>
