import { styled } from 'styled-components'

export const Container = styled.div`
    display: block;
    background-color: var(--color-background);
    color: var(--color-foreground);
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
    background-color: var(--color-background);
    color: var(--color-foreground);
`

export const Sheet = styled.div`
    width: 95%;
    margin: 0 2.5%;
    background-color: var(--color-background);
    color: var(--color-foreground);
`

export const Theme = styled.button`
    width: 100px;
    height: 20px;
    right: 0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    background: white;
    border: 1px solid #c0b9b9;
    border-radius: 4px;
    margin: 10px;
    background-color: var(--color-background);
    color: var(--color-foreground);
`