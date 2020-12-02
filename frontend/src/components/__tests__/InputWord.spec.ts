import { shallowMount } from '@vue/test-utils'
import InputWord from '../InputWord.vue'

describe('InputWord.vue',()=>{
    const wrapper = shallowMount(InputWord);

    test('コンポーネント描画テスト', () => {
        expect(wrapper.find('.input-word').exists()).toBeTruthy()
    })

    test('イベントテスト', () => {
        wrapper.setData({input: "テスト"});
        (wrapper.vm as any).emitClick();
        expect(wrapper.emitted().click).toEqual([['テスト']])
    })
})