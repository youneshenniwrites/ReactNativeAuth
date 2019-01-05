import React from 'react'
import {
  Modal, 
  Text, 
  TouchableWithoutFeedback, 
  View,
  FlatList, 
  StyleSheet } from 'react-native'

  import {
    Container,
    Item,
    Input,
    Icon
  } from 'native-base'

import data from './countryCodes'

export default class PhoneInput extends React.Component {
  state = {
    modalVisible: false,
    phoneNumber: '',
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
    // console.log(value)
  }
  showModal() {
    this.setState({modalVisible: true})
    // console.log('Shown')
  }
  hideModal() {
    this.setState({modalVisible: false})
    // console.log('Hidden')
  }
  async getCode(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(obj => obj.name === country)[0].dial_code
      console.log(countryCode)
      this.setState({phoneNumber: countryCode})
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }
  render() {
    const countryData = data
    return (
      <Container style={styles.infoContainer}>
        <View style={styles.container}>
           {/* phone section  */}
          <Item rounded style={styles.itemStyle}>
            <Icon
              active
              name='call'
              style={styles.iconStyle}
            />
            <Icon
              active
              name='md-arrow-dropdown' 
              style={[styles.iconStyle, {marginLeft: 0}]}
              onPress={() => this.showModal()}
            />
            <Input
              style={styles.input}
              placeholder='+44766554433'
              placeholderTextColor='#adb4bc'
              keyboardType={'phone-pad'}
              returnKeyType='done'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={false}
              // onFocus={this.fadeOut.bind(this)}
              // onEndEditing={this.fadeIn.bind(this)}
              value={this.state.phoneNumber}
              onChangeText={(val) => this.onChangeText(
                'phoneNumber', val
              )}
            />
          </Item>
          {/* Modal for country code */}       
          <Modal
            animationType="slide" // fade
            transparent={false}
            visible={this.state.modalVisible}>
            <View style={{flex: 1}}>
              <View style={{flex: 7, marginTop: 80}}>
                <FlatList
                  data={countryData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={
                    ({item}) => 
                    <TouchableWithoutFeedback onPress={() => this.getCode(item.name)}>
                      <View style={styles.countryStyle}>
                        <Text style={styles.textStyle}>
                          {item.flag} {item.name} ({item.dial_code})
                        </Text>
                      </View>   
                    </TouchableWithoutFeedback>
                  }
                />
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5a52a5',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#aa73b7',
  },
  itemStyle: {
    marginBottom: 20,
  },
  iconStyle: {
    color: '#5a52a5',
    padding: 10,
    fontSize: 28,
    marginLeft: 15
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#667292',
    padding: 14,
    marginBottom: 20,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 500,
    bottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle : {
    padding: 5,
    fontSize: 18
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#99ff',
    borderBottomColor: '#211f',
    borderBottomWidth: 0.5,
    padding: 12,
  },
})



