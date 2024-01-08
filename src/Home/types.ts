export interface menuItemType {
    id: string,
    label: string,
    path: string,
    sub?: {
        id: string,
        displayName: string,
        link: string
    }[]
}