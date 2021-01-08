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
import CHAlert, {CHAlertModal} from "./CHAlertModal";





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

        CHAlert
            .show()
            .setTitleName("弹出框")
            .setTitleColor('#f0f')
            .setTitleSize(16)
            .setContentTitle("内容内容内容内容dfdfdffdfdsdfsddfsfdsfdsfsdfsdfddsdfnmndfmfdsfdsndfdf内容内容内容内容内容内容内容内容内容内容内容内容内容内容ddddd")
            .setContentColor('#f0f')
            .setContentSize(18)
            .setAlertBgColor('#fff')
            .setSureTitle("右边")
            .setCancelTitle("左边")

        CHAlert.sureCallBack(function () {
            console.log("----点击了-----")
            CHAlert.hide()
        })

        CHAlert.cancelCallBack(function () {

            CHAlert.hide()
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
                    // ref={(self)=>this.sureUrgeModel=self}
                    titleName={'温馨提示'}
                    callBack={()=>this.sureUrgeModelCallBack()}
                />
            </View>

        )
    }
}



export default App;
