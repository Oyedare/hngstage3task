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
            width: 600px;
            &-head{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 24px 32px;
                width: 100%;
                border-bottom: 1px solid #CFD8DC;
                h4{
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
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
                padding: 32px;
                gap: 16px;
                width: 100%;
                p{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    color: #333333;
                }
                .meta-mask,.wallet{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 20px;
                    gap: 135px;
                    background: #F8F9FA;
                    border: 1px solid #CFD8DC;
                    border-radius: 12px;
                    width: 100%;
                    cursor: pointer;
                    .text{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding: 0px;
                        gap: 16px;
                        h4{
                            font-weight: 600;
                            font-size: 18px;
                            line-height: 23px;
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
`