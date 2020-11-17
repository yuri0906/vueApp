import { shallowMount } from '@vue/test-utils'
import AppPage from '../AppPage.vue'
import flushPromises from 'flush-promises'

const array = {data :[
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
]}

jest.mock('@/server/methods', ()=>({
    sendParams : jest.fn((input)=>{
        return array
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
