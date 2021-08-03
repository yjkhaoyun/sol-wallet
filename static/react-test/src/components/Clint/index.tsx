import React, { Component } from 'react'
import Heard from '../Heard'
import uni from 'uni-webview-lib'

export default class Clint extends Component {
  
    str:string = '新的组件'
    render() {
      window.addEventListener('message', function(event) {
        console.log(this.window.location.search)  
        //console.log(event.currentTarget.location.search)
      })
        
        console.log('打印uni的值',uni)
        document.addEventListener('UniAppJSBridgeReady', function() {
            //向uniapp发送消息 uni.postMessage 中的参数格式，必须是 data: {}。也就是说，传递的消息信息必须在 data 这个对象中。
            uni.postMessage({
              data: {
                action: 'message'
              }
            });
        
            uni.getEnv(function(res: any) {
                console.log('当前环境：' + JSON.stringify(res));
            });
          });
          

   
        return (
            <div>
                {this.str}
                <Heard/>
            </div>
        )
    }
}




