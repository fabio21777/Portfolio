import {useCustomFetch} from '@/api/UseFetchInterceptors'
import Login from '@/domains/auth/auth.ts'

export default class AuthAPI{

    static async login(login: Login){
        console.log('login')
        const {data, error, isFetching} = useCustomFetch('/login').post(login)
        return {data, error, isFetching}
    }

}