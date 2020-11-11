import { shallowMount } from '@vue/test-utils'
import InputWord from '../InputWord.vue'

describe('入力フォーム部分テスト',()=>{
    it('入力フォームが描画される', () => {
        const wrapper = shallowMount(InputWord);
        expect(wrapper.find('.input-word').exists()).toBe(true)
    })

    it('クリックすると入力テキストがemitされる', () => {
        const wrapper = shallowMount(InputWord);
        wrapper.setData({input: "テスト"});
        (wrapper.vm as any).setData();
        expect(wrapper.emitted().click).toEqual([['テスト']])
    })
})
