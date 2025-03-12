import { defineStore } from 'pinia';

// 컴포저블함수와 동일하게 use로 시작하는 이름으로 정의하는것이 관례
export const useCounterStore = defineStore('counter', {
    // state 는 객체를 반환하는 함수
    state: () => ({
        counter: 1
    }),
    // computed의 getter처럼 동작
    getters: {
        doubleCount: (state) => state.counter * 2,
        // 화살표함수로 정의하면 this 를 통해서 현재의 스토어 인스턴스에 접근할 수 없다.
        doubleCountPlusOne() {
            return this.doubleCount + 1;
        }
    },
    actions: {
        // 화살표함수로 정의하면 this 를 통해서 현재의 스토어 인스턴스에 접근할 수 없다.
        increment() {
            // this 를 통해서 현재의 스토어 인스턴스에 접근
            this.counter++;
        }
    }
});