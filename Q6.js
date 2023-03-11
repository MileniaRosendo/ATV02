var num  = 0;
var num2 = 0;
var resultNum = "", resultNum2 = " ";
while(num < 21)
{
    resultNum = resultNum + "<br> " +num;
    
    num++;
    resultNum2 = resultNum2 + " " +num2;
    num2++;
   
}
document.write(resultNum + "<br>");
document.write(resultNum2);