import { useState } from "react";

const Home = () => {

    const [purchaseAmt, setPurchase] = useState();
    const [quantity, setQuantity] = useState();
    const [currentPrice, setCurrent] = useState();
    const [disp, setDisp] = useState();
    const [lossAmt, setLossAmt] = useState();

    const [profit, setProfit] = useState();
    const [loss , setLoss] = useState();
    const [percentage, setPercentage] = useState("");

    const [finalImg, setFinalImg] = useState("");



    const handleChange1 = (e)=> {
        setPurchase(parseInt(e.target.value));

    }

    const handleChange2 = (e)=> {
        setQuantity(parseInt(e.target.value));
    }

    const handleChange3 = (e)=> {
        setCurrent(parseInt(e.target.value));
    }


    const handleSubmit = (e)=> {
        e.preventDefault();

        if (purchaseAmt < currentPrice) {
            let invest = purchaseAmt * quantity;
            let currentValue = currentPrice * quantity;
            let gaining = currentValue - invest;
            let percentInc = ((gaining / invest) * 100).toFixed(2);

            if (percentInc > 50) {
                setFinalImg("jackpot");
            } else {
                setDisp(true);
                setProfit(gaining);
                setPercentage(percentInc);
                setLoss(null);
                setLossAmt(null);  
                setFinalImg("");
            }

            

        } else if (parseInt(purchaseAmt) >= parseInt(currentPrice)){
            let invest = purchaseAmt * quantity;
            let currentValue = currentPrice * quantity;
            let gaining = currentValue - invest;
            let percentIncc = ((gaining / invest) * 100).toFixed(2);
            let percentInc = Math.abs(((gaining / invest) * 100).toFixed(2));
            
            setDisp(null);
            
            if (percentIncc < 0){
                console.log(percentIncc)
                 setFinalImg("loss-img");
            }

            if(gaining < 0){
                setProfit(gaining);
            }
            else if (!percentInc) {
                setLoss(true);
                setProfit("0");
                setFinalImg("");

            } else {                
                setProfit(gaining); 
                setLoss(true);
                setLossAmt(null);
                setFinalImg("")
            }
            setPercentage(percentInc);           
        }        
    }
   

    return ( 
        <section className={finalImg}>
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
             { disp && <h2>You gained {percentage + "%"} . Your total profit is {"$"+ profit} </h2>}
                { loss && <h2>You gained {percentage + "%"}. Your total profit is {"$"+ profit}</h2>}
                { lossAmt && <h2>Ooooo bhai you have lost {percentage + "%"}. Your total loss is {"$"+ Math.abs(profit)}</h2>}
             </div>

        </section>
     );
}
 
export default Home;