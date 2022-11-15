import styled from 'styled-components';

export const StyledHome = styled.div`
    .header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 6.1875rem;
        width: 89%;
        padding-top: 7rem;
        margin: auto;
        &-text{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 48px;
            h3{
                font-weight: 400;
                font-size: 3.5rem;
                line-height: 140%;
                letter-spacing: -0.02em;
                span{
                    color: var(--primary);
                }
            }
            p{
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 2.2rem;
            }
            .search{
                display: flex;
                align-items: center;
                input{
                    background: rgba(247, 247, 247, 0.1);
                    border: 1px solid #A3A3A3;
                    border-radius: 8px 0px 0px 8px;
                    padding-left: 1rem;
                    width: 24.4rem;
                    height: 3.4rem;
                    &::placeholder{
                        font-weight: 400;
                        font-size: .9rem;
                        line-height: 130%;
                        color: #B8B8B8;
                    }
                }
                button{
                    background-color: var(--primary);
                    border-radius: 0px 8px 8px 0px;
                    width: 14.4rem;
                    height: 3.4rem;
                    outline: none;
                    border: 1px solid var(--primary);
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.2rem;
                    color: var(--white);
                    cursor: pointer;
                }
            }
        }
    }

    .banner-sm{
        background-color: var(--primary);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.625rem 6.25rem;
        gap: 16.5rem;
        margin-top: 3.5rem;
    }

    .inspiration{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        width: 91%;
        margin: 3rem auto;
        /* margin: auto; */
        h2{
            font-weight: 700;
            font-size: 3rem;
            line-height: 3.75rem;
            color: var(--black);
        }
        .images{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 1.5rem;
            flex-wrap: wrap;
            img{
                cursor: pointer;
            }
        }
    }

    .banner-lg{
        background-color: var(--primary);
        display: flex;
        /* justify-content: space-between; */
        gap: 3rem;
        align-items: center;
        padding: 6rem 5rem 3rem;
        .text{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            h3{
                font-weight: 700;
                font-size: 3rem;
                line-height: 3.75rem;
                color: var(--white);
            }
            p{
                font-weight: 400;
                font-size: 1.125rem;
                line-height: 2.2rem;
                color: var(--white);
            }
            >div{
                background-color: var(--white);
                border-radius: 8px;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.2rem;
                text-align: center;
                color: var(--primary);
                width: 9.8rem;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }
`