
var validUser = false;




//make password visible
function showPassword(){
    
    if(document.getElementById("passwordInput").getAttribute(('type')) === 'password'){
  
        document.getElementById("passwordInput").type = 'text';
        document.getElementById("passwordRepeatInput").type = 'text';
     
    }
    else
    {
        document.getElementById("passwordInput").type = 'password';
        document.getElementById("passwordRepeatInput").type = 'password';
              
    }
    
    
}


//alert if the name is already exists
function alertTakenName(){
    
    alert("That name is already taken, Please try another.");
    
}
//alert if the e-mail already exists
function alertTakenMail(){
    
    alert("That e-mail is already taken, Please try another.");
    
}

//alert that shows that the account was created
function alertProperCreation(){
    
    alert("Your account was created successfuly!");
    
}
// alert that warns the user that no such username password combination exists while logging in
function alertNonExists(){
    
    alert("No such account combination exists");
    
}






//var to toggle between views with clicking outside
//show or hide the login div
function toggleLogin() {
    if(document.getElementById("loginDropdown").style.display === "none"){
        document.getElementById("loginDropdown").style.display = "block";
    }
    else
    {
        document.getElementById("loginDropdown").style.display = "none";
    }
}

function closeLoginDropdown(){
    
    
    document.getElementById("loginDropdown").style.display = "none";
    
}


//click outside to disable div view for login dropdown
//this will add an eventListener to the current page, which will
//call a function on use mouseup
//if the loginDropDown is not the target of the users click, we will set its display to none
document.addEventListener('mouseup', function(e) {
    var loginDropDown = document.getElementById('loginDropdown');
    if (!loginDropDown.contains(e.target)) {
        loginDropDown.style.display = 'none';
    }
});
//click outside to disable div view for submission tutorial
//the way it works is the same with the function above
document.addEventListener('mouseup', function(e) {
    var hoverTutorial = document.getElementById('hoverTutorial');
    if (!hoverTutorial.contains(e.target)) {
        hoverTutorial.style.display = 'none';
    }
});

//Button to close tutorialdiv
function closeTutorial()
{
    
    document.getElementById('hoverTutorial').style.display = 'none';
    
}
function closeMethodsList()
{
    
    document.getElementById('listContainerDiv').style.display = 'none';
    
}




//upload image to img src element and allow the user to preview the image
function handleImageUpload() 
{

    // the image var is set to the "uploadedUserImage" elements first file
    var image = document.getElementById("uploadedUserImage").files[0];
    
    //define a filereader to take a file input from the user
    var reader = new FileReader();
    
    //getting the contents of the image
    reader.readAsDataURL(image);
    
    //the reader.onload will call the function once a file is loaded to the reader
    reader.onload = function(e)
    {
      //we will set the image of the uploadedPhoto to e.target.result, which contains the file 
      document.getElementById("uploadedPhoto").src = e.target.result;
    }
    
    
    
  

} 
//set the values from php and submit the form
function changefav(searchinput)
{
    document.getElementById("searchInp").value = searchinput;
    document.getElementById("searchForm").submit();
   
    
    
}
//alert the user that their favourites are full
function alertFavsFull()
{
    
    alert("Your favourites are full");
    
}
function alertNoSuchMethod()
{
    
    alert("No such method exists");
    
}


//change href of compiler depending on the selected dropdown ( this is for the codeTranslator.php page)
function translateLanguageChange()
{
    if(document.getElementById("languageTranslateTo").selectedIndex == 0)
    {
        document.getElementById("compilerLinkText").href = "https://www.programiz.com/java-programming/online-compiler/";
    }
    else if(document.getElementById("languageTranslateTo").selectedIndex == 1)
    {
        document.getElementById("compilerLinkText").href = "https://www.programiz.com/python-programming/online-compiler/";
    }
    else if(document.getElementById("languageTranslateTo").selectedIndex == 2)
    {
        document.getElementById("compilerLinkText").href = "https://www.onlinegdb.com/online_c_compiler";
    }
    else
    {
        document.getElementById("compilerLinkText").href = "https://www.programiz.com/csharp-programming/online-compiler/";
    }
    
}

//Submit template button, which will set the properties of the e-mail href to the following, which can then be clicked
//to submit an entry to the website via e-mail
function submitTemplate()
{
    
    var title = document.getElementById("titleInput").value;
    var description = document.getElementById("descriptionInput").value;
    var references = document.getElementById("referenceInput").value;
    
   
    document.getElementById("emailContent").href = "mailto:codeswapsubmission@gmail.com?\n\
    subject="+title+"&body=Title:" +escape('\r\n') +title + escape('\r\n') +"Description:"+escape('\r\n') + description+escape('\r\n')+ "References:" +escape('\r\n') +  references;
    
 
    
}
//show the submission tutorial div on click or hide it on click
function showSubmissionTutorialDiv()
{
    
    if(document.getElementById("hoverTutorial").style.display === "none"){
        document.getElementById("hoverTutorial").style.display = "flex";
    }
    else
    {
        document.getElementById("hoverTutorial").style.display = "none";
    }
    
    
}

//show the translate tutorial div on click
function showTanslateTutorialDiv()
{
    
    if(document.getElementById("hoverTutorial").style.display === "none"){
        document.getElementById("hoverTutorial").style.display = "flex";
    }
    else
    {
        document.getElementById("hoverTutorial").style.display = "none";
    }
    
    
}

//show the list of methods div
function showMethodsList()
{
    
    if(document.getElementById("listContainerDiv").style.display === "none"){
        document.getElementById("listContainerDiv").style.display = "flex";
    }
    else
    {
        document.getElementById("listContainerDiv").style.display = "none";
    }
    
    
}





//-----------------------------------------------
//JAVASCRIPT METHODS FOR THE CODETRANSLATOR PAGE
////-----------------------------------------------
//Copy to clipboard function
function copyToClipboard() {
  
   const elem = document.createElement('textarea');
   elem.value = (document.getElementById("resultText").innerText);
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}






//change entry inputs to match for loop
function changeInputs()
{
    // change inputs for the for loop only in the following languages
    if((document.getElementById("languageTranslateFrom").value == 'Java' && document.getElementById("methodName").value == "For-Loop") ||
       (document.getElementById("languageTranslateFrom").value == 'C++' && document.getElementById("methodName").value == "For-Loop")  ||
       (document.getElementById("languageTranslateFrom").value == 'C#' && document.getElementById("methodName").value == "For-Loop"))
    {
    
        var nameVar = document.getElementsByName("variableName")[0].value;

        for(var i=0; i < document.getElementsByName("varNameMid").length; i++)
         {
            document.getElementsByName("varNameMid")[i].innerHTML = nameVar;

         }
    
    }   
     
}

//this button will change functionality depending on the input values from the user
function translateButton()
{
    
    var lowerCaseMethod = document.getElementById("methodName").value.toLowerCase();
    
    //For-Loops...
    if(document.getElementById("languageTranslateFrom").value == 'Java' && lowerCaseMethod =="for-loop")
    {
        javaToOtherLanguagesForLoop();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'Python' && lowerCaseMethod =="for-loop")
    {
        pythonToOtherLanguagesForLoop();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C++' && lowerCaseMethod =="for-loop")
    {
        CPlusPlusToOtherLanguagesForLoop();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C#' && lowerCaseMethod =="for-loop")
    {
        CSharpToOtherLanguagesForLoop();
    }
    
    ///
    ///Switch statement functions
    
    if(document.getElementById("languageTranslateFrom").value == 'Java' && lowerCaseMethod =="switch")
    {
        javaToOtherLanguagesSwitch();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C#' && lowerCaseMethod =="switch")
    {
        CSharpToOtherLanguagesSwitch();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C++' && lowerCaseMethod =="switch")
    {
        CPlusPlusToOtherLanguagesSwitch();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'Python' && lowerCaseMethod =="switch")
    {
        PythonToOtherLanguagesSwitch();
    }
    
    ///
    ///Print functions
    if(document.getElementById("languageTranslateFrom").value == 'Java' && lowerCaseMethod =="print")
    {
        JavaToOtherLanguagesPrint();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C#' && lowerCaseMethod =="print")
    {
        CSharpToOtherLanguagesPrint();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C++' && lowerCaseMethod =="print")
    {
        CPlusPlusToOtherLanguagesPrint();
    }
    else if(document.getElementById("languageTranslateFrom").value == 'Python' && lowerCaseMethod =="print")
    {
        PythonToOtherLanguagesPrint();
    }
   
    
    
    
    
}

//Java to other languages For-Loop
function javaToOtherLanguagesForLoop()
{
    
    //comparison checker 
        var comparisonCheckerElement = document.getElementById("variableComparisonInput");
        var comparisonChecker = comparisonCheckerElement.options[comparisonCheckerElement.selectedIndex].text;
        
        //increment checker
        var incrementCheckerElement = document.getElementById("variableIncrementInput");
        var incrementChecker= incrementCheckerElement.options[incrementCheckerElement.selectedIndex].text;
               
        //These two below will be ints
        //limit number checker
        var limitCheckerElement = document.getElementById("variableLimitInput");
        var limitChecker =  limitCheckerElement.value;
        var limitCheckerNum = parseInt(limitChecker);
        
        //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker)
    
    
    if(document.getElementById("languageTranslateTo").value == "Java")
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
      
        
        if(comparisonChecker == ">" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
               
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + ",-1):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == ">=" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
           
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value  + "-1 ,-1 ):";                  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<" && incrementChecker == "++" && Number(variableNumberChecker) < Number(limitChecker))
        {
           //for i in range(0,10):;
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<=" && incrementChecker == "++")
        {
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "+1 ,+1 " + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else
        {
            
            alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            
        }
        
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == "C++")
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C++ as in Java!";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == "C#")
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C# as in Java!";
        
        
    }
    
   
}

//Python to other languages For-Loop
function pythonToOtherLanguagesForLoop()
{
    
  
        //increment checker
        var incrementCheckerElement = document.getElementById("variableIncrementInput");
        var incrementChecker = incrementCheckerElement.options[incrementCheckerElement.selectedIndex].text;
        
        //var number limit
        var limitCheckerElement = document.getElementById("variableLimitInput");
        var limitChecker =  limitCheckerElement.value;
        var limitCheckerNum = parseInt(limitChecker);
               
        
        //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker)
        
      
        
        
        if(document.getElementById("languageTranslateTo").value == "Python")
        {
            alert("You are trying to translate to the same language");
        }
        
        //Python to Java
        else if(document.getElementById("languageTranslateTo").value == "Java")
        {
             
            if( (limitCheckerNum < variableNumberCheckerNum) && incrementChecker === '-1')
            {
                alert("got here");
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " +  variableNumberChecker + ";" + document.getElementById("variableNameInput").value +" > " + limitChecker + ";" +  document.getElementById("variableNameInput").value + "-- )"+ "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}"; 
                document.getElementById("resultText").innerHTML = convertedJava; 
            }
            else if( limitCheckerNum > variableNumberCheckerNum && incrementChecker === '+1')
            {
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " + document.getElementById("variableNumberInput").value + ";" + document.getElementById("variableNameInput").value +" < " +  document.getElementById("variableLimitInput").value + ";" +  document.getElementById("variableNameInput").value + "++ )"+ "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}";  
                document.getElementById("resultText").innerHTML  = convertedJava; 
            }
            else{
                alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            }
                     
        }
        
        //Python to C#
        else if(document.getElementById("languageTranslateTo").value == 'C#')
        {
            
           
           if( (limitCheckerNum < variableNumberCheckerNum) && incrementChecker === '-1')
            {
                alert("got here");
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " +  variableNumberChecker + ";" + document.getElementById("variableNameInput").value +" > " + limitChecker + ";" +  document.getElementById("variableNameInput").value + "-- )"+ "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}";  
                document.getElementById("resultText").innerHTML = convertedJava; 
            }
            else if( limitCheckerNum > variableNumberCheckerNum && incrementChecker === '+1')
            {
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " + document.getElementById("variableNumberInput").value + ";" + document.getElementById("variableNameInput").value +" < " +  document.getElementById("variableLimitInput").value + ";" +  document.getElementById("variableNameInput").value + "++ )"+ "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}"; 
                document.getElementById("resultText").innerHTML  = convertedJava; 
            }
            else{
                alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            }
                     
        }
        
        //Python to C++
        else if(document.getElementById("languageTranslateTo").value == 'C++')
        {
             if( (limitCheckerNum < variableNumberCheckerNum) && incrementChecker === '-1')
            {
                alert("got here");
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " +  variableNumberChecker + ";" + document.getElementById("variableNameInput").value +" > " + limitChecker + ";" +  document.getElementById("variableNameInput").value + "-- )" + "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}";  
                document.getElementById("resultText").innerHTML = convertedJava; 
            }
            else if( limitCheckerNum > variableNumberCheckerNum && incrementChecker === '+1')
            {
                var convertedJava = "for( int " + document.getElementById("variableNameInput").value + " = " + document.getElementById("variableNumberInput").value + ";" + document.getElementById("variableNameInput").value +" < " +  document.getElementById("variableLimitInput").value + ";" +  document.getElementById("variableNameInput").value + "++)"  + "<br>" + "{" + "<br>" + "Action here" + "<br>" + "}";  
                document.getElementById("resultText").innerHTML  = convertedJava; 
            }
            else{
                alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            }
                     
        }
        
        //If some conditions are not met
        else
        {
            
            alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            
        }
  
}

//C++ To others For-Loop
function CPlusPlusToOtherLanguagesForLoop()
{
    
    
    //comparison checker 
        var comparisonCheckerElement = document.getElementById("variableComparisonInput");
        var comparisonChecker = comparisonCheckerElement.options[comparisonCheckerElement.selectedIndex].text;
        
        //increment checker
        var incrementCheckerElement = document.getElementById("variableIncrementInput");
        var incrementChecker= incrementCheckerElement.options[incrementCheckerElement.selectedIndex].text;
               
        //These two below will be ints
        //limit number checker
        var limitCheckerElement = document.getElementById("variableLimitInput");
        var limitChecker =  limitCheckerElement.value;
        
        //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
    
    
    if(document.getElementById("languageTranslateTo").value == 'C++')
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
      
        
       if(comparisonChecker == ">" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
               
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + ",-1):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == ">=" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
           
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value  + "-1 ,-1 ):";                  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<" && incrementChecker == "++" && Number(variableNumberChecker) < Number(limitChecker))
        {
           //for i in range(0,10):;
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<=" && incrementChecker == "++")
        {
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "+1 ,+1 " + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else
        {
            
            alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            
        }
        
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == 'Java')
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C++ as in Java!";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == 'C#')
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C# as in Java!";
        
        
    }
    
    
    
}

//C# To others For-Loop
function CSharpToOtherLanguagesForLoop()
{
    
    
    //comparison checker 
        var comparisonCheckerElement = document.getElementById("variableComparisonInput");
        var comparisonChecker = comparisonCheckerElement.options[comparisonCheckerElement.selectedIndex].text;
        
        //increment checker
        var incrementCheckerElement = document.getElementById("variableIncrementInput");
        var incrementChecker= incrementCheckerElement.options[incrementCheckerElement.selectedIndex].text;
               
        //These two below will be ints
        //limit number checker
        var limitCheckerElement = document.getElementById("variableLimitInput");
        var limitChecker =  limitCheckerElement.value;
        
        //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
    
    
    if(document.getElementById("languageTranslateTo").value == 'C#')
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
      
        
        if(comparisonChecker == ">" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
               
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + ",-1):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == ">=" && incrementChecker == "--" && Number(variableNumberChecker) > Number(limitChecker))
        {
           
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value  + "-1 ,-1 ):";                  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<" && incrementChecker == "++" && Number(variableNumberChecker) < Number(limitChecker))
        {
           //for i in range(0,10):;
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else if(comparisonChecker == "<=" && incrementChecker == "++")
        {
           var convertedPython = "for " + document.getElementById("variableNameInput").value + " in range (" + document.getElementById("variableNumberInput").value + "," + document.getElementById("variableLimitInput").value + "+1 ,+1 " + "):";  
           document.getElementById("resultText").innerHTML = convertedPython; 
        }
        else
        {
            
            alert("Check the variables, you may be entering an input that will put you in an endless loop (Example: '>' input with a '++' incrementation\n\
                    Or you might have entered the number values incorrectly)");
            
        }
        
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == 'C++')
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C# as in C++!";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == 'Java')
    {
        
        document.getElementById("resultText").innerHTML = "Luckily for you, you can use the same syntax in C# as in Java!";
        
        
    }
    
    
    
}

//CHANGING INPUTS FOR THE LEFT SIDE FOR SWITCH STATEMENTS
function changeInputsSwitch()
{
     var nameVar = document.getElementsByName("variableName")[0].value;
     
      //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
    
    // change inputs for the for loop only in the following languages
    if(document.getElementById("languageTranslateFrom").value == 'Java' && document.getElementById("methodName").value =="Switch")
    {
    
     document.getElementById("switchCasePre").innerHTML = "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "System.out.println(\"First case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "System.out.println(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 " System.out.println(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "System.out.println(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "System.out.println(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "System.out.println(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "System.out.println(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "System.out.println(\"Default case was accessed\");"+"\n" +
                              "}";
                              
    
    }
    else if(document.getElementById("languageTranslateFrom").value == 'C++' && document.getElementById("methodName").value =="Switch")
    {
        
        
        
         document.getElementById("switchCasePre").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "cout << \"First case was accessed\";" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "cout << \"Second case was accessed\";"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "cout << \"Third case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "cout << \"Fourth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "cout << \"Fifth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "cout << \"Sixth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "cout << \"Seventh case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "cout << \"Default case was accessed\";"+"\n" +
                              "}";
                      
                     
        
    }
     else if(document.getElementById("languageTranslateFrom").value == 'C#' && document.getElementById("methodName").value =="Switch")
    {
 
         document.getElementById("switchCasePre").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "Console.WriteLine(\"First case was accessed\");" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "Console.WriteLine(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "Console.WriteLine(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "Console.WriteLine(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "Console.WriteLine(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "Console.WriteLine(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "Console.WriteLine(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "Console.WriteLine(\"Default case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                              "}";
        
    }
     else if(document.getElementById("languageTranslateFrom").value == 'Python' && document.getElementById("methodName").value =="Switch")
    {
 
         document.getElementById("switchCasePre").innerHTML = nameVar+"="+variableNumberChecker + "\n" + "def switchFunc("+ nameVar +"):" + "\n" +
                                "    return {"+"\n"+
                                "       "+"1:'First case was accessed'," + "\n" +
                                "       "+"2:'Second case was accessed'," + "\n" +
                                "       "+"3:'Third case was accessed'," + "\n" +
                                "       "+"4:'Fourth case was accessed'," + "\n" +
                                "       "+"5:'Fifth case was accessed'," + "\n" +
                                "       "+"6:'Sixth case was accessed'," + "\n" +
                                "       "+"7:'Seventh case was accessed'," + "\n" +
                                "}.get(" +nameVar+", 'Default case')" + "\n"+                                
                                "print(switchFunc(" +nameVar+"))";
        
    }
     
}

////////////////////////////////////////////////
//////Functions to take user input//////////////
////////////////////////////////////////////////

//Java to other languages
function javaToOtherLanguagesSwitch()
{
    
      //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker);
        
      
        
        
        if(document.getElementById("languageTranslateTo").value == "Java")
        {
            alert("You are trying to translate to the same language");
        }
        
        //Python to Java
        else if(document.getElementById("languageTranslateTo").value == 'C++')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "cout << \"First case was accessed\";" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "cout << \"Second case was accessed\";"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "cout << \"Third case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "cout << \"Fourth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "cout << \"Fifth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "cout << \"Sixth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "cout << \"Seventh case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "cout << \"Default case was accessed\";"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to C#
        else if(document.getElementById("languageTranslateTo").value == 'C#')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "Console.WriteLine(\"First case was accessed\");" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "Console.WriteLine(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "Console.WriteLine(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "Console.WriteLine(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "Console.WriteLine(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "Console.WriteLine(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "Console.WriteLine(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "Console.WriteLine(\"Default case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to Python#
        else if(document.getElementById("languageTranslateTo").value == 'Python')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = nameVar+"="+variableNumberChecker + "\n" + "def switchFunc("+ nameVar +"):" + "\n" +
                                "    return {"+"\n"+
                                "       "+"1:'First case was accessed'," + "\n" +
                                "       "+"2:'Second case was accessed'," + "\n" +
                                "       "+"3:'Third case was accessed'," + "\n" +
                                "       "+"4:'Fourth case was accessed'," + "\n" +
                                "       "+"5:'Fifth case was accessed'," + "\n" +
                                "       "+"6:'Sixth case was accessed'," + "\n" +
                                "       "+"7:'Seventh case was accessed'," + "\n" +
                                "}.get(" +nameVar+", 'Default case')" + "\n"+                                
                                "print(switchFunc(" +nameVar+"))";
                           
        }
    
    
    
}

//C# to other languages
function CSharpToOtherLanguagesSwitch()
{
    
      //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker);
        
      
        
        
        if(document.getElementById("languageTranslateTo").value == "C#")
        {
            alert("You are trying to translate to the same language");
        }
        
        //Python to Java
        else if(document.getElementById("languageTranslateTo").value == 'C++')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "cout << \"First case was accessed\";" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "cout << \"Second case was accessed\";"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "cout << \"Third case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "cout << \"Fourth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "cout << \"Fifth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "cout << \"Sixth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "cout << \"Seventh case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "cout << \"Default case was accessed\";"+"\n" +
                              "}";
            
              
           
                     
        }
        //If we translate to C#
        else if(document.getElementById("languageTranslateTo").value == 'Java')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML ="int "+ nameVar +"=" + variableNumberChecker + ";" +"\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "System.out.println(\"First case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "System.out.println(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 " System.out.println(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "System.out.println(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "System.out.println(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "System.out.println(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "System.out.println(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "System.out.println(\"Default case was accessed\");"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to Python#
        else if(document.getElementById("languageTranslateTo").value == 'Python')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = nameVar+"="+variableNumberChecker + "\n" + "def switchFunc("+ nameVar +"):" + "\n" +
                                "    return {"+"\n"+
                                "       "+"1:\"First case was accessed\"," + "\n" +
                                "       "+"2:\"Second case was accessed\"," + "\n" +
                                "       "+"3:\"Third case was accessed\"," + "\n" +
                                "       "+"4:\"Fourth case was accessed\"," + "\n" +
                                "       "+"5:\"Fifth case was accessed\"," + "\n" +
                                "       "+"6:\"Sixth case was accessed\"," + "\n" +
                                "       "+"7:\"Seventh case was accessed\"," + "\n" +
                                "}.get(" +nameVar+", \"Default case\")" + "\n"+                                
                                "print(switchFunc(" +nameVar+"))";
                           
        }
        
    
    
    
}

//////////////////////
//C# to other languages
function CPlusPlusToOtherLanguagesSwitch()
{
    
      //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker);
         
      
        
        
        if(document.getElementById("languageTranslateTo").value == "C++")
        {
            alert("You are trying to translate to the same language");
        }
        
        //Python to Java
        else if(document.getElementById("languageTranslateTo").value == 'C#')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "Console.WriteLine(\"First case was accessed\");" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "Console.WriteLine(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "Console.WriteLine(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "Console.WriteLine(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "Console.WriteLine(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "Console.WriteLine(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "Console.WriteLine(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "Console.WriteLine(\"Default case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to C#
        else if(document.getElementById("languageTranslateTo").value == 'Java')
        {
            
           var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML ="int "+ nameVar +"=" + variableNumberChecker + ";" +"\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "System.out.println(\"First case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "System.out.println(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 " System.out.println(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "System.out.println(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "System.out.println(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "System.out.println(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "System.out.println(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "System.out.println(\"Default case was accessed\");"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to Python#
        else if(document.getElementById("languageTranslateTo").value == 'Python')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = nameVar+"="+variableNumberChecker + "\n" + "def switchFunc("+ nameVar +"):" + "\n" +
                                "    return {"+"\n"+
                                "       "+"1:\"First case was accessed\"," + "\n" +
                                "       "+"2:\"Second case was accessed\"," + "\n" +
                                "       "+"3:\"Third case was accessed\"," + "\n" +
                                "       "+"4:\"Fourth case was accessed\"," + "\n" +
                                "       "+"5:\"Fifth case was accessed\"," + "\n" +
                                "       "+"6:\"Sixth case was accessed\"," + "\n" +
                                "       "+"7:\"Seventh case was accessed\"," + "\n" +
                                "}.get(" +nameVar+", \"Default case\")" + "\n"+                                
                                "print(switchFunc(" +nameVar+"))";
                           
        }
        
    
    
    
}

//////////////////////
//C# to other languages
function PythonToOtherLanguagesSwitch()
{
    
      //variable equal number
        var variableNumberCheckerElement = document.getElementById("variableNumberInput");      
        var variableNumberChecker = variableNumberCheckerElement.value;
        var variableNumberCheckerNum = parseInt(variableNumberChecker)
        
      
        
        
        if(document.getElementById("languageTranslateTo").value == "Python")
        {
            alert("You are trying to translate to the same language");
        }
        
        //Python to Java
        else if(document.getElementById("languageTranslateTo").value == 'C#')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "Console.WriteLine(\"First case was accessed\");" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "Console.WriteLine(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "Console.WriteLine(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "Console.WriteLine(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "Console.WriteLine(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "Console.WriteLine(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "Console.WriteLine(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "Console.WriteLine(\"Default case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                              "}";
            
             
           
                     
        }
        //If we translate to C#
        else if(document.getElementById("languageTranslateTo").value == 'Java')
        {
            
            var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML ="int "+ nameVar +"=" + variableNumberChecker + ";" +"\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "System.out.println(\"First case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "System.out.println(\"Second case was accessed\");"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 " System.out.println(\"Third case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "System.out.println(\"Fourth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "System.out.println(\"Fifth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "System.out.println(\"Sixth case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "System.out.println(\"Seventh case was accessed\");"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "System.out.println(\"Default case was accessed\");"+"\n" +
                              "}";
            
            
             
           
                     
        }
        //If we translate to Python#
        else if(document.getElementById("languageTranslateTo").value == 'C++')
        {
            
             var nameVar = document.getElementsByName("variableName")[0].value;
            
            
            document.getElementById("resultText").innerHTML = "int "+nameVar+"="+variableNumberChecker  +";" + "\n" + "switch("+ nameVar +")" + "\n" +
                              "{"+  "\n" +
                                "case 1:"+"\n" +
                                  "cout << \"First case was accessed\";" +"\n" +
                                  "break;"+"\n" +
                                "case 2:"+"\n" +
                                  "cout << \"Second case was accessed\";"+"\n" +
                                  "break;" +"\n" +
                                "case 3:"+"\n" +
                                 "cout << \"Third case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 4:"+"\n" +
                                  "cout << \"Fourth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 5:"+"\n" +
                                  "cout << \"Fifth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 6:"+"\n" +
                                  "cout << \"Sixth case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                "case 7:"+"\n" +
                                  "cout << \"Seventh case was accessed\";"+"\n" +
                                  "break;"+"\n" +
                                  "default:"+"\n" +
                                  "cout << \"Default case was accessed\";"+"\n" +
                              "}";
                           
        }
 
    
}
//END OF SWITCH STATEMENTS


//PRINT FUNCTION TRANSLATIONS//
//java to others print
function JavaToOtherLanguagesPrint()
{

        
        //name of the variable put
        var nameVar = document.getElementsByName("variableName")[0].value;
        
    
    if(document.getElementById("languageTranslateTo").value == "Java")
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
    
        document.getElementById("resultText").innerHTML = "print(\"" +nameVar+ "\")";
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == "C++")
    {
        
        document.getElementById("resultText").innerHTML = "cout << \"" +nameVar+ "\";";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == "C#")
    {
        
        document.getElementById("resultText").innerHTML = "Console.WriteLine(\"" +nameVar +"\");";
        
    }
    
}

//C# to others print
function CSharpToOtherLanguagesPrint()
{

        
        //name of the variable put
        var nameVar = document.getElementsByName("variableName")[0].value;
        
    
    if(document.getElementById("languageTranslateTo").value == "C#")
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
    
        document.getElementById("resultText").innerHTML = "print(\"" +nameVar+ "\")";
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == "C++")
    {
        
        document.getElementById("resultText").innerHTML = "cout << \"" +nameVar+ "\";";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == "Java")
    {
        
        document.getElementById("resultText").innerHTML = "System.out.println(\"" +nameVar +"\");";
        
    }
    
}


//C++ to others print
function CPlusPlusToOtherLanguagesPrint()
{

        
        //name of the variable put
        var nameVar = document.getElementsByName("variableName")[0].value;
        
    
    if(document.getElementById("languageTranslateTo").value == "C++")
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "Python")
    {
    
        document.getElementById("resultText").innerHTML = "print(\"" +nameVar+ "\")";
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == "C#")
    {
        
         document.getElementById("resultText").innerHTML = "Console.WriteLine(\"" +nameVar +"\");";
        
        
    }
    //C++ to java
    else if(document.getElementById("languageTranslateTo").value == "Java")
    {
        
        document.getElementById("resultText").innerHTML = "System.out.println(\"" +nameVar +"\");";
        
    }
    
}

//Python to others print
function PythonToOtherLanguagesPrint()
{

        
        //name of the variable put
        var nameVar = document.getElementsByName("variableName")[0].value;
        
    
    if(document.getElementById("languageTranslateTo").value == "Python")
    {   
        alert("You are trying to translate to the same language");
        
    }   
    //Java to python
    else if(document.getElementById("languageTranslateTo").value == "C#")
    {
    
        document.getElementById("resultText").innerHTML = "Console.WriteLine(\"" +nameVar +"\");";
     
    }
    
    //Java to C++
    else if(document.getElementById("languageTranslateTo").value == "C++")
    {
        
        document.getElementById("resultText").innerHTML = "cout << \"" +nameVar+ "\";";
        
        
    }
    //Java to C#
    else if(document.getElementById("languageTranslateTo").value == "Java")
    {
        
        document.getElementById("resultText").innerHTML = "System.out.println(\"" +nameVar +"\");";
        
    }
    
}




 




