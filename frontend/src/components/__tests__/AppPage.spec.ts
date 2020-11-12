import { shallowMount } from '@vue/test-utils'
import AppPage from '../AppPage.vue'
import WordRanking from '../WordRanking.vue'
import InputWord from "../InputWord.vue";

describe('AppPage.vue',()=>{
    const wrapper = shallowMount(AppPage)

    it('コンポーネント描画テスト', () => {
        expect(wrapper.find('.app-page').exists()).toBeTruthy()
    })
    
    //未完成
    it('イベントテスト', () => {
        wrapper.findComponent(InputWord).trigger('click',{input: "test"})
        expect((wrapper.vm as any).input).toBe('test')
        expect(wrapper.findComponent(WordRanking).exists()).toBeTruthy()
    })

})
