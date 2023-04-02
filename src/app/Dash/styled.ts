import styled from 'styled-components/macro'

export const v = {
    borderRadius: "8px",

    mdSpacing: "16px",
    smSpacing: "8px",
    lgSpacing: "32px",

    sm: "37.5em",
    md: "48em",
    lg: "64em",

    boxShadow:
        "0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11)",
};

export const lightTheme = {
    white: "rgb(255, 255, 255)",
    bg: "rgb(245, 245, 245)",
    bg2: "rgb(237, 237, 237)",
    bg3: "rgb(214, 214, 214)",
    text: "rgb(33, 33, 33)",
    primary: "rgb(224, 132, 209)",
};

export const Table = styled.table`
    width: 100%;
    height:20%;
    border-collapse: collapse;
    text-align: center;
    border-radius: ${v.borderRadius};
    overflow: hidden;
`;

export const THead = styled.thead`
    position: sticky;
    z-index: 100;
`;

export const THeadTR = styled.tr`
    background: ${({ theme }) => theme.bg};
`;

export const TH = styled.th`
    font-weight: normal;
    padding: ${v.smSpacing};
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid ${({ theme }) => theme.bg2};
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const TBody = styled.tbody``;

export const TBodyTR = styled.tr`
    background: ${({ theme }) => theme.white};
`;

export const TD = styled.td`
    padding: ${v.smSpacing};
    border: 1px solid ${({ theme }) => theme.bg2};
    font-size: 14px;
    width:8%;
`;

export const TDnav = styled.td`
    font-size: 12px;
    width:1%;
    height:1px;
`;

export const Wrapper = styled.div`
	display:flex;
	border: 4px solid var(--color-blue-border);
	border-radius: 3px;
    padding: 20px 20px 20px 25px;
    width:100%;
	
`