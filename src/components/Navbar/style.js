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
`