import { computed } from 'vue'

export function useRelativeTime(dateString: string) {
  return computed(() => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 0) return 'Baru saja'
    
    if (diffInSeconds < 60) return 'Baru saja'
    
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) return diffInMinutes + ' menit lalu'
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return diffInHours + ' Jam lalu'
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return diffInDays + ' hari lalu'
    
    const diffInWeeks = Math.floor(diffInDays / 7)
    if (diffInWeeks < 4) return diffInWeeks + ' minggu lalu'
    
    const diffInMonths = Math.floor(diffInDays / 30)
    if (diffInMonths < 12) return diffInMonths + ' bulan lalu'
    
    const diffInYears = Math.floor(diffInDays / 365)
    return diffInYears + ' tahun lalu'
  })
}
