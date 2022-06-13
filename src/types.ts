interface ICTA {
    href : string,
    text: string
}

interface ICardItem {
    title: string,
    Svg : React.ComponentType<React.ComponentProps<'svg'>>,
    description : JSX.Element;
    ctas ?: ICTA[]

}

interface IIconButton {
    text : string,
    Svg : React.ComponentType<React.ComponentProps<'svg'>>,
    href : string,
    external: boolean
}