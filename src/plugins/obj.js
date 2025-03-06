const objPlugins = {
  // 플러그인은 두가지의 매개변수를 받는다.
  // 첫번째 매개변수는 Vue 애플리케이션 인스턴스
  // 두번째 매개변수는 옵션 객체
  install(app, options) {
    console.log('app', app);
    console.log('options', options);

    // app.component() 메서드를 활용해서 전역 컴포넌트 등록
    // app.config.globalProperties 객체를 활용해서 전역 애플리케이션 인스턴스 속성 추가
    // app.directive() 메서드를 활용해서 커스텀 디렉티브 등록
    // app.provide() 리소스를 자식컴포넌트에서 사용할수 있도록 제공


  }
}

export default objPlugins;
