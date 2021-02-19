import React  from "react";

const HomePage = () => {

    <ReactFullpage 

    sectionsColor={["#282c34"]}

    render = {({ state, fullpageApi }) => {
      
      return (
        <div>
            <div className = "section p-0" 
                style = {{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: '100% 100%',
            }}>
                <Header />
            </div>
        </div>

      );
    }}
  />
}
export default HomePage;