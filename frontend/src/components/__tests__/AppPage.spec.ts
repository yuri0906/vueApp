import { shallowMount } from '@vue/test-utils'
import AppPage from '../AppPage.vue'
import flushPromises from 'flush-promises'
import WordRanking from '../WordRanking.vue'
jest.mock('axios')

describe('AppPage.vue',()=>{
    const wrapper = shallowMount(AppPage)

    test('コンポーネント描画テスト', () => {
        expect(wrapper.find('.app-page').exists()).toBeTruthy()
    })
    
    //未完成
    test('イベントテスト', async() => {
        (wrapper.vm as any).receiveData('テスト').then(()=>{
            expect(wrapper.findComponent(WordRanking).exists()).toBeTruthy()
        })
        
    })
})
