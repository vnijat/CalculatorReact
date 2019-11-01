import React, {Component} from 'react'
import {View, StyleSheet, Text, Button,TouchableOpacity} from 'react-native'   

export default class Calc extends Component {
  constructor(){
    super()
    this.state = {}
  }
render() {
let rows = []
let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9,], [0, 0, "="]]
for (let i = 0; i < 4; i++){
let row  = []
for (let j = 0; j < 3; j++){
  row.push(<TouchableOpacity  style={styles.btn}><Text style={styles.btntext}>{nums[i][0]}</Text></TouchableOpacity>
    )

} 

  rows.push(<View style={styles.row}>{row}</View>
    )
}
let operations = ['+', '-', '*', '/']



return (
<View style={styles.container}>
  <View style={styles.result}>
<Text style = {styles.resultText}>11x11</Text>
  </View>
  <View style={styles.calculation}>
  <Text style = {styles.calculationText}>121</Text>
  </View>
  <View style={styles.buttons}>
  <View style={styles.numbers}>
   {rows}
  </View>
  <View style={styles.operations}>
  <Button title="+" />
  <Button title="+" />
  <Button title="+" />
  <Button title="+" />
  </View>
  </View>
  </View>
)
}

}
const styles = StyleSheet.create({
container: {
  flex:1
},
btntext:{
  fontSize:30 
},
btn:{
  flex:1,
  alignItems:"center",
  alignSelf:"stretch",
  justifyContent:"center"
}
,
resultText:{
  fontSize:30,
  color:'white'
},
calculationText:{
fontSize:24,
color:'white'
},
row:{
  flexDirection:'row',
  flex:1,
  justifyContent:'space-around',
  alignItems:'center'
},
result: {
  flex:2,
  backgroundColor: 'red',
  justifyContent:'center',
  alignItems:'flex-end'
},
calculation:{
  flex:1,
  backgroundColor:'green'
},
buttons:{
  flex:7,
  flexDirection:'row'
},
numbers:{
  flex:3,
  backgroundColor:'yellow'
},
operations:{
  flex:1,
  justifyContent:'space-around',
  alignItems:'stretch',
  backgroundColor:'black'
}
})