function Register(...arr) {
    let price = arr[0]
    let cash = arr[1]    
    let change = cash - price     
    let cid = arr[2]    
    let cidOut = []       
    let cidTotal = 0     
    let output = { status: null, change: [] };

    //Traversing the input
    for (let i=0; i<cid.length; i++){
        cidTotal += cid[i][1]
        cidOut.push(cid[i])
    }

    //Return CLOSED if till is emptied
    if (change === cidTotal){        		
        output.status = "CLOSED"
        output.change = cidOut        
        return output
    }

    //Return INSUFFICIENT FUNDS if short of change
    if (change > cidTotal){        		
        output.status = "INSUFFICIENT_FUNDS"
        return output
    }

    // Return actual change 
    let denom = [
        { name: "ONE HUNDRED", val: 100.0 },
        { name: "TWENTY", val: 20.0 },
        { name: "TEN", val: 10.0 },
        { name: "FIVE", val: 5.0 },
        { name: "ONE", val: 1.0 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 }
    ];
    
    let register_obj = cid.reduce(
        function(acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;          
        },
        { total: 0 }
    );

    let change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        while (register_obj[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register_obj[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; 
    }, []);

    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    output.status = "OPEN";
    output.change = change_arr;    
    return output;    
}

module.exports = Register;