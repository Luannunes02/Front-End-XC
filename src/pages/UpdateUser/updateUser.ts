import styled from "styled-components";

export const Container = styled.div`
margin-top: 5vh;
    border: 3px solid #0077ff;
    border-radius: 21px 3px 10px 9px;
    padding: 50px 10px;
    background: #212121;

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
        justify-content: center;

        

        .user-insert {
            display: flex;
            flex-direction: column;
            margin-left: 20px;

            @media screen and (min-width: 0px) and (max-width: 450px) { 
                & {
                    margin-left: 0px;
                }                      
            }
            
            label {
                margin-bottom: 5px;
                font-weight: 600;
            }

            input {
                border-radius: 5px;
            }
        }       
    }   

    
    .buttons-container {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
            
            }
        } 
    
`