import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--footer-bg);
    display: flex;
    align-items: flex-start;
    padding: 4rem 4rem 2.5rem;
    gap: 12rem;
    .left{
        display: flex;
        flex-direction: column;
        .socials{
            display: flex;
            gap: 1.3rem;
            margin-top: 6rem;
            margin-bottom: 3rem;
            /* justify-content: space-between; */
        }
        p{
            font-weight: 400;
            font-size: 1rem;
            line-height: 1rem;
            color: #F7F7F7;
        }
    }
    .right{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 13.6rem;
        .community,.places,.about{
            display: flex;
            flex-direction: column;
            /* gap: 1rem; */
            h4{
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.4rem;
                color: var(--white);
                margin-bottom: 1rem;
            }
            p{
                font-weight: 400;
                font-size: .9rem;
                line-height: 2.2rem;
                color: #F1F3F9;
                cursor: pointer;
                margin-bottom: .5rem;
            }
        }
    }
`