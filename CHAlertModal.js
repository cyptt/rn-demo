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
import PropTypes from 'prop-types'
export const  ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

let alert;
export default {


    /**
     *  显示
     * @returns {default}
     */
    show:function () {
        alert.show()
        return this;
    },

    /**
     * 点击了确定按钮回调
     * @param callBack 回调的方法
     * @returns {default}
     */
    sureCallBack:function(callBack){

        alert.sureCallBack(callBack)
        return this;

    },

    /**
     * 取消了点击
     * @param callBack
     */
    cancelCallBack:function(callBack){
        alert.cancelCallBack(callBack)
        return this
    },

    /**
     * 设置提示文字
     * @returns {default}
     */
    setTitleName:function(titleName){
        alert.setTitleName(titleName)
        return this
    },

    /**
     * 设置title color
     * @param color
     * @returns {default}
     */
    setTitleColor:function(color){

        alert.setTitleColor(color)
        return this
    },
    /**
     * 设置title字体大小
     * @param size
     * @returns {default}
     */
    setTitleSize:function(size){

        alert.setTitleSize(size)
        return this
    },
    /**
     * 设置内容
     * @param contentTitle
     * @returns {default}
     */
    setContentTitle:function(contentTitle){

        alert.setContentTitle(contentTitle)
        return this

    },
    /**
     * 设置内容颜色
     * @param color
     * @returns {default}
     */
    setContentColor:function(color){
        alert.setContentColor(color)
        return this
    },
    /**
     * 设置内容大小
     * @param size
     * @returns {default}
     */
    setContentSize:function(size){

        alert.setContentSize(size)
        return this
    },
    /**
     * 设置弹出框背景颜色
     * @param color
     * @returns {default}
     */
    setAlertBgColor:function(color){
        alert.setAlertBgColor(color)
        return this
    },
    setSureTitle:function(title){

        alert.setSureTitle(title)
        return this
    },

    setCancelTitle:function(title){
        alert.setCancelTitle(title)
        return this
    },

    /**
     * 点击了隐藏按钮回调
     */
    hide:function () {
        alert.hide()
    },

}

export class CHAlertModal extends Component {
    static propTypes={
        titleName:PropTypes.string,     //提示title
        titleColor:PropTypes.string,     //提示title颜色
        titleSize:PropTypes.int,        //提示字体大小
        contentTitle:PropTypes.string   ,       //提示内容
        contentColor:PropTypes.string,      //设置内容颜色
        contentSize:PropTypes.int,           //设置content 字体大小
        isBlank:PropTypes.boolean  ,  // 点击空白是否关闭弹出框
        cancelTitle:PropTypes.string ,      //取消按钮内容
        sureTitle:PropTypes.string  ,       //确定按钮内容
        alertBgColor:PropTypes.string,     //alert背景颜色

    }
    constructor(props){
        super(props)
        this.state={
            isVisible:false,
            titleName:this.props.titleName?this.props.titleName:'温馨提示',
            titleColor:this.props.titleColor?this.props.titleColor:'#2F3335',
            titleSize:this.props.titleSize?this.props.titleSize:16,
            contentTitle:this.props.contentTitle?this.props.contentTitle:'',
            contentColor:this.props.contentColor?this.props.contentColor:'#000',
            contentSize:this.props.contentSize?this.props.contentSize:15,
            isBlank:this.props.isBlank?this.props.isBlank:false,
            cancelTitle:this.props.cancelTitle?this.props.cancelTitle:'取消',
            sureTitle:this.props.sureTitle?this.props.sureTitle:"确定",
            alertBgColor:this.props.alertBgColor?this.props.alertBgColor:'#fff',


            sureCallBack:null,
            cancelCallBack:null
        }


        alert = this;

    }

    show(){


        this.setState({
            isVisible:true,
        })
    }
    hide(){
        this.setState({
            isVisible:false,
            titleName:'温馨提示',
            contentTitle:'',
            isBlank:false,
            cancelTitle:'取消',
            sureTitle:"确定",
            titleColor:'#2F3335',
            titleSize:16,
            contentColor:'#000',
            contentSize:15,
            alertBgColor:'#fff'
        })
    }

    sureCallBack(callBack){


        this.setState({
            sureCallBack:callBack
        })

    }

    cancelCallBack(callBack){

        this.setState({
            cancelCallBack:callBack
        })
    }

    setTitleName(titleName){

        this.setState({
            titleName:titleName
        })
    }
    setTitleColor(color){
        this.setState({
            titleColor:color
        })
    }
    setTitleSize(size){

        this.setState({
            titleSize:size
        })
    }
    setContentTitle(contentTitle){
        console.log("------contentlengt-----",contentTitle.length)
        this.setState({
            contentTitle:contentTitle
        })
    }

    setContentColor(color){
        this.setState({
            contentColor:color
        })
    }
    setContentSize(size){
        this.setState({
            contentSize:size
        })
    }

    setAlertBgColor(color){
        this.setState({
            alertBgColor:color
        })
    }
    setSureTitle(title){
        this.setState({
            sureTitle:title
        })
    }
    setCancelTitle(title){
        this.setState({
            cancelTitle:title
        })
    }

    clickBlank(){
        console.log("---点击了-----")
       if (this.state.isBlank)  this.hide();
    }
    clickSureBtn(){

        // this.hide()
        // const {callBack} = this.props;

       if (this.state.sureCallBack) this.state.sureCallBack();

    }
    clickCancelBtn(){

        if (this.state.cancelCallBack) this.state.cancelCallBack()

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

                <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <View style={{marginLeft:25,marginRight:25,backgroundColor:this.state.alertBgColor,borderRadius:5}}>

                        <View style={{height:40,flexDirection:'row',backgroundColor:''}}>
                            <View style={{width:60}}></View>
                            <View style={{flex:1,alignItems:'center',height:40,justifyContent:'center'}}>
                                <Text style={{fontSize:this.state.titleSize,color:this.state.titleColor}}>{this.state.titleName}</Text>
                            </View>
                            <TouchableOpacity style={{width:60,backgroundColor:'',alignItems:'flex-end',marginRight:5,marginTop:5}}
                                              onPress={()=>this.hide()}
                            >
                            </TouchableOpacity>
                        </View>


                        <View style={{justifyContent:'center',backgroundColor:'',marginRight:5,marginLeft:5}}>

                                <View style={[{},this.state.contentTitle.length<=40?{height:80}:null]}>
                                    <Text style={{
                                        color:this.state.contentColor,
                                        fontSize:this.state.contentSize,
                                        textAlign:'justify',
                                        textAlignVertical:'auto'
                                    }}>
                                        {this.state.contentTitle}
                                    </Text>
                                </View>



                        </View>


                        {         <View style={{width:'100%',height:60,backgroundColor:'',flexDirection:'row'}}>


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
                        </View>}

                    </View>

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
