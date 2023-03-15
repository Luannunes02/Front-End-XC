import styled from "styled-components";

export const ButtonContainer = styled.button`

    --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
  font-weight: bold;
  min-width: 100px;
  height: 35px;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

&::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

&:hover {
  color: white;
}

&:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

&:hover::before {
  top: -30px;
  left: -30px;
}
`