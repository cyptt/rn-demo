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
import  CHAlertModal ,{Alert} from 'react-native-ch-alert'



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
      if (item==="defaultAlert"){

        this.defaultAlert()
      }


    }

    defaultAlert(){

        Alert
            .show()
            .setTitleName("弹出框")
            .setTitleColor('#f0f')
            .setTitleSize(16)
            .setContentTitle("这个内容这是内容")
            .setContentColor('rgb(51,51,51)')
            .setContentSize(14)
            .setAlertBgColor('#fff')
            .setCancelTitle("左边")
            .setIsBlankHide(false)
            .setCancelTitleColor('#f0f')
            .setCancelTitleSize(20)
            .setCancelBorderColor('#f0f')
            .setSureTitle("右边")
            .setSureTitleColor('#f0f')
            .setSureTitleSize(20)
            .setSureBgColor('#0ff')
            .setHideLeftBtn(true)


        Alert.sureCallBack(function () {
            console.log("----点击了-----")
            Alert.hide()
        })

        Alert.cancelCallBack(function () {

            Alert.hide()
            console.log("-------点击了取消----")
        })


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

    sureUrgeModelCallBack(){

    }
    render(){
        return(


            <View>
                <FlatList
                    data={Titles}
                    renderItem={this.itemView.bind(this)}

                />
              <CHLoading/>
                <CHAlertModal
                />
            </View>

        )
    }
}



export default App;
