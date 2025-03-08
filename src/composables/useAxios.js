import axios from 'axios';
import { ref, unref, watchEffect, isRef } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const defaultConfig = {
    method: 'get'
}
const defaultOptions = {
    immediate: true
}

export const useAxios = (url, config = {}, options = {}) => {
    const response = ref(null);
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    // config.params는 ref 객체이기 때문에 unref 함수를 사용하여 값을 가져온다.
    const { params } = config;
    const { onSuccess, onError, immediate } = { ...defaultOptions, ...options };

    const execute = (body) => {
        data.value = null;
        error.value = null;
        loading.value = true;
        axios(url, {
            ...defaultConfig,
            ...config,
            params: unref(params),
            data: typeof body === 'object' ? body : {}
        })
        .then((res) => {
            response.value = res
            data.value = res.data;
            if(onSuccess){
                onSuccess(res);
            }
        }).catch((err) => {
            error.value = err;
            if(onError){
                onError(err);
            }
        }).finally(() => {
            loading.value = false;
        });

    }

    if(isRef(params)){
        watchEffect(execute);
    } else {
        if(immediate){
            execute();
        }
    }
    return { data, error, loading, response, execute };

}