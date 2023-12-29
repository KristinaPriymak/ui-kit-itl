export type NavigationMenuListProps = {
    navigationItems: {
        isSubMenu?: boolean
        trigger: string
        content?: {
            href: string
            text: string
            description: string
        }[],
        href?: string
    }[],
}