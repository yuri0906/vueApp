import { shallowMount } from '@vue/test-utils'
import BarGraph from '../BarGraph.vue'

const array = [
    {word: "a", score: 100},
    {word: "b", score: 90},
    {word: "c", score: 80},
    {word: "d", score: 70},
    {word: "e", score: 60},
    {word: "f", score: 50},
    {word: "g", score: 40},
    {word: "h", score: 30},
    {word: "i", score: 20},
    {word: "j", score: 10},
    {word: "k", score: 0},
    {word: "l", score: 0},
]

describe('BarGraph.vue',()=>{
    test('コンポーネント描画テスト', () => {
        const wrapper = shallowMount(BarGraph,{
            propsData: {
                ranking: array
            }
        });
        expect(wrapper.find('.bar-graph').exists()).toBeTruthy()
    })
})
