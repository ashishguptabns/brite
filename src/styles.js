import { styled } from 'styled-components'


export const Container = styled.div`
    display: block;
    text-align: -webkit-center;
`

export const Products = styled.div`
    display: ruby;
`

export const Card = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
    background: #edebeb;
    border-radius: 10px;
    padding: 10px;
`

export const Desc = styled.p`
    margin: 6px 20px;
    height: ${props => (props.$numLines || 1) * 20}px;
    overflow: auto;
    font-size: 14px;
`

export const Price = styled.p`
    margin: 6px 20px;
    height: 20px;
    overflow: auto;
    font-weight: bold;
`

export const Title = styled.p`
    margin: 6px 20px;
    height: 20px;
    overflow: auto;
    font-weight: bold;
`

export const Img = styled.img`
    margin: 10px 20px;
    width: 120px;
    height: 120px;
    border-radius: 10px;
`

export const SearchInput = styled.input`
    border-radius: 4px;
    padding: 0 10px;
    margin-right: 20px;
`

export const SearchBox = styled.div`
    margin: 30px 0 10px 0;
    height: 30px;
    display: flex;
    justify-content: center;
`

export const Loading = styled.p`
    align-content: center;
`