import { shallowMount } from '@vue/test-utils'
import AppPage from '../AppPage.vue'
import flushPromises from 'flush-promises'
const { dummyData } = require('@/dummy/dummyData.js')

jest.mock('@/server/methods', ()=>({
    sendParams : jest.fn((input)=>{
        return dummyData
    })  
}))

describe('AppPage.vue', ()=>{
    const wrapper = shallowMount(AppPage)
    
    test('コンポーネント描画テスト', () => {
        expect(wrapper.find('.app-page').exists()).toBeTruthy()
    })
    
    test('メソッドテスト', async() => {
        (wrapper.vm as any).receiveData('test')
        await flushPromises()
        expect(wrapper.find('.result').exists()).toBeTruthy()
    })

})
