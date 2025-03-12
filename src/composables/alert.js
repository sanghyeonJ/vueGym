// 컴포저블 함수
// 컴포저블 함수는 컴포넌트 내부에서 사용되는 함수를 외부로 분리하기 위해 사용
// 여러 컴포넌트에서 공통으로 사용되는 함수를 컴포저블 함수로 분리하여 재사용 가능

import { ref } from 'vue';


// const alerts = ref([]);
import { useAlertStore } from '@/store/alert';
import { storeToRefs } from 'pinia';

export function useAlert() {

  //const alerts = ref([]);
  // const vAlert = (message, type = 'error') => {
  //   alerts.value.push({message, type});
  //   setTimeout(() => {
  //     alerts.value.shift();
  //   }, 2000);
  // }

  // const vSuccess = (message) => vAlert(message, 'success');


  const {alerts} = storeToRefs(useAlertStore());
  const {vAlert, vSuccess} = useAlertStore();

  return {
    alerts,
    vAlert,
    vSuccess
  }
}

