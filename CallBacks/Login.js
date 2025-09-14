// Code for handling login callbacks
function getData(data, credential ,callback) {  //Step 2: Control reaches here and data is "Username" and credential is "vedansh" 
                                                // Step 9: Control reaches here again and data is "Password" and credential is "2003"
  setTimeout(()=> {                             // Step 3: After 1 second this function is executed 
    if (data === "Username"){                   // Step 4: Since data is "Username", the if block is executed
        log("Fetching username from database");
    }
    else if (data === "Password"){              // Step 10: Since data is "Password", this else-if block is executed
        log("Fetching password from database"); //Step 11: This line is executed and "Fetching password from database" is printed
        if(credential === "2003"){              // Step 12: Since credential is "2003", this if block is executed
            credential = "*****";                // Step 13: The credential variable is updated to "*****"
        }
        else{
            log("Incorrect password");
        }

    }
    console.log(`Verified ${data}: ${credential}`); // Step 5: This line is executed and "Verified Username: vedansh" is printed
                                                    // Step 14: This line is executed again and "Verified Password: *****" is printed
    if(callback){                                   // Step 6: Since callback is provided, this is true
                                                    // Step15: Since callback is provided, this is true again. and prints "Login successful" and "Credentials verified"

        callback();                                 // Step 7: The callback function is executed, 
    }
  }, 1000)
}

getData("Username", "vedansh",() => {               // Step 1: call the function getData and pass the values "Username" to data and "vedansh" to credential
    getData("Password", "2003",()=>{                // Step 8: After the first getData completes, this second getData is called with "Password" and "2003"
        console.log("Login successful");
        console.log(`Credentials verified`);    
    });
})