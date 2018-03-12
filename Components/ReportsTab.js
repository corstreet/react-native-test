import React from 'react';
import { ImageBackground } from 'react-native';
import { Tab, Content, Card, CardItem, Left, Text, Body } from 'native-base';

//FUNCTIONAL STATELESS COMPONENTS IMPROVE PERFORMANCE
const ReportsTab = ({ heading }) => {
    return(
      <Tab heading={ heading }>
        <ImageBackground
          source={{uri:'http://www.mobileswall.com/wp-content/uploads/2013/09/640-Bikini-Waves-l.jpg'}}
          style={{position: 'absolute',top:0,right:0,bottom:0,left:0}}
        >
          <Content>
            <Card>
              <CardItem>
                <Left><Text>Hello</Text></Left>
                <Body>
                  <Text>
                     This is just a basic card with some text to boot. Like it? Keep Scrolling...
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Tab>
    )
}
export default ReportsTab;


//CLASS APPROACH
// export default class ReportsTab extends React.Component {
//   render(){
//     return(
//       <Tab heading={this.props.heading}>
//         <Content>
//           <Card>
//             <CardItem>
//               <Left><Text>Hello</Text></Left>
//               <Body>
//                 <Text>
//                    This is just a basic card with some text to boot. Like it? Keep Scrolling...
//                 </Text>
//               </Body>
//             </CardItem>
//           </Card>
//         </Content>
//       </Tab>
//     )
//   }
// }