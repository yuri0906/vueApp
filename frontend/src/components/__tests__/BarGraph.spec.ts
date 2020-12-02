import { shallowMount } from '@vue/test-utils'
import BarGraph from '../BarGraph.vue'
const { dummyDataA } = require('@/dummy/dummyData.js')

describe('BarGraph.vue',()=>{
    test('コンポーネント描画テスト', () => {
        const wrapper = shallowMount(BarGraph,{
            propsData: {
                ranking: dummyDataA.data
            }
        });
        expect(wrapper.find('.bar-graph').exists()).toBeTruthy()
    })
})
