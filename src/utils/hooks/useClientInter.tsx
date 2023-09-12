
import {defaultLocale,languageIsValid} from '../../../i18n.config.ts'
import { usePathname } from "next/navigation";

function useClientInter():any {
    const pathname = usePathname()

    return  languageIsValid(pathname.split("/")[1])?pathname.split("/")[1]:defaultLocale
}

export default useClientInter

