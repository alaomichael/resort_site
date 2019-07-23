import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaWineGlass } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title:"Free Cocktail",
                info:'This is a good thing to start your day with.This is a good thing to start your day with.This is a good thing to start your day with.'
            },
            {
              icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'This is a good thing to start your day with.This is a good thing to start your day with.This is a good thing to start your day with.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'This is a good thing to start your day with.This is a good thing to start your day with.This is a good thing to start your day with.'
            },
            {
                icon: <FaWineGlass />,
                title: "Sweet Wine",
                info: 'This is a good thing to start your day with.This is a good thing to start your day with.This is a good thing to start your day with.'
            }
        ] 
    };


    render() {
        return (
            <section className='services'>
               <Title title='services'/>
               <div className='services-center'>
               {this.state.services.map((item,index) => {
                   return (<article key={index} className="service">
                   <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                   </article>);
               } )}
                </div>
               </section>
            
        )
    }
}
