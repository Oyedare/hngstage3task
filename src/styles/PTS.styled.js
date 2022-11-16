import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 89%;
    padding-top: 5rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    .top{
        display: flex;
        align-items: center;
        gap: 4rem;
        .list{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 3rem;
            p{
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.6rem;
                cursor: pointer;
            }
        }
        .location{
            width: 161px;
            height: 3rem;
            border: 1px solid #B4B4B4;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
        }
    }
    .images{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 1240px;
        margin: 2.5rem 0;
        flex-wrap: wrap;
        img{
            cursor: pointer;
        }
    }
`