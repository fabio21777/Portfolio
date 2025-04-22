import {useCustomFetch} from '@/api/UseFetchInterceptors'
import type Login from '@/domains/auth/auth'

export default class AuthAPI{

    static async login(login: Login){
        const {data, error, isFetching} = useCustomFetch('/login').post(login)
        return {data, error, isFetching}
    }

}