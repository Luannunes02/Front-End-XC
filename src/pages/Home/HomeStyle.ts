import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5vh;
    border: 3px solid #0077ff;
    border-radius: 21px 3px 10px 9px;
    padding: 50px 10px;
    background: #212121;

    @media screen and (min-width: 992px) and (max-width: 2900px) { 
        .inputs-container {
            padding: 0px 100px;
        }          
    }

    @media screen and (min-width: 0px) and (max-width: 991px) { 
        .inputs-container {
            padding: 0;
        }          
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center; 
        padding: 0px 20px 5px 20px;
        border-radius: 21px 3px 10px 5px;
        border-bottom: 4px solid #0077ff;
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .inputs-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .user-insert {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 5px;
                font-weight: 600;
            }

            input {
                border-radius: 5px;
            }
        }

        button {

        }
    }   

    .include-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            width: fit-content;
        }
    }
    
    .table {
        color: #fff;

        thead {
            color: #0077ff;
            text-shadow: 2px 2px 2px #000;
            background-color: rgba(255, 255, 255, 0.12);
        }

        .image {
            width: 20px;
            transition: all .5s;
            margin-left: 5px;
            filter: contrast(0%);

            &:hover {
                cursor: pointer;
                filter: brightness(2.4);
            }
        }
    }
`