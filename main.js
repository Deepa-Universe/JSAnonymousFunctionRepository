//Anonymous Function

//It is executed where it has been defined

//Simple Anonymous Function
(
    (
        function()
        {
            console.log("Hello Anonymous Function");
        }
    )
)();

//Parameterized Anonymous Function
let resultAnonyFunc = (
    (
        function(strName)
        {
            return strName + " Reddy";
        }
    )
)("Bharat");

console.log(resultAnonyFunc);