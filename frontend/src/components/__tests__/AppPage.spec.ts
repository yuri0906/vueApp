import { shallowMount } from '@vue/test-utils'
import AppPage from '../AppPage.vue'
import flushPromises from 'flush-promises'
const { dummyDataA } = require('@/dummy/dummyData.js')

jest.mock('@/server/methods', ()=>({
    sendParams : jest.fn((input)=>{
        return dummyDataA
    })  
}))

describe('AppPage.vue', ()=>{
    const wrapper = shallowMount(AppPage)
    
    test('コンポーネント描画テスト', () => {
        expect(wrapper.find('.app-page').exists()).toBeTruthy()
    })
    
    test('メソッドテスト', async() => {
        (wrapper.vm as any).fetchRankingData('test')
        await flushPromises()
        expect(wrapper.find('.result').exists()).toBeTruthy()
    })

})
