import styled from "styled-components";

export const Box = styled.div`
    width: 350px;
    padding: 20px;
    margin: 40px auto;

    text-align: center;

    background: radial-gradient(crimson, skyblue);

    border: 5px solid black;
    border-radius: 20px;
`

export const FormBtn = styled.button`
    cursor: pointer;
    display: block;

    width: 100px;
    padding: 10px;
    margin: 16px auto 0;
`
export const LabelText = styled.p`
    margin: 0;
`

export const Input = styled.input`
    border-radius: 5px;
    opacity: 50%;


    &:hover, &:focus {
        opacity: 40%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }
`

export const List = styled.ol`
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`

export const MainTitle = styled.h1`
    margin: 0;
    margin-bottom: 16px;
`

export const SecondTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 16px;
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 16px;
`