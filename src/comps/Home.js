import { useState } from "react";

const Home = () => {

    // state variables
    const [purchaseAmt, setPurchaseAmt] = useState();
    const [quantity, setQuantity] = useState();
    const [currentAmt, setCurrentAmt] = useState();
    const [percentage, setPercentage] = useState();
    const [percentageLost, setPercentageLost] = useState();
    const [gaining, setGaining] = useState();

    const [isProfitted, setProfitted] = useState(null);
    const [isLosted, setIsLosted] = useState(null);
    const [image, setImg] = useState();
        
    // event handlers
    const handleChange1 = (e)=> {
        setPurchaseAmt(parseInt(e.target.value));
    }

    const handleChange2 = (e)=> {
        setQuantity(parseInt(e.target.value));
    }

    const handleChange3 = (e)=> {
        setCurrentAmt(parseInt(e.target.value));
    }



    // logic
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("hillo");

        if (purchaseAmt <= currentAmt) {
            let invest = purchaseAmt * quantity;
            let currentvalue = currentAmt * quantity;
            let earning = currentvalue - invest;
            var percentageBoost = ((earning / invest) * 100).toFixed(2);
                       
                setPercentage(percentageBoost);
                setProfitted(true);
                setGaining(earning);
                setImg("");
                if (isLosted) {
                    setIsLosted(null);
                }
                if (percentageBoost > 50) {
                    setImg("jackpot");
                }
                          
        }


        if (purchaseAmt > currentAmt) {
            let invest = purchaseAmt * quantity;
            let currentvalue = currentAmt * quantity;
            var lost = currentvalue - invest;
            let percentageL = ((lost / invest) * 100).toFixed(2);

                setPercentageLost(Math.abs(percentageL))
                setGaining(Math.abs(lost));
                setIsLosted(true);
                setImg("");
                if (isProfitted) {
                    setProfitted(false);
                }

                if (percentageL < 0) {
                    setImg("loss-img")
                }
        }
    }

    // JSX
    return ( 
        <section className={image}>
                <div className="nav-grid">
                    <p className="grid-child">Logo</p>
                    <p className="grid-child">Github Repo</p>
                    <p className="grid-child">Contact</p>
                </div>
            
             <form onSubmit={(e)=> {handleSubmit(e)}}>               
             <h1 id="title">Check Profit/Loss on your Stock</h1> 
             <div className="fields-div">
                <div className="fields"> <input onChange={(e)=> {handleChange1(e)}} type="number" required placeholder="Enter cost price of stock"/><span>Purchase price</span></div>
                <div className="fields"> <input onChange={(e)=> {handleChange2(e)}} type="number" required placeholder="Enter quantity of stock"/><span>Stock quantity</span></div>
                <div className="fields"> <input onChange={(e)=> {handleChange3(e)}} type="number" required placeholder="Enter current price value"/><span>Current price</span></div>
                <button type="submit">Calculate</button>
             </div>           
             </form>

             <div className="results">
                { isProfitted && <><p className="output">You gained <span>{percentage + "%"}</span> . Your total profit is <span>{"₹" + gaining}</span></p> </>}
                { isLosted && <><p className="output">You lost {percentageLost + "%"} . Your total loss is {"₹" + gaining}</p> </>}    
             </div>

        </section>
     );
}
 
export default Home;
