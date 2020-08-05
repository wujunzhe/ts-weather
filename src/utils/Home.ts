import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HomeMixin extends Vue {
    msg = '哈哈'
    count = 1
    get cmsg() {
        return this.msg + '嘿嘿'
    }
    add() {
        this.count += 1
    }
}
