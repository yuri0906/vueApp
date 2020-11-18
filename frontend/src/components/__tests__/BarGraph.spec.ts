import { shallowMount } from '@vue/test-utils'
import BarGraph from '../BarGraph.vue'
const { dummyData } = require('@/dummy/dummyData.js')

describe('BarGraph.vue',()=>{
    test('コンポーネント描画テスト', () => {
        const wrapper = shallowMount(BarGraph,{
            propsData: {
                ranking: dummyData.data
            }
        });
        expect(wrapper.find('.bar-graph').exists()).toBeTruthy()
    })
})
