<?php




?>

<html>
    
    <head>
        
         <!-- include the CSS file and javascript file -->
        <link rel="stylesheet" href="submitTemplateCSS.css">
        <script type="text/javascript" src="javascriptfile.js"></script>
        
        
    </head>
    
    <!-- wrapper that contains the whole page -->
    <div id="wrapper">
    
    <body>
         
        <div id="mainDiv">
            <!-- header tab div that contains tabs to other parts of the page -->
            <div id="headerTabDiv">
                
                <button id="mainScreenTab" onclick="window.location='index.php'">Home</button>
                <button id="translateCodeTab"onclick="window.location='codeTranslator.php'">Translate Code</button>  
                
            </div>
            
            
            <!-- header div that contains the upper side of the page-->
            <div id="headerDiv">
                                         
                <!-- the showTutorial button, which will show the submission tutorial div on click-->
                <!-- The tutorial div will show the user how to properly submit the entries -->
                
                <button id="showTutorial" onclick="showSubmissionTutorialDiv()" > Show submission tutorial </button>
                
                <div id = "hoverTutorial" style="display: none">
                    
                    <div id="closeButton">
                        <input type="image" src="https://i.ibb.co/1GYKz6x/x-mark-256.png" onclick="closeTutorial()" id="closeTutorialButton"></input>
                                         
                    </div>
                    
                    <div id = "tutorialHeaderDiv">
                        <p id = "tutorialHeaderP"> Submission Information </p>
                        <p id = "tutorialHeaderDescP"> The template should be filled in the following format </p>
                    </div>
                         
                    <div id = "tutorialTitleDiv">
                        <p> <b>Title:</b></p>
                        <p> Include the name of the method and the programming language that is covered </p>
                    </div>
                    
                    <div id = "tutorialDescriptionDiv">
                        <p><b>Description:</b></p>
                        <p> Include a short tutorial about the method that is covered </p>
                    </div>
                         
                    <div id = "tutorialDocumentationDiv">
                        <p> <b>Documentation:</b></p>
                        <p> Include documentation links to the method </p>
                    </div>
                    
                     <div id = "tutorialImageSubmissionDiv">
                        <p> <b>Image:</b></p>
                        <p> Preview an image here and later attach it to the e-mail submission </p>
                    </div>
                    
                     <div id = "tutorialSubmissionDiv">
                        <p> <b>Submission:</b></p>
                        <p> Once the necessary fields are filled, click the "Submit Template", after this please click the "E-mail us" link and proceed </p>
                    </div>
                    
                    
                </div>
                
                
            </div>
            
            <!-- the href will create a e-mail submission with mailto: to a predefined gmail account for the developers to check -->
            <div id="emailContentDiv">
                
                <div id ="mailLinkDiv">
                
                <a id ="emailContent" href="mailto:codeswapsubmission@gmail.com?
                 cc=&
                 bcc=
                 &subject= WARNING: Please press the 'Submite Template' button before preceeding!
                 &body=WARNING: Please press the 'Submite Template' button before preceeding!">
                    
                    
                 E-mail us!         
                 </a>
                    
                </div>
                <!-- by clicking the submit template button, we will create a template submission -->
                <!-- by doing this, the user will be ready to send an e-mail -->
                <!-- the values will be taken through javascript from user entered values once the submit template button is clicked-->
                <div id="submitButtonDiv">
                    <button id="submitTemplateButton" onclick="submitTemplate()"> Submit Template </button>
                </div>
              
                
        
                   
            </div>
            
            
            
            <!-- The submission template for the user to enter values-->
            <div id="submissionBackground">
            
                <div id="submissionTemplate">
                
                    <div id="submissionLeft">
                        
                        
                            <div id="submissionLeftText">
                                
                                <!-- The div for the title entry from the user(for-loop,while) etc -->
                                <div id="submissionTitle">
                                        
                                    <textarea type="text" placeholder="Title" id="titleInput" name="titlePost"></textarea>


                                </div>
                                
                                <!-- The div for the description entry -->
                                <div id="submissionText">

                                    <textarea  type="text" placeholder="Description" id="descriptionInput" name="descriptionPost"></textarea>


                                </div>
                                
                                <!-- The div that contains the href to the documentation of the given method --> 
                                <div id="submissionLinks">

                                    <textarea type="text" placeholder="Documentation links" id="referenceInput" name="documentationPost"></textarea>
                                 </div>
                            
                        
                            </div>
                        
                    </div>
                    
                    
                    <!-- The right side of the submissiondiv will contain a place for the user to preview an image -->
                    <div id="submissionRight">
                        <div id="submissionRightContent">
                            <div id="submissionPhoto">
                                
                                <div id="submitPhotoButtonDiv">
                                    
                                    
                                    <!-- Button that will allow the user to show the uploaded image in the given section -->
                                    <!-- the handleImageUpload() javascript function will be used for this -->
                                    <input type="file" name="myImage" id="uploadedUserImage"  accept="image/*" />                                  
                                    <button id="submitPhotoButton" value="Upload" onclick="handleImageUpload()"> Preview Image </button>   
                                    
                                </div>
                                
                                <!--The div that contains the image, by default it will be a placeholder picture -->
                                <div id="photoDiv">
                                    <img id="uploadedPhoto" src ="https://i.ibb.co/MhHYqmQ/image-placeholder-icon-18.png" onerror="https://i.ibb.co/MhHYqmQ/image-placeholder-icon-18.png"></img>
                                </div>

                            </div>
                        </div>    
                    </div>
                    
                    
                
                
                </div>
                
            </div>
        
         
        </div>
        
    </body>
    
    </div>
 
    
    
    
    
</html>

