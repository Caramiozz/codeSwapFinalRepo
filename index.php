<!DOCTYPE html>





<?php 
    //buffer the output so refresh etc can go off
    ob_start();
    // We start a session so we can add functionality to the websites login system.
    session_start();
    
    if(!isset($_SESSION["SessionUsername"]))
    {
        // if the sessionusername is not set, it will be set to the default parameter.
        // the sessionemail is not in use for now.
        $_SESSION["SessionUsername"] = "DefaultName";
        $_SESSION["SessionEmail"] = "Default@Default.com";
    }
    
?>

<html lang="en">
    <head>
        <!--a link for fontawesome icons to use, this is an attempt, we haven't used it, instead we uploaded images to imgbb to host them-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
        
        
        <!-- include the javascript file -->
        <script type="text/javascript" src="javascriptfile.js"></script>
       
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        <title>Document</title>

        <!-- include the CSS file -->
        <link rel="stylesheet" href="main.css">
        
        
        
        <!-- Confirm resubmission is avoided this way for now... -->
        <script>
            if ( window.history.replaceState )
            {
                window.history.replaceState( null, null, window.location.href );
            }
        </script>
        
         
    </head>

    <!--A wrapper div to keep the whole website including the body, we will give this a fixed size to circumvent resize issues -->
    <div id="wrapper">
        
        
        
    
<body>
    
    
    
   

    
    
    <!--The main div of our index page, this will contain the functionality -->
    <div id="mainDiv">
       
        <!-- PHP code taht will store the list of methods available in the database on a dropdown div-->
         <?php
            
            $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");
            //$sql="SELECT * FROM Methods WHERE Name = '".$name."'  ";
                        
            // query the methods table for every entry                
            $sql="SELECT * FROM methods";                       
            $result = mysqli_query($conn , $sql);            
            
            // echo relevant fields for the methods list
            echo "<div id=\"listOfMethodsDiv\">";
            
              echo"<button name=\"showListButtonPost\" id=\"showListButton\" onclick =\"showMethodsList()\"> List of Methods </button>";
                
              echo"<div id=\"listContainerDiv\" style=\"display: none\">"; 
              echo"<input type=\"image\" src=\"https://i.ibb.co/1GYKz6x/x-mark-256.png\" onclick=\"closeMethodsList()\" id=\"closeListButton\"></input>";
                    //while mysqli_fetch_array is not pointing to null, we echo the rots "Name" value so the user can see the available methods
                     while($row = mysqli_fetch_array($result))
                        {
                            echo "<div id = \"listOfMethodsPdiv\">";
                            echo  "<p id = \"listOfMethodsP\"> ".$row['Name']." </p>";
                            echo"</div>";
                        }
                 echo"</div>";
                
  
            echo "</div>";
            
            
             
    
        ?>
        
        
        <!--the div that contains two tab buttons which will allow easy access to other pages in the website -->
         <div id="siteTabsDiv">
        
                <button id="translateCodeTab" onclick="window.location='codeTranslator.php'">Translate Code</button>
                 <button id="submitTemplateTab"onclick="window.location='submitTemplate.php'">Contribute to the site</button>    
         
             </div>
       
        <!--The header div, which will contain the symbol of codeswap and login / register information-->
        <div id="headerDiv">
            
            
            

       <!-- Dropdown after clicking the login button -->
        <div id="loginDropdown" style="display: none">
        <div id="myDropdown" class="dropdown-content">
      
      <!-- form with the method post, hitting the login button will prompt the closeLoginDropdown() javascript function, which will set its displat to none -->
      <form method="post">
      <input type="text" placeholder="Username" name="loginUsernamePost" id="dropdownUsernameText"><br>
      <input type="password" placeholder="Password" id="dropdownPasswordText" name="loginPasswordPost">
      
      <button id="loginConfirm"  name="loginConfirmButton" type="submit" onclick="closeLoginDropdown()">Login</button>
      </form>
    
      </div>           
      </div>
      
      <!--Codeswap emblem-->
      <div id="headerLeft">
          
         <img src="https://i.ibb.co/3T2RT0Y/Resim2.png" id='pageTitle'/>

      </div>
      
     
      <div id="headerRight">
          
          
          
     
            <div id="headerButtons">
    
    <?php
   
    
        //logout function that will destroy the session, if the user decides to logout, the current sesion will be ender and the page will be refreshed
        function logoutFunc(){
              session_destroy();
              header("Refresh:0");
        }
        
        //function that will log the user in if proper credentials are given
        function loginFunc(){
            
            // if the username and password entries are set, we will access this part        
            if(isset($_POST["loginUsernamePost"]) && isset($_POST["loginPasswordPost"])){
                
                //assign variables to use in the query
                $attemptName = $_POST["loginUsernamePost"];
                $attemptPassword = $_POST["loginPasswordPost"];
                
                
                //connect to phpmyadmin
                $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");
                
                //query the users table for the entry that the current user entered in the login and password input sections
                $sqlLogin="SELECT * FROM Users WHERE Username = '$attemptName' ";      
                $resultLogin = mysqli_query($conn , $sqlLogin);          
                $userDetails = mysqli_fetch_row($resultLogin);
                
                // if the row exists
                if($userDetails)
                {
                    // if the username and password match eachother on the same row, we will start a session with the users variables
                    if($userDetails[0] == $attemptName & $userDetails[1] == $attemptPassword){
                     $_SESSION["SessionUsername"] = $attemptName;
                     //assign the e-mail via the userDetails query
                     $_SESSION["SessionEmail"] = $userDetails[2];
                 
                     
                     //refresh the page
                     header("Refresh:0");
                    }
                }
                else
                {
                   
                   echo "<script>  alertNonExists(); </script>";
                   //...
                    
                }
                
            }
             
            
        }
        
        
        //E-mail and Username section top right with echoing HTML code
        //echo "<div id='headerRight'>";
        
        /*
        echo "<span id='userSpan'>Name: </span>";
        echo "<div id='nameDiv'><p id='userP'>".$_SESSION['SessionUsername']."</p>  </div>";
        echo "<span id='userSpan'>Email: </span>";
        echo "<div id='emailDiv'><p id='userP'>".$_SESSION['SessionEmail']." </p></div>";
         * */
         
        
       
        //register button
        
      
        
        
    
        //if we are logged in, show the logout button, if not show the login button
        if(isset($_SESSION["SessionUsername"]))
        {
            //check if it is the default value, meaning its set to a user
            if($_SESSION["SessionUsername"] != "DefaultName")
            {   
                // show the logout button instead of the original version
                echo "<form method='post' id='loginForm'>";
                echo "<input type='submit' id='logoutButton' name='logout' value='Logout'>";
                //echo "<button id='registerButton' onclick=\"window.location='register.php';\" value='Register'>Register</button>";
                echo "</form>";
            }
            else
            {
                            
                // show the register and login version if the session username is the default one
                echo "<button id='registerButton' onclick=\"window.location='register.php';\" value='Register'>Register</button>";
                echo "<input type='button' onclick=\"toggleLogin()\" id='logoutButton' name='logout' value='Login'>";             
               
                //echo "<form method='post' id='loginForm'>";
                //echo "<input type='button' onclick=\"toggleLogin()\" id='logoutButton' name='logout' value='Login'>";
                //echo "<button id='registerButton' onclick=\"window.location='register.php';\" value='Register'>Register</button>";
                //echo "</form>";       
            }
        
        }
            
        //echo "</div>";
        
        
        //if the button is clicked, call the php function to logout, destroying the session
         if(array_key_exists('logout', $_POST)) {
            
            logoutFunc(); 
        } 
        
        //if the button is clicked, call the php functino to login
        if(array_key_exists('loginConfirmButton', $_POST)){
            
            loginFunc();
        }
        
       
        
        /*
        echo $_SESSION["SessionUsername"];
        echo $_SESSION["SessionEmail"];
         * 
         */
    
    ?>
              
              
          
          
        
              
              
          </div>
          
          
          </div>
    
    <!-- comment 
    <table border = 1>
        <tr>
            
            <td id="nameTD">Name</td>
            <td id="emailTD">E-mail</td>
            
        </tr>
        
        
    </table>
    
    -->
   
       
</div>

        
<!-- The div that keeps the search functionalities -->
<div id="searchDiv">
   
    
    <!-- The form that will contain all the relevant variables that will help us query the database -->
    <form method="post" id="searchForm" action="#" style="text-align:center">
        
    <div id="searchDivTop">
    
    <!-- The search bar that will be used to search for the methods name(print,for-loop etc...) -->
    <!-- by adjusting its value from the php function, we can mimic the functionality of it not resetting to null once the form is submit -->
    <div id="searchDivTopSearchbarDiv">
        <input id="searchInp" placeholder="Search for a function!" name="searchInput" type="text" value="<?php if (isset($_POST['searchInput'])) echo $_POST['searchInput']; ?>"/>
    </div>
       <!-- The arrow image... -->
        <div id="searchDivTopArrowDiv">
            <img id="arrowIcon" src="https://i.ibb.co/X28Lf8s/double-horizontal-arrow.png">
        </div>
    
       
       
    <div id="searchDivTopDropdownDiv">
        
        
    <!-- The dropdown options that allow the user to search for a specific programming language --> 
    <!-- by adjusting the selected value of it through php, we again mimic the functionality that allows us to  -->
    <!-- Keep the selected value after the page refreshes through form submissions-->
    <!--- we will be using the ternary operator, which is a form of the if else statement -->
    <select name="language" id="searchDropDowns" onchange="this.form.submit()">
        
        <!-- inner php helps us keep track of the selected options even though we submit -->
        <option value="Java" <?php echo (isset($_POST['language']) && $_POST['language'] == 'Java') ? 'selected' : ''; ?>>Java</option>
        <option value="Python" <?php echo (isset($_POST['language']) && $_POST['language'] == 'Python') ? 'selected' : ''; ?>>Python</option>
        <option value="C++" <?php echo (isset($_POST['language']) && $_POST['language'] == 'C++') ? 'selected' : ''; ?>>C++</option>
        <option value="C#" <?php echo (isset($_POST['language']) && $_POST['language'] == 'C#') ? 'selected' : ''; ?>>C#</option>
                       
    </select>
        
    </div>
        
    </div>
        
     <!-- The functionalities for the logged in accounts, the display will be set through PHP which allows us to only display this div -->
     <!-- When the username is not set to the default value -->
     <div id="loggedAccountInfo" style="<?php if($_SESSION["SessionUsername"] == "DefaultName"){echo "display:none";}else{echo "display:flex";} ?>" name="loggedAccountDivPost">
        
        <div id="loggedAccountUsernameDiv">
            <?php                
               //show logged in name
                if(isset($_SESSION["SessionUsername"]))
                {
                    if($_SESSION["SessionUsername"] != "DefaultName")
                    {
                        
                        echo $_SESSION["SessionUsername"]; 
                    }                                              
                }                          
              ?>
        </div>
        
        <!-- The div that keeps the favourites and the unfavourite buttons for the user-->
        <div id="loggedAccountFavourites">
            
            <?php
                 // if someone is logged in
                 if(isset($_SESSION["SessionUsername"])){
                        //query the database by accessing the userfavourites table 
                        $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");
                        //$sql="SELECT * FROM Methods WHERE Name = '".$name."'  ";
                        
                        $startcurrentusername = $_SESSION["SessionUsername"];
                 
                        $sql="SELECT * FROM userfavourites WHERE Username = '$startcurrentusername' ";                       
                        $result = mysqli_query($conn , $sql);            
                        $row = mysqli_fetch_row($result);
                        
                        
                            
                           
                            //if the query is valid, we will check for each favourite section of the row(fav1,fav2,fav3),
                            //if the rows are not called "placeholder", which they are by default open account creation,
                            //the php code will show the favourite and unfavourite buttons by echoing the fav1,fav2 etc through
                            //row[1] row[2] etc...
                            if($row[1] != "placeholder")
                            {
                                echo "<div id=\"firstFavsDiv\">";
                                echo "<button id=\"favonebutton\" name = \"favonename\" >$row[1]</button>";
                                //remove favourite button
                                echo "<button id=\"unfavonebutton\" name = \"unfavonename\" >Remove $row[1]</button>";
                                echo "</div>";
                                
                            }
                            if($row[2] != "placeholder")
                            {
                                echo "<div id=\"secondFavsDiv\">";
                                echo "<button id=\"favtwobutton\" name = \"favtwoname\">$row[2]</button>";
                                //remove favourite two
                                echo "<button id=\"unfavtwobutton\" name = \"unfavtwoname\" >Remove $row[2]</button>";
                                echo "</div>";
                            }
                            if($row[3] != "placeholder")
                            {
                                echo "<div id=\"thirdFavsDiv\">";
                                echo "<button id=\"favthreebutton\" name = \"favthreename\">$row[3]</button>";
                                //remove favourite three
                                echo "<button id=\"unfavthreebutton\" name = \"unfavthreename\" >Remove $row[3]</button>";
                                echo "</div>";
                            }
                            
                            // BUTTON TO ADD FAVOURITES
                            echo "<button id = \"favouriteButton\" name=\"favouriteButtonPost\">Favourite this method!</button>";
                            
                        //click favourite button to call a function CHECKHERE
                        //the function will simply set the favourite buttons text to the search inputs text
                        if(array_key_exists('favonename', $_POST)) 
                        {                              
                                echo "<script> changefav('$row[1]'); </script>";                           
                        } 
                        if(array_key_exists('favtwoname', $_POST)) 
                        {                              
                                echo "<script> changefav('$row[2]'); </script>";                           
                        } 
                        if(array_key_exists('favthreename', $_POST)) 
                        {                              
                                echo "<script> changefav('$row[3]'); </script>";   
                                
                                
                        }
                        
                        
                        //click unfavourite button to go to a method
                        
                        //for the three possible favourites, these unfavourite buttons will query the userfavourites table and
                        //the favourite to be removed will be set to "placeholder", while the rest will remain the same by echoing
                        //row[1],row[2] etc...
                        if(array_key_exists('unfavonename', $_POST)) 
                        {         
                                $sqlsearchfavs = "SELECT * FROM userfavourites WHERE username = '".$startcurrentusername."' ";
                                
                                $selectuserquery = mysqli_query($conn,$sqlsearchfavs);                   
                                $row = mysqli_fetch_row($selectuserquery);
                                
                           
                                $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$startcurrentusername."',"
                                          . "`FavouriteOne`='placeholder',`FavouriteTwo`='$row[2]',`FavouriteThree`='$row[3]' WHERE username = '".$startcurrentusername."'";
                                 
                                $query = mysqli_query($conn , $sqlupdate); 
                                
                                
                                //refresh the website
                                header("Refresh:0");
                                
                        
                        } 
                        if(array_key_exists('unfavtwoname', $_POST)) 
                        {                              
                                $sqlsearchfavs = "SELECT * FROM userfavourites WHERE username = '".$startcurrentusername."' ";
                                
                                $selectuserquery = mysqli_query($conn,$sqlsearchfavs);                   
                                $row = mysqli_fetch_row($selectuserquery);
                                
                           
                                $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$startcurrentusername."',"
                                          . "`FavouriteOne`='$row[1]',`FavouriteTwo`='placeholder',`FavouriteThree`='$row[3]' WHERE username = '".$startcurrentusername."'";
                                 
                                $query = mysqli_query($conn , $sqlupdate);   
                                
                                 //refresh the website
                                header("Refresh:0");
                        } 
                        if(array_key_exists('unfavthreename', $_POST)) 
                        {                              
                                $sqlsearchfavs = "SELECT * FROM userfavourites WHERE username = '".$startcurrentusername."' ";
                                
                                $selectuserquery = mysqli_query($conn,$sqlsearchfavs);                   
                                $row = mysqli_fetch_row($selectuserquery);
                                
                           
                                $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$startcurrentusername."',"
                                          . "`FavouriteOne`='$row[1]',`FavouriteTwo`='$row[2]',`FavouriteThree`='placeholder' WHERE username = '".$startcurrentusername."'";
                                 
                                $query = mysqli_query($conn , $sqlupdate);    
                                
                                
                                 //refresh the website
                                header("Refresh:0");
                        }
                        
                        
                        
                 }
            
            
                // If the session username is set and the search user input is set
                if(isset($_SESSION["SessionUsername"]) && isset($_POST['searchInput'])){
                    if($_SESSION["SessionUsername"] != "DefaultName")
                    {
                        
                        $currentlanguage = $_POST["language"];
                        $name = $_POST['searchInput'];
                        $currentusername = $_SESSION["SessionUsername"];
            
                
                        //REPUT HERE
                        
                        //click the favourite button to add a favourite
                      
                        if(array_key_exists('favouriteButtonPost', $_POST)) 
                        {        
                            
                             $currentMethodName = $_POST['searchInput'];
                            
                             $conn = mysqli_connect("localhost","root","","group5");
                            //$sql="SELECT * FROM Methods WHERE Name = '".$name."'  ";
                             $sqlselect="SELECT * FROM userfavourites WHERE Username = '$currentusername' ";           
                             
                             $result = mysqli_query($conn , $sqlselect);            
                             $rowFavourite = mysqli_fetch_row($result);
                             
                             //check for existence before proceeding
                             $sqlCheck = "SELECT * FROM methods WHERE Name = '$currentMethodName' "; 
                             $checkMethodExistence = mysqli_query($conn , $sqlCheck);
                             $existingRow = mysqli_fetch_row($checkMethodExistence);
                                     
                                  
                             
                             //if the method exists in the database, allow the user to favourite it
                             if($existingRow){
                             //insert into an empty favourites slot, the method that is in the searchbar for the current user
                             //it will check the for 3 slots, if all 3 slots are free, it will alert the user that they filled
                             //their favourites quota
                             if($rowFavourite[1] == "placeholder")
                             {
                                 
                                  $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$currentusername."',"
                                          . "`FavouriteOne`='".$currentMethodName."',`FavouriteTwo`='placeholder',`FavouriteThree`='placeholder' WHERE username = '".$currentusername."'";
                                 
                                  $query = mysqli_query($conn , $sqlupdate); 
                                  
                             
                             }
                             else if($rowFavourite[2] == "placeholder")
                             {
                                  $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$currentusername."',"
                                          . "`FavouriteOne`='".$rowFavourite[1]."',`FavouriteTwo`='".$currentMethodName."',`FavouriteThree`='placeholder' WHERE username = '".$currentusername."'";
                                 
                                  $query = mysqli_query($conn , $sqlupdate); 
                                  
                                 
                                 
                             }
                             else if($rowFavourite[3] == "placeholder")
                             {
                                  $sqlupdate="UPDATE `userfavourites` SET `Username`= '".$currentusername."',"
                                          . "`FavouriteOne`='".$rowFavourite[1]."',`FavouriteTwo`='".$rowFavourite[2]."',`FavouriteThree`='".$currentMethodName."' WHERE username = '".$currentusername."'";
                                 
                                  $query = mysqli_query($conn , $sqlupdate); 
                                  
                      
                             }
                             else{
                                 // tell the user the favourites are full if all three are taken 
                                 echo "<script>  alertFavsFull(); </script>";   
                             }
                                                        
                             //refresh the website
                                header("Refresh:0");
                                
                             }
                             //alert the user that no such method exists
                             else
                             {
                                 echo "<script>  alertNoSuchMethod(); </script>";   
                             }
                
                            
                            
                        }
                    }     
                }
            ?>
            <!--
            <div id="favouritesTitle">
                <p>Favourites</p>              
            </div>
            
            <div id="favouriteOne">             
                 <button id="favonebutton">Favourite One</button>  
            </div>
            
            <div id="favouriteTwo">
                <button id="favtwobutton">Favourite Two</button>
            </div>
            
            <div id="favouriteThree">
                <button id="favthreebutton">Favourite Three</button>
            </div>
            -->
         
            
        </div>
        
    </div>
    <!-- end here -->
        
        
        <div id="searchDivBottom">
      
         <button id="searchButton"  name="searchSubmit" type="submit">Search</button>
        
        </div>
        
    </form>
        
 </div>
        
        <!-- uncomment later
        <div id="favouriteDiv">
            <button id = "favouriteButton" name="favouriteButtonPost">Favourite this method!</button>
        </div>
        -->
         

    <?php

                 // echo "<div id=\"favouriteDiv\">";
                 // echo "<div id=\"favouriteDiv\">";
                 // echo "<button id = \"favouriteButton\" name=\"favouriteButtonPost\">Favourite this method!</button>";
                  //echo "</form>";
            
                  //echo "</div>";
                  
     
             
    ?>



<!--main content div -->
<div id = "mainContent">
 
    
    
    
  
   

    <!--tutorial content div -->
    <div id = "maincontent_bottom">
        
         
        <!-- The description for method in text form -->
        <div id="mainContentBottomLeft">
     
            
            <div id="mainContentBottomLeftText">
                
            
        <?php
        
        // query the methods table with the search input and dropdown input, echo columns from the table
        // depending on these names, these columns will be formatted html code which will be echoed inside
        // the relevant parts, so the user can see the tutorial once a search is made
        if(isset($_POST['searchInput']) && isset($_POST["language"])){
            //echo $_POST['searchInput'] . " " . $_POST["language"];
            
            $currentlanguage = $_POST["language"];
            $name = $_POST['searchInput'];
            
                
            $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");
            //$sql="SELECT * FROM Methods WHERE Name = '".$name."'  ";
            
            $sql="SELECT * FROM Methods WHERE Name = '$name' ";
            
            $result = mysqli_query($conn , $sql);
            
            $row = mysqli_fetch_row($result);
            
            //the four columns are always in the same order, so according to the language input of the dropdowns
            //will echo a specific column from the queried row
            if(!is_null($name) && !is_null($currentlanguage) && $row != null)
            {
                
                if($currentlanguage == "Java"){
                    echo($row[1]);
                    
                    
                }
                
                
                 else if($currentlanguage == "C#")
                {
                
                    echo($row[2]);
                
                }
                
                else if($currentlanguage == "C++")
                {
                
                    echo($row[3]);
                
                }
                
                 else
                {    
                
                    echo($row[4]);
                
                }
            
            }
            else{
                $defaultEcho = "No such method exists in the database, please try another";
                echo $defaultEcho;
            }
                   
        }
        //echo an empty screen when first viewing
        else{
            //$varvar = "Starting empty";
            //echo $varvar;
            echo "<p></p>";
           
        }
      
           
                                   
        ?>
        
                </div>
        </div>
        
        <!-- main content covered on the bottom right, which is the image that is also taken from the database -->
        <div id="mainContentBottomRight">
            <div id="mainContentBottomRightImage">
                
                <?php
                    
                    	
                    // query the imagemethod table and find the name of the search input
                    // with this name, echo the image href associated with it in the table, will show the relevant image
   
                    if(isset($_POST['searchInput']) && isset($_POST["language"])){
                    //echo $_POST['searchInput'] . " " . $_POST["language"];

                    $currentlanguage = $_POST["language"];
                    $name = $_POST['searchInput'];
                    

                    $conn = mysqli_connect("us-cdbr-east-05.cleardb.net","bd317668d6ac89","648019f5","heroku_5fe39184ffe2eef");


                    $sql="SELECT * FROM methodimages WHERE ImageMethod = '$name' ";

                    $result = mysqli_query($conn , $sql);

                    $row = mysqli_fetch_row($result);
                    
                    
                    //image query
                     if(!is_null($name) && !is_null($currentlanguage) && $row != null)
                        {

                            if($currentlanguage == "Java"){
                                echo($row[1]);


                            }


                             else if($currentlanguage == "C#")
                            {

                                echo($row[2]);

                            }

                            else if($currentlanguage == "C++")
                            {

                                echo($row[3]);

                            }

                             else
                            {    

                                echo($row[4]);

                            }

                        }

                    
                    }
                    
                    
                    //end
                    ob_end_flush();
                  ?>
                 
                
                
                
                <!--<img src="images/placeholderSS.png" id="contentImage">-->
                
            </div>
                     
        </div>
 

    </div>
    
    



</div>

</div>


</body>

</div>
    
</html>
