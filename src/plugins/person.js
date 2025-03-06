export default {
  install(app, options) {
    const person = {
      name: '길동이',
      say() {
        alert(this.name)
      },
      ...options
    }

    // 애플리케이션 전체에서 사용하고싶을때(앱 인스턴스에 추가)
    // 컴포넌트 인스턴스는 setup 라이프사이클 이후에 생성되기때문에 script setup 에서 사용할 수 없다.
    // options api의 created 훅을 사용해야한다.
    // setup안에서 사용하고 싶으면 provide inject 를 사용해야한다.
    app.config.globalProperties.$person = person;

    app.provide('person', person);

  }
}