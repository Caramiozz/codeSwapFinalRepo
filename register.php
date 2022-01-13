<?php

session_start(); 



?>




<html>
     
    <head>
    <!-- include css and javascript files -->
    <link rel="stylesheet" href="registerCSS.css">
    <script type="text/javascript" src="javascriptfile.js"></script>
    
   
  
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
    
    
    
        
    </head>
  
    <!-- Wrapper to cover the whole page -->
    <div id="wrapper">
    <body>
        
        <div id ="mainDiv">
        
        <!-- header div that contains tabs to other pages in the website-->
        <div id="headerDiv">
            
            
            <button id="translateCodeTab" onclick="window.location='codeTranslator.php'">Translate Code</button>
            <button id="submitTemplateTab"onclick="window.location='submitTemplate.php'">Submit Template</button>
            <button id="HomeTab"onclick="window.location='index.php'">Home</button>
            
     
            
        </div>
        
        
        <div id = "contentDiv">
        
      <!-- View password button that allows the user to see the password they are entering -->      
      <input type="image" id="viewPasswordButton" src="https://i.ibb.co/xXM11p3/eye-Symbol.jpg" onclick="showPassword()" id="toggleView"></input>
      
     
        <!-- Form that contains the user input for account creation  -->
        <form id="registirationForm" method="post" >
            <p id="warningP"> Make sure the username is longer than three characters, and the password is longer than six characters </p>
            <p id="descP"> Username </p>   
            <input id="usernameInput" placeholder="Enter a username" name="username" type="text" />
            <p id="descP"> E-mail </p>
            <input id="emailInput" placeholder="Enter an e-mail" name="e-mail" type="email"/>
            <p id="descP"> Password </p>
            <!-- autocomplete="new-password" will disable chrome from putting default values to the inputs-->
            <input id="passwordInput" placeholder="Enter your password" name="password" type="password" id="registerPass" autocomplete="new-password"/>
            <p id="descP"> Password confirmation </p>
            <input id="passwordRepeatInput" placeholder="Enter your password again" name="passwordRepeat" type="password" id="registerPassRepeat"/>
            
            
            <!-- submit button that will submit the form  -->
            <button id="submitButton" name="searchSubmit" type="submit">Create Account</button>
            
            
        </form>
      
        
        <!-- <script type="text/javascript" src="javascriptfile"></script> -->

        
        </div>
            
            
        </div>
        
            
    </body>
    
    </div>
    
    <?php
     
        
        
        
        //connect to sql
        $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");
        
        // if all the required fields are set
        if(isset($_POST['username']) && isset($_POST["password"]) && isset($_POST["passwordRepeat"]) && isset($_POST["e-mail"]))
        {
            //assign variables
            $username = $_POST['username'];
            $password = $_POST["password"];
            $passwordrepeat = $_POST["passwordRepeat"];
            $email = $_POST["e-mail"];
           
            // if the length of the username is greater than 3 and the password is greater than 6
            // and if the password match, we can continue
            if(strlen($username) > 3 && strlen($password) > 6 && ($password == $passwordrepeat)){
                
                
                // here we will query the username and e-mail to check if it already exists in our users table
                // if it exists, we will warn the user
                $sql="SELECT * FROM users WHERE Username = '".$username."'  ";
                $result = mysqli_query($conn , $sql);
                
                $sql1="SELECT * FROM `users` WHERE `E-Mail` = '".$email."'   ";
                $result1 = mysqli_query($conn , $sql1);
                
                
                $unamecheck = mysqli_fetch_row($result);
                $emailcheck = mysqli_fetch_row($result1);
                           
                   
                //if the row exists, alert that the name is already taken               
                if($emailcheck){
                    echo "<script> alertTakenMail(); </script>"; 
                }                
                if($unamecheck ){
                    echo "<script> alertTakenName(); </script>";    
                }
                              
                if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
                    echo 'Invalid email entry';
                    }
                
                //if conditions are met, we will insert the new user, along with a new userfavourites entry
                // to our database.
                if(!$emailcheck && !$unamecheck && filter_var($email, FILTER_VALIDATE_EMAIL) != false){
                    
                    
                    
                    $sqlEnterUser = "INSERT INTO `users`(`Username`, `Password`, `E-Mail`, `Favourites`)"
                            . " VALUES ('".$username."','".$password."','".$email."','placeholder')";
                    
                    $sqlentry = mysqli_query($conn , $sqlEnterUser);
                    
                    $sqlEnterUserFavourites = "INSERT INTO `userfavourites`(`Username`, `FavouriteOne`, `FavouriteTwo`, `FavouriteThree`)"
                            . " VALUES ('".$username."','placeholder','placeholder','placeholder')";
                    
                    $sqlsecondentry = mysqli_query($conn , $sqlEnterUserFavourites);
                    
                    
                    
                    //change global
                    $_SESSION["SessionUsername"] = $username;
                    $_SESSION["SessionEmail"] = $email;
                    
                    //give the user an alert that they have been successful
                    echo "<script>
                    alert('You have successfuly created your account!')
                    window.location.replace('index.php');
                    </script>";
                    
                   
                 
                }
                 
           
           
                }
                
                
            }
           
          
            
           
            
          

    ?>
    
    
    
</html>
