import classes from './hero.module.css';
import Image from 'next/image';

function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/nier-9s.jpg" 
                alt="An image showing the owner" 
                width={300} height={300}/>
            </div>
            <h1>Hi, this is Elton</h1>
            <p>I blog about some easy tech stuff - 
            especially data science.</p>
        </section>
    )
}

export default Hero;
