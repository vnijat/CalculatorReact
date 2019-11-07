import React, {Component} from 'react'
import {View, StyleSheet, Text, Button,TouchableOpacity,Image} from 'react-native'   

export default class Calc extends Component {
  constructor(){
    super()
    this.state = {
      resultText:"",
      calCtext: ""
    }
    this.operations = ['⌫','+', '-', '*', '/']

  }


operate(operation){

  switch(operation){
case '⌫':
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
  row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>
    )

} 

  rows.push(<View  style={styles.row}>{row}</View>
    )
}
let ops = []
for (let i = 0; i < 5; i++){
  ops.push(
  <TouchableOpacity  style={styles.btn} key={this.operations[i]} onPress={() =>this.operate(this.operations[i])}><Text style={[styles.btntext,styles.white]}>{this.operations[i]}</Text></TouchableOpacity>
  )
}

return (
<View style={styles.container}>
  <View style = {styles.calcname}>
  <Image
          style={styles.nimage}
          source={{uri: 'data:image/png;base64,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'}}
        />

  </View>
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
nimage: {
  width: "100%",
  height: "100%",
  resizeMode: 'cover'
},
calcname: {
flex:1,
backgroundColor:"#83c3b3",
justifyContent: 'center',
alignItems:'center',
alignContent:"center"
},
btntext:{
  fontSize:30 ,
  color: '#79afa1'
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
  color:'#636363'
},
calculationText:{
fontSize:26,
color:'#83c3b3'
},
row:{
  flexDirection:'row',
  flex:1,
  justifyContent:'space-around',
  alignItems:'center'
},
result: {
  flex:2,
  backgroundColor: '#f7f7f7',
  justifyContent:'center',
  alignItems:'flex-end'
},
calculation:{
  flex:1,
  backgroundColor:'#f7f7f7',
  alignItems:'flex-end',
  justifyContent: 'center'
},
buttons:{
  flex:7,
  flexDirection:'row'
},
numbers:{
  flex:3,
  backgroundColor:'#e6e6e6'
},
operations:{
  flex:1,
  justifyContent:'space-around',
  alignItems:'stretch',
  backgroundColor:'#83c3b3'
}
})