import React from "react";
import styled from "styled-components";
import $ from "jquery";

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
}

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: "Category 1"
        },
        {
            id: 2,
            name: "Category 2"
        },
        {
            id: 3,
            name: "Category 3"
        },
        {
            id: 4,
            name: "Category 4"
        },
        {
            id: 5,
            name: "Category 5"
        },
        {
            id: 6,
            name: "Category 6"
        },
        {
            id: 7,
            name: "Category 7"
        },
        {
            id: 8,
            name: "Category 8"
        },
        {
            id: 9,
            name: "Category 9"
        }
        ,
        {
            id: 10,
            name: "Category 10"
        },
    ];

    const [itemsToDisplay, setItemsToDisplay] = React.useState({ 
        items: window.innerWidth < 540 ? menuItems.length : 4
    })

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            if(window.innerWidth < 540){
                setItemsToDisplay({
                    items: menuItems.length
                })
            }
            else if(window.innerWidth > 540 && window.innerWidth <= 620){
                setItemsToDisplay({
                    items: 2
                })
            }
            else if(window.innerWidth > 620 && window.innerWidth < 768){
                setItemsToDisplay({
                    items: 3
                })
            }
            else if(window.innerWidth > 768 && window.innerWidth < 862){
                setItemsToDisplay({
                    items: 4
                })
            }
            else if(window.innerWidth > 862){
                setItemsToDisplay({
                    items: 5
                })
            }
        }, 100)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
        
      })

    function handleToggle(e) {
        e.preventDefault();
        $('.sub-menu-wrapper').toggle();
    }

    return (
        <StickyWrapper>
            <div className="wrapper-outer">
                <div className="wrapper-inner">
                    <div className="wrapper-nav">
                        <nav className="nav">
                            <ul className="ul">
                                {menuItems.map((item, index) => {
                                    if(index <= itemsToDisplay.items){
                                        if(index === 0){
                                            return <li key={index} style={{paddingLeft: 0}} data-index={index + 1}><a href="/"><span>{ item.name} </span></a></li>
                                        }
                                        return <li key={index} data-index={index + 1}><a href="/"><span>{ item.name} </span></a></li>
                                    }
                                    return '';
                                })}
                            </ul>
                            <div className="more-container">
                                <button onClick={e => handleToggle(e)}>
                                    <span>More</span> &nbsp;
                                    <span> 
                                        <svg height="20" width="20" color="#007bff" viewBox="0 0 24 24">
                                            <path d="M4.88398 7.11612L3.11621 8.88389L12.0001 17.7678L20.884 8.88389L19.1162 7.11612L12.0001 14.2322L4.88398 7.11612Z"></path>
                                        </svg>
                                    </span>
                                </button>

                                <div className="sub-menu-wrapper">
                                    <div className="sub-menu-container">
                                        <div className="sub-menu">
                                            <ul>
                                                {menuItems.map((item, index) => {
                                                    if(index > itemsToDisplay.items){
                                                        return <li key={index}><span><a href="/"><span>{ item.name} </span></a></span></li>
                                                    }
                                                    return '';
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </StickyWrapper>
    );
    
}

export default Menu;

const StickyWrapper = styled.div`
    position: sticky;
    z-index: 2;
    top: 0;

    .wrapper-outer {
        background-color: #FFFFFF;
        border-top: 1px solid #e8ebeb;
        border-bottom: 1px solid #e8ebeb;
    }

    .wrapper-inner {
        width: calc(100% - (2 * 16px));
        padding: 0 16px;
        margin: 0 auto;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 1120px;

        .wrapper-nav{
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: 8px 0;
    
            .nav {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-box-flex: 1;
                align-items: center;
                -webkit-box-pack: justify;
                flex: 1 1 auto;
                width: 100%;
        
                .ul::-webkit-scrollbar {
                    display: none;
                }
        
                .ul::scrollbar {
                    display: none;
                }
        
                .ul {
                    overflow-x: auto;
                    overflow-y: hidden;
                    display: flex;
                    width: auto;
                    flex-direction: row;
                    -webkit-box-flex: 1;
                    flex-wrap: nowrap;
                    list-style: none;
            
                    li (:first-child) {
                        padding-left: 8px;
                    }
                
                    li {
                        display: list-item;
                
                        a {
                            white-space: nowrap;
                            display: inline-flex;
                            border: none;
                            border-radius: 16px;
                            margin: 0;
                            padding: 2px 16px;
                            line-height: 24px;
                            text-align: center;
                            text-decoration: none;
                            cursor: pointer;
                            transition: background 0.3s, color 0.3s;
                            
                            span {
                                color: #007bff;
                                font-size: 16px;
                                line-height: 19px;
                            }
                        }
                    }
                }
        
                .more-container {
                    padding: 4px;
                    margin-top: -5px;
            
                    button {
                        outline: none;
                        opacity: 1;
                        white-space: nowrap;
                        background: none;
                        display: inline-flex;
                        border: none;
                        border-radius: 16px;
                        margin: 0;
                        padding: 0 16px;
                        text-align: center;
                        text-decoration: none;
                        cursor: pointer;
                        transition: background 0.3s, color 0.3s;
                        transition-timing-function: ease-out;
            
                        span {
                            color: #007bff;
                            font-size: 16px;
                            line-height: 19px;
                            margin: 0;
                            font-weight: 400;
                        }
                    }
            
                    .sub-menu-wrapper {
                        position: relative;
                        display: none;
            
                        .sub-menu-container {
                            position: absolute;
                            right: 0;
                            min-width: 200px;
                            margin-top: 8px;
            
                            .sub-menu {
                                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
                                margin: 0;
                                border: 1px solid rgba(0,0,0,.08);
                                border-radius: 4px;
                                background: #fff;
                                overflow: hidden;
            
                                ul {
                                    list-style: none;
                                    display: block;
            
                                    li {
                                        display: flex;
                                        -webkit-box-align: center;
                                        align-items: center;
                                        padding: 4px;
                                        border-top: 1px solid rgba(0,0,0,.08);
            
                                        span {
                                            -webkit-box-flex: 1;
                                            flex-grow: 1;
                                            display: block;
                                            width: 100%;
                                            box-sizing: border-box;
                                            vertical-align: middle;
            
                                            a {
                                                display: block;
                                                width: 100%;
                                                transition-timing-function: ease-out;
                                                padding: 0;
                                                border: none;
                                                margin: 0;
                                                font: inherit;
                                                color: inherit;
                                                background-color: transparent;
                                                text-align: inherit;
                                                color: #000;
                                                cursor: pointer;
            
                                                span {
                                                    color: #2e3333;
                                                    flex: 1;
                                                    line-height: 40px;
                                                    margin: 0;
                                                    font-size: 16px;
                                                    text-decoration: none;
                                                    font-weight: 400;
                                                    padding-left: 16px;
                                                    padding-right: 16px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 540px){
        .wrapper-inner{
            width: calc(100% - (2 * 24px));
            padding: 0 24px;
        }
    }

    @media only screen and (max-width: 540px){
        .more-container{
            display: none;
        }
    }

    @media only screen and (max-width: 768px){
        .sub-menu{
            margin: 0;
        }

        
    }
  }
`;
