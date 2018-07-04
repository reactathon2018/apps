
import React, { Component } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import styles from './Portfolio.module.css';
import CSSModules from 'react-css-modules';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

//import styles from './../PortfolioItem/PortfolioItem.module.css';

 class todoComponent extends Component {

   /* render() {
      return (
        <h1>
          Hello Dyana
        </h1>
      );
    }*/
  

   
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        fakePortfolioData: []
      };
    }
  
    componentDidMount() {
        this.setState({ isLoading: true });

      fetch("http://localhost:3000/graphql?query={todo(itemId:1){itemId,item}}")
        .then(res => res.json())
        .then(
          (result) => {
            console.log("result--"+JSON.stringify(result));
            this.setState({
              isLoaded: true,
              fakePortfolioData: result.data.todo
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    render() {
      const { error, isLoaded, fakePortfolioData  } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
       /*   <div>
          {fakePortfolioData.map((protfolio, i) => ( 
          <div styleName="container">
          <div styleName="type-name">
            <div styleName="profile-icon">
              <ProfileIcon name={protfolio.item} />
            </div>
            <div  styleName="type-tite">{protfolio.item}</div>
          </div>
        </div>
      ))}
       </div>*/
       

          <div> 
            
            {fakePortfolioData.map((protfolio, i) => (                              
                <PortfolioItem key={i} data={protfolio} />
             ))}
          </div>
         

        );
      }
    }
  }

  export default todoComponent;
 // export default CSSModules(todoComponent, styles);
 
 

