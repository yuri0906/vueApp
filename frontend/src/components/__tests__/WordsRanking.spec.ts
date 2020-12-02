import { shallowMount } from '@vue/test-utils'
import WordsRanking from '../WordsRanking.vue'
const { dummyDataA, dummyDataB } = require('@/dummy/dummyData.js')

describe('WordsRanking.vue',()=>{
    test('コンポーネント描画テスト①', () => {
        const wrapper = shallowMount(WordsRanking,{
            propsData: {
                ranking: dummyDataA.data
            }
        });
        expect(wrapper.find('.words-ranking').exists()).toBeTruthy()
    })

    test('コンポーネント描画テスト②', () => {
        const wrapper = shallowMount(WordsRanking,{
            propsData: {
                ranking: dummyDataB.data
            }
        });
        expect(wrapper.find('.words-ranking').exists()).toBeTruthy()
    })
})
