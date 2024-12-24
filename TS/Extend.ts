interface Color{
    color : string
}
interface BorderColor extends Color
{
    border:number,
}

type BColor = Color & {
    border:number;
}
