// 함수형 디렉티브
// el : 디렉티브가 적용된 요소
// binding : 디렉티브에 전달된 값
function color(el, binding) {
  el.style.color = binding.value;
}

export default color