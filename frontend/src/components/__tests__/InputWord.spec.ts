import { shallowMount } from '@vue/test-utils'
import InputWord from '../InputWord.vue'

describe('InputWord.vue',()=>{
    const wrapper = shallowMount(InputWord);

    test('コンポーネント描画テスト', () => {
        expect(wrapper.find('.input-word').exists()).toBeTruthy()
    })

    test('クリックイベントテスト', () => {
        wrapper.setData({input: "テスト"});
        (wrapper.vm as any).setData();
        expect(wrapper.emitted().click).toEqual([['テスト']])
    })
})