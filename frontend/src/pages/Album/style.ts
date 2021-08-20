import styled from 'styled-components';


export const Container = styled.div`
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
  width: 200px;
  height: 150px;
  position: relative;
  >div {
    width: 200px;
  height: 150px;
  
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    width: 100%;

  }
  button {
    position: absolute;
    top: 100px;
    left: 25%;
    border: none;
    color: #fff;
    background: none;
    font-size: 2rem;
  }
  button:hover {
    /* padding: 10px; */
    border-bottom: 2px solid #fff;
    border-bottom-width: thin;
  }
  
}
.box:hover { 
  background: rgba(112,128,144, 0.5);
  cursor: pointer;
}
div {
  
    width: 100px;
    height: 100px;
    background: pink;
    margin: 5px;
}

  `