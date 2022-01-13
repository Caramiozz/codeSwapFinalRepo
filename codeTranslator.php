<?php


?>


<html>
    
    <head>
        <!-- Include the CSS and javascript files-->
        <link rel="stylesheet" href="codeTranslatorCSS.css">
        <script type="text/javascript" src="javascriptfile.js"></script>
        
    </head>
    
    <!-- wrapper to hold the whole body -->
    <div id="wrapper">
    
    <body>
        
        <!-- The main div that will contain the pages functionality -->
        <div id="translatorMainDiv">
            
            <!-- header that stores the tabs to access other pages in the website -->
            <div id ="translatorHeader">
                
                <button id="mainScreenTab" onclick="window.location='index.php'">Home</button>
                <button id="submitTemplateTab"onclick="window.location='submitTemplate.php'">Contribute to the site</button>  
                
            </div>
            
            <!-- Tutorial div that contains the view tutorial button that contains translator tutorial-->
            
            <div id="tutorialDiv">
                <button id="tutorialShowButton" onclick="showTanslateTutorialDiv()" >View Tutorial</button>
            </div>
            
                <!-- A div that has its display set to none by default, this will be changed once the tutorialShowButton is clicked -->
                <!-- This tutorial will show the user how to use the code translator functinality -->
                <div id = "hoverTutorial" style="display: none">
                    
                    <div id="closeButton">
                        <input type="image" src="https://i.ibb.co/1GYKz6x/x-mark-256.png" onclick="closeTutorial()" id="closeTutorialButton"></input>
                                         
                    </div>
                    
                    <div id = "tutorialHeaderDiv">
                        <p id = "tutorialHeaderP"> How to translate</p>

                    </div>
                         
                    <div id = "tutorialTitleDiv">
                        <p> <b>Select a method that you would like to translate</b></p>
                        <p> To select a method, simply type in the required method in the "Method name" input box</p>
                    </div>
                    
                    <div id = "tutorialDescriptionDiv">
                        <p><b>Select a language</b></p>
                        <p> Select the language that you would like to implement the method in by changing the the dropdowns on the left side </p>
                    </div>
                         
                    <div id = "tutorialDocumentationDiv">
                        <p> <b>Select the translated language</b></p>
                        <p> Select the language that you would like to translate to by changing the dropdowns on the right side </p>
                    </div>
                    
                     <div id = "tutorialImageSubmissionDiv">
                        <p> <b>Submit the template</b></p>
                        <p> You can now press the "Submit Template" button to get a template on the method that you are using </p>
                    </div>
                    
                     <div id = "tutorialSubmissionDiv">
                        <p> <b>Translate</b></p>
                        <p> After filling the template, you can simply click "Translate" and the translation will show on the right side</p>
                        <p> You can use the copy to clipboard button on the right side and click "Try it yourself" to access the online compiler</p>
                    </div>
                    
                    
                </div>
            
            
            
            
            <!-- The div that contains the necessary elements for the user inputs -->
         
            <div id ="userInputDiv">
            
             
            <!-- Form that contains the submit template button, -->    
            <form method="post" id="userInputForm">
                
                <!-- This button will be used to submit the template in the given language so the users can input values -->
                <div id = "translateButtonInFormDiv">
                <button id="translateButton" type="submit"> Submit Template </button>
                </div>
                
                <div id = "userInputFormInputDiv">
               <input  type="text" placeholder="Method name" name="methodNameTextPost" id="methodName" value="<?php if (isset($_POST['methodNameTextPost'])) echo $_POST['methodNameTextPost']; ?>"></input>  
                
                <!-- The dropdown that signifies the language the user wants to enter the input in -->
              <select id="languageTranslateFrom" name="languageTranslateFromPost">
                    <option value="Java" <?php echo (isset($_POST['languageTranslateFromPost']) && $_POST['languageTranslateFromPost'] == 'Java') ? 'selected' : ''; ?>>Java</option>
                    <option value="Python" <?php echo (isset($_POST['languageTranslateFromPost']) && $_POST['languageTranslateFromPost'] == 'Python') ? 'selected' : ''; ?>>Python</option>
                    <option value="C++" <?php echo (isset($_POST['languageTranslateFromPost']) && $_POST['languageTranslateFromPost'] == 'C++') ? 'selected' : ''; ?>>C++</option>
                    <option value="C#" <?php echo (isset($_POST['languageTranslateFromPost']) && $_POST['languageTranslateFromPost'] == 'C#') ? 'selected' : ''; ?>>C#</option>
                </select>
            
            <img src="https://i.ibb.co/7XK4QKk/arrow-right-icon-128385.png" id="translationArrowRight"></img> 
            
            
            <!-- The dropdown that signifies the language the user wants to translate to -->
            <select id="languageTranslateTo" name="languageTranslateToPost" onchange="translateLanguageChange()">
                    <option value="Java"  <?php echo (isset($_POST['languageTranslateToPost']) && $_POST['languageTranslateToPost'] == 'Java') ? 'selected' : ''; ?>>Java</option>
                    <option value="Python" <?php echo (isset($_POST['languageTranslateToPost']) && $_POST['languageTranslateToPost'] == 'Python') ? 'selected' : ''; ?>>Python</option>
                    <option value="C++" <?php echo (isset($_POST['languageTranslateToPost']) && $_POST['languageTranslateToPost'] == 'C++') ? 'selected' : ''; ?>>C++</option>
                    <option value="C#" <?php echo (isset($_POST['languageTranslateToPost']) && $_POST['languageTranslateToPost'] == 'C#') ? 'selected' : ''; ?>>C#</option>
                </select>
            
            </div>
                
            
            
             
            </form>
                
             
        
            </div>
            <!-- Translate the button to another language , also depending on the dropdown, the compiler link will be changing, will be java by default -->
             <div id = "translateButtonOutsideDiv">  
                <button onclick="translateButton()" id="translateToLanguageButton"> Translate </button>
                <a id="compilerLinkText" rel="noopener noreferrer" href="https://www.programiz.com/java-programming/online-compiler/">Try it yourself !</a>
            </div>    
            
            <div id="translateDiagramDiv">
            
            <div id="translatorLeft">
                
                
                <?php
                
                    // if both the languages are set and the method name input is also set
                    if(isset($_POST['languageTranslateFromPost']) && isset($_POST["languageTranslateToPost"]) && isset($_POST["methodNameTextPost"]))
                    {
                        //echo $_POST['searchInput'] . " " . $_POST["language"];            
                        $methodName = $_POST["methodNameTextPost"];
                        $languageTemplate = $_POST["languageTranslateFromPost"];
                      
                        
                    //connect to sql
                    $conn = mysqli_connect("localhost","root","","group5");
                    //$sql="SELECT * FROM Methods WHERE Name = '".$name."'  ";
                    
                    //query the translatemethods table with the methodname from the input
                    $sql="SELECT * FROM translatemethods WHERE methodname = '$methodName' ";          
                    $result = mysqli_query($conn , $sql);
            
                    $row = mysqli_fetch_row($result);
                    
                   
                    // depending on the methodname input, we will submit the template
                    // for one of the languages, these templates are predefined html 
                    // codes which will be echoed on the bottom left of the screen
                    
                    if(!is_null($methodName) && $row != null)
                        {
                
                            if($languageTemplate == "Java")
                            {
                                echo($row[1]);
                            }
                            else if($languageTemplate == "Python")
                            {
                            
                                echo($row[2]);
                            }

                            else if($languageTemplate == "C++")
                            {
                                echo($row[3]);
                            }
                            else
                            {
                           
                                echo($row[4]);
                            }
                 
                        }
                    else
                    {
                       // invalid input if it does not exist
                        echo "Invalid input";
                    }
                   
                }
                // start as empty when the page is first opened
                else
                {
                    //$varvar = "Starting empty";
                    //echo $varvar;
                    echo "<p></p>";           
                }
                
                
                ?>

          
                   
                
               
                <!-- TEMPLATE VARIETY, KEEP HERE FOR LATER USE -->
                
                
                <!--
                <div id="functionInputDiv">
                    
                
                    
                    
                <p>(for int </p>              
                <input type="text" placeholder="Variable" id="variableNameInput" name="variableName" onchange="changeInputs()"></input>
                <p>  = </p>
                <input type="text" placeholder="Variable Number" id="variableNumberInput" name="variableNumber"></input>
                <p>;</p>
            
                <p name="varNameMid" > </p>
                
                <select id="variableComparisonInput">
                    <option value="greater" >></option>
                    <option value="lesser" ><</option>
                    <option value="greaterEqual" >>=</option>
                    <option value="lesserEqual" ><=</option>
                </select>
                
                <input type="text" placeholder="Variable Compare number" id="variableLimitInput" name="variableComparisonNumber"></input>
                
                <p>;</p>
                
                <p name="varNameMid" > </p>
                <select id="variableIncrementInput">
                    <option >++</option>
                    <option >--</option>    
                </select>
                
                <p>;)</p>
                
                
                
                </div>
                
                !-->
                
                
                
                
                
            </div>
                <!-- this button will add the copy to clipboard functionality for the translated methods -->
                <input type="image" src="https://i.ibb.co/X2G1Y0M/copy-to-clipboard-icon-1.png" onclick="copyToClipboard()" id="copyToClipboardButton"></input>
                
                <!-- this div will hold the translated part -->
            <div id="translatorRight">
                
                <div id = "translatorRightContextDiv">
                <pre id="resultText"></pre>
                </div>
                
            </div>
                
                
            </div>
            
            
            
            
            
            
            
        </div>
        
        
        
    </body> 
    
    </div>
</html>
