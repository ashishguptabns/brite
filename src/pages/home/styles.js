import { styled } from 'styled-components'

export const Container = styled.div`
    display: block;
`

export const ChartContainer = styled.div`
    display: flex;
    margin: 10px 30px;
    @media (max-width: 700px) {
        display: block;
    }
`

export const Chart = styled.div`
    width: 100%;
    height: 400px;
`

export const Sheet = styled.div`
    width: 95%;
    height: 400px;
    margin: 0 2.5%;
`

export const Theme = styled.button`
    width: 100px;
    height: 20px;
    right: 0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
`