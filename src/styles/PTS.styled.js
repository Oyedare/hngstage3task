import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 89%;
    padding-top: 5rem;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    .top{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        width: 100%;

        select{
            display: none;
        }
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
            width: 10.0625rem;
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
        justify-content: center;
        padding: 0px;
        gap: 24px;
        width: 77.5rem;
        margin: 2.5rem 0;
        flex-wrap: wrap;
        img{
            cursor: pointer;
        }
    }
    @media screen and (max-width: 1201px) {
        width: 95%;
        .top{
            width: 100%;
            .list{
                gap: 2rem;
                p{
                    font-size: 1rem;
                    line-height: 1rem;
                }
            }
        }
        .images{
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        .top{
            gap: 2rem;
            .list{
                gap: .6rem;
            }
            .location{
                width: 8rem;
                
            }
        }
    }

    @media screen and (max-width: 425px) {
        padding-top: 2rem;
        .top{
            justify-content: space-around;
            .list{
                display: none;
            }
            select{
                display: block;
                border: 1px solid #B4B4B4;
                border-radius: 8px;
                padding: .8rem 2rem;
            }
        }
    }
`