import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    width: 89%;
    padding-top: 2rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-links{
        display: flex;
        align-items: flex-start;
        gap: 3rem;
        a{
            font-weight: 400;
            font-size: 1.3rem;
            line-height: 1.6rem;
            color: var(--text);
        }
    }

    .btn{
        background-color: var(--primary);
        border-radius: 10px;
        padding: .7rem 1rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: var(--white);
        cursor: pointer;
    }
    .modal-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(64, 64, 64, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        .modal{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: #FFFFFF;
            border-radius: 1rem;
            width: 37.5rem;
            &-head{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 2rem;
                width: 100%;
                border-bottom: 1px solid #CFD8DC;
                h4{
                    font-weight: 700;
                    font-size: 1.5rem;
                    line-height: 1.9rem;
                    color: #333333;
                }
                .X{
                    cursor: pointer;
                }
            }
            &-body{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 2rem;
                gap: 1rem;
                width: 100%;
                p{
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.25rem;
                    color: #333333;
                }
                .meta-mask,.wallet{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 1.25rem;
                    gap: 8.4375rem;
                    background: #F8F9FA;
                    border: 1px solid #CFD8DC;
                    border-radius: 0.75rem;
                    width: 100%;
                    cursor: pointer;
                    .text{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                        h4{
                            font-weight: 600;
                            font-size: 1.125rem;
                            line-height: 1.4375rem;
                            color: #000000;
                        }
                    }
                }
                .wallet{
                    background-color: var(--white);
                }
            }
        }
    }

    .menu{
        display: none;
    }

    .menu-links{
        background-color: rgba(0, 0, 0, 0.9);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .close{
            position: absolute;
            top: 5%;
            right: 5%;
            cursor: pointer;
        }
        .menu-link{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            a{
                font-weight: 400;
                color: var(--white);
                font-size: 1.5rem;
                &:hover{
                    color: var(--primary);
                }
            }
            .m-btn{
                background-color: var(--primary);
                border-radius: 10px;
                padding: .7rem 1rem;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.3rem;
                color: var(--white);
                cursor: pointer;
                /* width: 800px; */
            }
        }
    }

    @media screen and (max-width: 1201px) {
        width: 95%;
    }
    @media screen and (max-width: 768px) {
        .nav-links{
            display: none;
        }
        .btn{
            display: none;
        }
        .menu{
            display: block;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 425px) {
        .logo{
            a{
                img{
                    width: 50%;
                }
            }
        }

        .modal-bg{
            .modal{
                width: 19rem;
                &-body{
                    .meta-mask,.wallet{
                        gap: 4rem;
                        .vector{
                            display: none;
                        }
                    }
                    .wallet{
                        gap: 2.5rem;
                    }
                }
            }
        }
    }
    
`