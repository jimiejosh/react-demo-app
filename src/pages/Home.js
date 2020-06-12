import React from 'react'
import styled from "styled-components";

import Menu from "../components/Menu";



const Home = () => {
  return (
    <Wrapper>
        <h1 className="text-dark mt-3"> Hello Menu App </h1>

        <div style={{padding: 20}}>
	        <p className="lead mt-3 text-center">This app is a sample app built to demonstrate the mobile responsive navbar menu as requested, built in reactjs</p>
	        <p className="lead text-center mb-4">You may find the complete code in the <a href="https://github.com/akhils10/react-menus">Github repo</a> </p>
    	</div>
        <Menu />
        <div style={{margin: 40}}>
	        <ol>
                <li className="lead">The navbar menu collapses on mobile and expands on desktop</li>

                <li className="lead">The food category menu collapses into a sub menu and can be revealed by clicking on the <strong>More button</strong></li>

                <li className="lead">Typically, the food categories are fetched from the database. This action was simulated by storing in state.</li>

                <li className="lead">The food category menu responds to different device width thus making it responsive across all devices</li>

                <li className="lead">Also, notice that the menu is sticky. This means once you scroll down, the menu will stick to the top. Ths makes it constantly in view.</li>
            
                <li className="lead">Lastly, on mobile devices, the food category menu is scrollable</li>
            </ol>
        </div>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  margin: 80px auto;

  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 24px;
  }

  p {
    font-size: 18px;
    font-family: sans-serif;  
  	margin-top: 10px
  }

  ol {
      padding : 20px;
      li {
        font-size: 18px;
        font-family: sans-serif; 
        margin-top: 10px
      }
  }
 `;

