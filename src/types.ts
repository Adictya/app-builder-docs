interface ICTA {
    href : string,
    text: string
}

interface ICardItem {
    title: string,
    icon : string,
    description : JSX.Element;
    ctas ?: ICTA[]

}

interface IIconButton {
    text : string,
    icon: string,
    href : string,
    external: boolean
}