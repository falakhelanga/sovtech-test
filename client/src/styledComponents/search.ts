import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const IconBtn = styled(IconButton)`
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  background-color: #168183;
  border-radius: 5px;
  height: 2.3rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  height: 100%;
  background-color: transparent;
  color: white;

  &::focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: #1eacae;
    font-weight: bold;
  }
`;
