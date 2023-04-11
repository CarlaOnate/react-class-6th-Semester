import styled from "styled-components";

export const ShowBox = styled.div`
  background: #fff;
  margin: 0;
  height: auto;
  float: left;
  overflow: hidden;
  display: block;
  margin-bottom: 30px;
  margin-right: 20px;
  position: relative;
  box-shadow: 4px 4px 5px rgb(0 0 0 / 22%);
  border-radius: 7px;
  padding: 0;
  flex-shrink: 0;
  scroll-behavior: smooth;

  .show-title {
    color: aliceblue;
    font-size: 20px;
    padding: 10px 0 0 10px;
    text-align: left;
    text-transform: capitalize;
  }
  
  .label {
    font-weight: 600;
    background-color: rgb(209, 54, 103);
    width: 10rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .title {
    font-weight: 600;
    width: 10rem;
    height: 1.5rem;
  }

  .calification {
    margin: 1rem 0;
    padding: 1rem 0;
  }

  .show-thumb:hover {
    transform: scale(1.2);
    opacity: 0.4;
  }

  .info-show {
    border-radius: 7px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: all 0.3s;
    background: linear-gradient(0deg, rgb(2, 0, 36) 10%, rgba(0, 0, 0, 0) 100%);
  }
`;

export const ImageContainer = styled.div`
  margin-left: 0;
  min-width: 100%;
  overflow: hidden;
  background: #2f3238;
  float: none;
  transition: opacity 0.35s, transform 0.35s;

  .show-thumb {
    transition: 0.9s;
    -webkit-transition: opacity 1s, -webkit-transform 1s;
    transition: opacity 1s, transform 1s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    min-width: 100%;
    height: 370px;
    position: relative;
    max-width: none;
    margin-left: 0;
    transform: scale(1);
    transition: 0.9s;
  }
`

