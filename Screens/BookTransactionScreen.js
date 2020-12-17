import React from 'react';
import { TextInput,Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions'

export default class TransactionScreen extends React.Component{
    constructor(){
    super();
    this.state={
    hasCameraPermissions: null,
    scanned: false,
    scannedData: '',
    buttonState: 'normal',
    scannedBookId:'',
    scannedStudentId:''
}
}

getCameraPermissions = async (id) =>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    
    this.setState({
      /*status === "granted" is true when user has granted permission
        status === "granted" is false when user has not granted the permission
      */
      hasCameraPermissions: status === "granted",
     buttonState: 'id',
     scanned: false
    });
  }
  
handleBarCodeScanned=async ({type,data})=>{
    this.setState({
        scanned:true,
        scannedData:data,

        
        buttonState:'normal'
    });
}
    
    render(){
const hasCameraPermissions=this.state.hasCameraPermissions
const scanned=this.state.scanned;
const buttonState=this.state.buttonState;
if(buttonState === "clicked" && hasCameraPermissions){
return(
<BarCodeScanner
            onBarCodeScanned={scanned 
                ? undefined 
                : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}/>

)
    }

    else if (buttonState==="normal"){
        return(
            <View style={design.d1}>

                <View>
                   <Image 
                   style={{
                    width:200,
                    height:200
                            }}

                            source={require("../assets/booklogo.jpg")}
                   />
                   <Text
                   style={{fontSize:40}}>
                       willi
                   </Text>
                    <TextInput style={design.inputBox}
                    placeholder="Student ID"
                    value={this.state.scannedStudentId}
                    />

                    <TouchableOpacity style={design.scanButton}
                    onPress={()=>{this.getCameraPermissions("Student ID")}}>
                  
                        <Text style= {design.d3}>
                            Scan
                        </Text>

                    </TouchableOpacity>

                </View>

                <View>

                    <TextInput  style={design.inputBox}
                    placeholder="Book ID"
                    value={this.state.scannedBookId}
                    />

                    <TouchableOpacity style={design.scanButton}
                    onPress={()=>{this.getCameraPermissions("Book ID")}}>

                        <Text style ={design.d3}>
                            Scan
                        </Text>
                        
                    </TouchableOpacity>

                </View>
                 <Text >
                    { hasCameraPermissions===true
                     ? this.state.scannedData
                     :"Request Camera Permission"}
                 </Text>

                <TouchableOpacity
                    onPress= {this.getCameraPermissions}
                    style={design.d2}>

                <Text style ={design.d3}>
                     Issue or return
                </Text>
                     
                </TouchableOpacity>

            </View>
        );
         }
    }
}
const design = StyleSheet.create({
    d1:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
        
    },
    d2:{
        justifyContent:'center',
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10,
        alignSelf:'center'
    },
    d3:{
        fontSize:20,
        color:'black'
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 4,
        borderRightWidth: 0,
        fontSize: 20
      },
      scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
      },
      buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
    
})