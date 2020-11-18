import { shallowMount } from '@vue/test-utils'
import WordRanking from '../WordRanking.vue'
const { dummyData } = require('@/dummy/dummyData.js')

describe('WordRanking.vue',()=>{
    test('コンポーネント描画テスト', () => {
        const wrapper = shallowMount(WordRanking,{
            propsData: {
                ranking: dummyData.data
            }
        });
        expect(wrapper.find('.word-ranking').exists()).toBeTruthy()
    })
})
