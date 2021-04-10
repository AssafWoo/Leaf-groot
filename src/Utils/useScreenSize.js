import {useMediaQuery} from 'react-responsive';

export const useScreenSize = () => {
    const isDekstop = useMediaQuery({minWidth: 1440});
    const isTablet = useMediaQuery({minWidth:1265});
    const isPhone = useMediaQuery({minWidth:800});

    if(isDekstop){
        return '3-cols'
    }
    if(isTablet) {
        return '2-cols'
    }
    if(isPhone) {
        return '1-cols'
    }

    return 'fullscreen'
}