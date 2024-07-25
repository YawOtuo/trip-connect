export interface Notification {
    id?: number
    subject:string 
    message: string | null 
    type: string 
    status?: string 
    created_at?: string 
    read?: boolean
    user?: number
}