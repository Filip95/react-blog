import { format, formatDistance, formatRelative, subDays } from 'date-fns'
function useFormattedDate(str,outputFormat = 'yyyy-mm-dd HH:mm:ss'){
    if (!str) {
        return '';
    }
    return format(new Date(str),outputFormat)
    
}
            

export default useFormattedDate;