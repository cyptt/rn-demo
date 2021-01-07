/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Modal,
    FlatList
} from 'react-native';


import  CHLoading ,{Loading} from 'react-native-ch-loading'





let Titles = ['loading','defaultAlert']

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }




    itemClickSelf=({item,index})=>{

        console.log("------item",item)
      if (item==='loading'){

        this.showLoading()
      }
      if (item==='defaultAlert'){
        this.defaultAlert()
      }


    }

    defaultAlert(){
    
    }
    /**
     *  显示loading
     */
    showLoading(){

        Loading.show("登录成功")
            .setOffSetCenter(100)
            .setBgColor("#ff0")
            .setLoadColor('#F01')
            .setTextColor("#f0f")
            .setTextSize(20)
            .setIndicatorSize('large')

        setTimeout(function () {

            Loading.hide()

        },3000)
    }

    itemView({item,index}){

      return(
          <TouchableOpacity
              style={{height:40,backgroundColor:'#rgb(180,180,180)'}}
              onPress={()=>this.itemClickSelf({item,index})}
          >
              <Text style={{flex:1}}>{item}</Text>

              <View style={{width:'100%',height:1,backgroundColor:'#f0f',marginBottom:0}}></View>

          </TouchableOpacity>

      )
    }
    render(){
        return(


            <View>
                <FlatList
                    data={Titles}
                    renderItem={this.itemView.bind(this)}

                />
              <CHLoading/>
            </View>

        )
    }
}



export default App;
