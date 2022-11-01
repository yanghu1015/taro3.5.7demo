import { Component, PropsWithChildren } from 'react'
import {ScrollView, View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.scss'

export default class Index extends Component<PropsWithChildren> {
  state = {
    list: [
      {
        "stationId": "MA1FP022812281",
        "operatorId": "MA1FP0228",
        "stationName": "汇银广场能源补给站",
        "stationAddress": "上海市徐汇区广元西路10号B2层52-60号车位",
        "lng": 121.436426,
        "lat": 31.197736,
        "chargeLevel": "一般场站",
        "quickChargeNum": 0,
        "quickAvailableNum": 0,
        "slowChargeNum": 9,
        "slowAvailableNum": 0,
        "stationTel": "400-921-9000",
        "openTime": "00:00-23:59",
        "shortName": "安悦",
        "totalAvailableChargeNum": 0,
        "totalCostPrice": 1.9,
        "redBagFlag": null,
        "brandFlag": 0,
        "stationFlag": [
          "一般场站"
        ],
        "parkFee": "10元/小时(仅供参考，具体以场地方收取为准)",
        "distance": 452.43
      },
      {
        "stationId": "310105MA002TMQX0009",
        "operatorId": "MA002TMQX",
        "stationName": "上海徐汇区中城国际大厦B2电动汽车充电站",
        "stationAddress": "虹桥路500号（B2）",
        "lng": 121.429528,
        "lat": 31.192664,
        "chargeLevel": "一般场站",
        "quickChargeNum": 8,
        "quickAvailableNum": 0,
        "slowChargeNum": 0,
        "slowAvailableNum": 0,
        "stationTel": "4000185522",
        "openTime": "00:00:00-23:59:59",
        "shortName": "国家电网",
        "totalAvailableChargeNum": 0,
        "totalCostPrice": 1.1907999999999999,
        "redBagFlag": null,
        "brandFlag": 0,
        "stationFlag": [
          "一般场站"
        ],
        "parkFee": "10元/小时（参照停车场实际费用）",
        "distance": 493.86
      },
      {
        "stationId": "MA1FP022812262",
        "operatorId": "MA1FP0228",
        "stationName": "徐汇汇金百货能源补给站",
        "stationAddress": "上海市徐汇区肇嘉浜路1000号B3层136-142号车位",
        "lng": 121.439855,
        "lat": 31.195133,
        "chargeLevel": "一般场站",
        "quickChargeNum": 0,
        "quickAvailableNum": 0,
        "slowChargeNum": 5,
        "slowAvailableNum": 0,
        "stationTel": "400-921-9000",
        "openTime": "00:00-23:59",
        "shortName": "安悦",
        "totalAvailableChargeNum": 0,
        "totalCostPrice": 2.08,
        "redBagFlag": null,
        "brandFlag": 0,
        "stationFlag": [
          "一般场站"
        ],
        "parkFee": "10元/小时 (仅供参考，具体以场地方收取为准)",
        "distance": 528.05
      },
      {
        "stationId": "MA1FP022811454",
        "operatorId": "MA1FP0228",
        "stationName": "汇金百货（徐汇）",
        "stationAddress": "上海市徐汇区肇嘉浜路1000号",
        "lng": 121.44021,
        "lat": 31.194944,
        "chargeLevel": "一般场站",
        "quickChargeNum": 3,
        "quickAvailableNum": 0,
        "slowChargeNum": 12,
        "slowAvailableNum": 0,
        "stationTel": "400-921-9000",
        "openTime": "00:00-23:59",
        "shortName": "安悦",
        "totalAvailableChargeNum": 0,
        "totalCostPrice": 2.08,
        "redBagFlag": null,
        "brandFlag": 0,
        "stationFlag": [
          "一般场站"
        ],
        "parkFee": "(仅供参考，具体以场地方收取为准)",
        "distance": 556.79
      },
      {
        "stationId": "11-659",
        "operatorId": "320513112",
        "stationName": "飞雕国际大厦",
        "stationAddress": "上海市上海市徐汇区肇嘉浜路1065-6号飞雕国际大厦停车场(肇嘉浜路)",
        "lng": 121.44152,
        "lat": 31.1947,
        "chargeLevel": "一般场站",
        "quickChargeNum": 0,
        "quickAvailableNum": 0,
        "slowChargeNum": 10,
        "slowAvailableNum": 0,
        "stationTel": "4001800910",
        "openTime": "00:00-24:00",
        "shortName": "依威",
        "totalAvailableChargeNum": 0,
        "totalCostPrice": 2.06,
        "redBagFlag": null,
        "brandFlag": 0,
        "stationFlag": [
          "一般场站"
        ],
        "parkFee": "",
        "distance": 676.34
      }
    ]
  }

  render () {
    return (
      <View>
        <ScrollView key='site-list' className='list-content-box' scrollY onScrollToLower={()=>this.pageChange()}>
          <View style='padding-right:16px'>
            {this.state.list.map((item,index) => {
              console.log(item)
              return <View key={index}>我是插件scrollView</View>
            })}
          </View>

        </ScrollView>
      </View>
    )
  }
}
