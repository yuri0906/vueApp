import { shallowMount } from '@vue/test-utils'
import InputWord from '../InputWord.vue'

describe('ランキング表示テスト',()=>{
    it('入力フォームが描画される', () => {
        const wrapper = shallowMount(InputWord);
        expect(wrapper.find('.input-word').exists()).toBe(true)
    })
    /*
    it('データをセットすると、ランキングが描画される', () => {
        const wrapper = shallowMount(InputWord,{
            propsData: {
                
            }
        });
        expect(wrapper.find('.word-ranking').exists()).toBe(true)
    })*/
})
