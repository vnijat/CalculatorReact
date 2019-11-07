import React, {Component} from 'react'
import {View, StyleSheet, Text, Button,TouchableOpacity} from 'react-native'   

export default class Calc extends Component {
  constructor(){
    super()
    this.state = {
      resultText:"",
      calCtext: ""
    }
    this.operations = ['Del','+', '-', '*', '/']

  }


operate(operation){

  switch(operation){
case 'Del':
  let text = this.state.resultText.split('')
text.pop()
this.setState({
  resultText:text.join('')
})
break
case '+':
case '-':
case '*':
case '/':
  const lastChar = this.state.resultText.split('').pop() 
  if (this.operations.indexOf(lastChar) > 0) return

if(this.state.text == "") return
this.setState ({
resultText: this.state.resultText + operation

})

  }
}
calculateResult() {
  const text = this.state.resultText
this.setState ({
calCtext:eval(text)
})
} 
validate(){
  const text = this.state.resultText
switch(text.slice(-1)){
  case '+':
  case '-':
  case '*':
  case '/':
    return false
}
return true
}

  buttonPressed(text){
if (text == '='){
  return this.validate() && this.calculateResult()


}
     
this.setState({
  resultText:this.state.resultText+text
})
  }
render() {  
let rows = []
let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9,], [".", 0, "="]]
for (let i = 0; i < 4; i++){
let row  = []
for (let j = 0; j < 3; j++){
  row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>
    )

} 

  rows.push(<View style={styles.row}>{row}</View>
    )
}
let ops = []
for (let i = 0; i < 5; i++){
  ops.push(
  <TouchableOpacity  style={styles.btn} onPress={() =>this.operate(this.operations[i])}><Text style={[styles.btntext,styles.white]}>{this.operations[i]}</Text></TouchableOpacity>
  )
}

return (
<View style={styles.container}>
  <View style={styles.result}>
<Text style = {styles.resultText}>{this.state.resultText}</Text>
  </View>
  <View style={styles.calculation}>
  <Text style = {styles.calculationText}>{this.state.calCtext}</Text>
  </View>
  <View style={styles.buttons}>
  <View style={styles.numbers}>
   {rows}
  </View>
  <View style={styles.operations}>
  {ops}
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
},
white:{
  color:"white"
},
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
  backgroundColor:'green',
  alignItems:'flex-end',
  justifyContent: 'center'
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