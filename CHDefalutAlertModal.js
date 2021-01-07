import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    Text,
    StatusBar,
    FlatList,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
export const  ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export default class CHDefalutAlertModal extends Component {

    constructor(props){
        super(props)
        this.state={
            isVisible:false,
            titleName:this.props.titleName?this.props.titleName:'温馨提示',
            contentTitle:this.props.contentTitle,
            isBlank:this.props.isBlank?this.props.isBlank:false,
            cancelTitle:this.props.cancelTitle?this.props.cancelTitle:'取消',
            sureTitle:this.props.sureTitle?this.props.sureTitle:"确定"

        }

    }

    show(){

        this.setState({
            isVisible:true,
        })
    }
    hide(){
        this.setState({
            isVisible:false,
        })
    }




    clickBlank(){

       if (this.state.isBlank)  this.hide();
    }
    clickSureBtn(){

        this.hide()
        const {callBack} = this.props;

       if (callBack) callBack();

    }
    clickCancelBtn(){
        this.hide()

        const {cancelBack} = this.props;
        if (cancelBack)  cancelBack();

    }
    render(){
        return(
            <Modal
                visible={this.state.isVisible}
                animationType='fade'
                transparent={true}
                style={{flex:1}}
                hardwareAccelerated={true}
            >

                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.2)'}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.clickBlank()}/>
                    <View  style={{width:ScreenWidth,flexDirection:'row'}}

                    >
                        <TouchableOpacity style={{flex:1}} onPress={()=>this.clickBlank()}/>
                        <View style={{width:270,height:156,backgroundColor:'#fff',borderRadius:5}}>

                            <View style={{height:40,flexDirection:'row'}}>
                                <View style={{width:60}}></View>
                                <View style={{flex:1,alignItems:'center',height:40,justifyContent:'center'}}>
                                    <Text style={{fontSize:16,color:'#2F3335'}}>{this.state.titleName}</Text>
                                </View>
                                <TouchableOpacity style={{width:60,backgroundColor:'',alignItems:'flex-end',marginRight:5,marginTop:5}}
                                                  onPress={()=>this.hide()}
                                >
                                </TouchableOpacity>
                            </View>


                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:'90%',height:'90%'}}>
                                    <Text>{this.state.contentTitle}</Text>
                                </View>
                            </View>

                            <View style={{width:'100%',height:60,backgroundColor:'',flexDirection:'row'}}>


                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity
                                        style={{justifyContent:'center',
                                            alignItems:'center',
                                            width:'80%',height:34,
                                            borderColor:'#D0D0D0',
                                            borderWidth:0.5,
                                            borderRadius:3
                                        }}
                                        onPress={()=>this.clickCancelBtn()}
                                    >
                                        <Text style={{color:'#8C8C8C',fontSize:15}}>{this.state.cancelTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity
                                        style={{justifyContent:'center',
                                            alignItems:'center',
                                            width:'80%',height:34,
                                            borderColor:'#D0D0D0',
                                            borderWidth:0.5,
                                            backgroundColor:'#148BFA',
                                            borderRadius:3
                                        }}
                                        onPress={()=>this.clickSureBtn()}
                                    >
                                        <Text style={{color:'#fff',fontSize:15}}>{this.state.sureTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={()=>this.clickBlank()}/>
                    </View>
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.clickBlank()}/>

                </View>

            </Modal>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#0ff',
        flex:1
    },
});
