import { User } from 'firebase/auth'
import { useUser } from './user'

export const afterAuthCheck = async (user: User | null) => {
    if (user) {

        const redirectUrl = useUser().redirectUrl.value
        useUser().redirectUrl.value = null
         useRouter().push(redirectUrl ?? '/dashboard')
    }
}

