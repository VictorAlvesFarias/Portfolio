import { headers } from "next/dist/client/components/headers";
import {defaultLocale, languageIsValid} from '../../../i18n.config'

function useServerInter():any {
    const headersList =  headers();

    const internationalizationPath:any = headersList.get('x-url');

    return  languageIsValid(internationalizationPath)?internationalizationPath:defaultLocale
}

export default useServerInter

