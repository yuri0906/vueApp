import { shallowMount } from '@vue/test-utils'
import InputWord from '../InputWord.vue'

describe('InputWord.vue',()=>{
    const wrapper = shallowMount(InputWord);
    it('テキスト入力テスト',()=>{
        wrapper.find("word").setValue("プロテイン")
        wrapper.find("submit").trigger("click")
        
    })
})